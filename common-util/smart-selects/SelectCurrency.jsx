import React from 'react';

import ControlSelect from '../form/ControlSelect';
import currencies from 'constants/currencies';

const SelectCurrency = ({ value, ...rest }) => (
  <ControlSelect
    placeholder="Select Currency"
    {...rest}
    value={value || undefined}
    options={currencies}
  />
);

export default SelectCurrency;
