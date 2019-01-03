import React from 'react';

import ControlSelect from '../form/ControlSelect';
import containerTypes from 'constants/container-types';

const SelectContainerType = ({ value, ...rest }) => (
  <ControlSelect
    {...rest}
    value={value || undefined}
    options={containerTypes}
    placeholder="Select Container Types"
  />
);

export default SelectContainerType;
