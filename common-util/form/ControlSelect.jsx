import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import isString from 'lodash/isString';
import memoize from 'lodash/memoize';

const { Option } = Select;

const getLabel = memoize((option) => {
  if (isString(option)) {
    return option;
  }
  if (typeof option.label !== 'undefined') {
    return option.label;
  }
  if (typeof option.name !== 'undefined') {
    return option.name;
  }
  if (typeof option.value !== 'undefined') {
    return option.value;
  }
  return option.key;
});

const getValue = memoize((option) => {
  if (isString(option)) {
    return option;
  }
  if (typeof option.value !== 'undefined') {
    return option.value;
  }
  return option.key;
});

function ControlSelect(props) {
  const {
    options, multiple, mode, allowClear, ...rest
  } = props;
  const selectMode = multiple ? 'multiple' : (mode || 'default');
  return (
    <Select
      {...rest}
      mode={selectMode}
      allowClear={allowClear}
      showSearch
    >
      { options && options.map(
        option => (
          <Option
            key={getValue(option)}
            value={getValue(option)}
          >
            {getLabel(option)}
          </Option>
        ),
      )}
    </Select>
  );
}

ControlSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  allowClear: PropTypes.bool,
  multiple: PropTypes.bool,
};

ControlSelect.defaultProps = {
  allowClear: true,
  multiple: false,
};

export default ControlSelect;
