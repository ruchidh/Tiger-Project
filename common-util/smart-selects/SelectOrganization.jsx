import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, notification } from 'antd';
import debounce from 'lodash/debounce';
import isArray from 'lodash/isArray';
import memoize from 'lodash/memoize';
import isEqual from 'lodash/isEqual';

import { handleError } from 'helpers/error-handler';
import { getOrganizations } from 'apis/public-apis';

const { Option } = Select;

export default class SelectOrganization extends Component {
	static propTypes = {
		statuses: PropTypes.arrayOf(PropTypes.string),
		types: PropTypes.arrayOf(PropTypes.string),
		ownerId: PropTypes.string(PropTypes.string),
		onChange: PropTypes.func,
		value: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
	};

	static defaultProps = {
		statuses: ['active'],
		types: null,
		ownerId: null,
		onChange: () => {},
		value: null,
	};

	pickIds = memoize((value) => {
		if (isArray(value)) {
			return value ? value.map(v => (v._id || {}).$oid) : [];
		}
		return value ? (value._id || {}).$oid : undefined;
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
		this.getOrganizations(value);
	};

	onChange = (val) => {
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
		onChange(newVal);
	};

	getOrganizations(value) {
		this.setState({ loading: true, options: null });
		const {
			statuses, ownerId, types, profile_types,
		} = this.props;
		const params = {
			q: value,
			statuses,
			types,
			profile_types,
			owner_id: ownerId,
		};
		getOrganizations(params)
			.then((options) => {
				this.setState({ loading: false, options });
			})
			.catch((error) => {
				this.setState({ loading: false });
				notification.error({
					message: 'Problem fetching options',
					description: handleError(error),
				});
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
					if (options.findIndex(o => o._id.$oid === v._id.$oid) === -1) {
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
	};

	renderOptions() {
		const { options } = this.state;
		return options
			? options.map(option => (
				<Option key={option._id.$oid} value={option._id.$oid}>
					{option.suggestion_name || option.short_name}
				</Option>
			))
			: null;
	}

	render() {
		const { loading } = this.state;
		const { multiple, value, ...rest } = this.props;
		const mode = multiple ? 'multiple' : 'default';
		const val = this.pickIds(value);
		return (
			<div>
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
					placeholder="Type to search organizations ..."
					notFoundContent={loading ? 'loading ...' : 'No options found'}
				>
					{this.renderOptions()}
				</Select>
			</div>
		);
	}
}
