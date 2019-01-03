import React from 'react';

import currencies from 'util/constants/currencies';
import ControlSelect from '../form/ControlSelect';

const SelectCurrency = ({ value, ...rest }) => (
	<ControlSelect
		placeholder="Select Currency"
		{...rest}
		value={value || undefined}
		options={currencies}
	/>
);

export default SelectCurrency;
