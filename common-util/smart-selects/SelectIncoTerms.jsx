import React from 'react';

import ControlSelect from '../form/ControlSelect';
import incoTerms from 'constants/inco-terms';

const SelectIncoTerms = ({
  value, multiple, options, ...rest
}) => (
  <ControlSelect
    {...rest}
    value={value || undefined}
    options={options || incoTerms}
    multiple={multiple === undefined ? true : multiple}
    placeholder="Select Inco Terms"
  />
);

export default SelectIncoTerms;
