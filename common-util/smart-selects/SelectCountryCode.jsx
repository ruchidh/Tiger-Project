import React from 'react';

import countryCode from 'util/constants/country-codes';
import ControlSelect from '../form/ControlSelect';

const SelectCountryCode = ({ value, ...rest }) => (
	<ControlSelect
		placeholder="Select Country Codes"
		{...rest}
		value={value || undefined}
		options={countryCode}
	/>
);

export default SelectCountryCode;
