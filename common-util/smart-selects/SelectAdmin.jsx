import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, notification } from 'antd';
import debounce from 'lodash/debounce';
import isArray from 'lodash/isArray';
import memoize from 'lodash/memoize';
import isEqual from 'lodash/isEqual';

import { getAdmins } from 'apis/public-apis';
import { handleError } from 'helpers/error-handler';

const { Option } = Select;

export default class SelectAdmin extends Component {
  static propTypes = {
    status: PropTypes.string,
    role: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.arrayOf(PropTypes.shape({})),
    ]),
  }

  static defaultProps = {
    status: 'active',
    value: null,
    role: null,
  }

  pickIds = memoize((value) => {
    if (isArray(value)) {
      return value ? value.map(v => ((v || {})._id || {}).$oid) : [];
    }
    return value ? ((value || {})._id || {}).$oid : undefined;
  });

  constructor() {
    super();
    this.state = {
      loading: false,
      options: null,
    };
    this.cache = [];
  }

  componentDidMount() {
    this.seedOptions();
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (!isEqual(prevProps.value, value)) {
      this.seedOptions();
    }
  }

  onSearch = (value) => {
    this.getAdmins(value);
  }

  onChange = (val, e) => {
    const { onChange } = this.props;
    const { options } = this.state;
    let newVal;
    if (isArray(val)) {
      newVal = val.map((v) => {
        let optionObj = this.cache.find(option => v === option._id.$oid);
        if (!optionObj) {
          optionObj = options.find(option => v === option._id.$oid);
          this.cache.push(optionObj);
        }
        return optionObj;
      });
    } else {
      newVal = options.find(option => val === option._id.$oid);
    }
    onChange(newVal, e);
  }

  getAdmins(value) {
    this.setState({ loading: true, options: null });
    const { status, role } = this.props;
    const params = {
      q: value,
      role,
      status: status || 'active',
    };
    getAdmins(params).then((options) => {
      this.setState({ loading: false, options });
    }).catch((error) => {
      this.setState({ loading: false });
      notification.error({ message: 'Problem fetching options', description: handleError(error) });
    });
  }

  seedOptions = () => {
    const { value } = this.props;
    let { options } = this.state;
    if (!options) {
      options = [];
    }
    if (value) {
      if (isArray(value)) {
        value.forEach((v) => {
          if (
            options
              .findIndex(o => ((o || {})._id || {}).$oid === ((v || {})._id || {}).$oid) === -1
          ) {
            options.push(v);
            this.cache.push(v);
          }
        });
        this.setState({ options });
      } else {
        if (options.findIndex(o => o._id.$oid === value._id.$oid) === -1) {
          options.push(value);
        }
        this.setState({ options });
      }
    }
  }

  renderOptions() {
    const { options } = this.state;
    return options ? options.map((option, index) => (
      <Option
        key={((option || {})._id || {}).$oid || index}
        value={((option || {})._id || {}).$oid}
      >
        {option.name}
      </Option>
    )) : null;
  }

  render() {
    const { loading } = this.state;
    const {
      multiple, value, placeholder, ...rest
    } = this.props;
    const mode = multiple ? 'multiple' : 'default';
    const val = this.pickIds(value);
    return (
      <Select
        {...rest}
        showSearch
        allowClear
        onSearch={debounce(this.onSearch, 300)}
        filterOption={false}
        mode={mode}
        onChange={this.onChange}
        defaultActiveFirstOption={false}
        value={val}
        placeholder={placeholder || 'Type to search admins ...'}
        notFoundContent={loading ? 'loading ...' : 'No options found'}
      >
        {this.renderOptions()}
      </Select>
    );
  }
}
