import React from 'react';

import ControlSelect from '../form/ControlSelect';
import timePeriod from 'constants/time-period';

const SelectTimePeriod = ({ value, ...rest }) => (
  <ControlSelect
    placeholder="Select Time Period"
    {...rest}
    value={value || undefined}
    options={timePeriod}
  />
);

export default SelectTimePeriod;
