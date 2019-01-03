import React from 'react';

import ControlSelect from '../form/ControlSelect';
import countryCode from 'constants/country-codes';

const SelectCountryCode = ({ value, ...rest }) => (
	<ControlSelect
		placeholder="Select Country Codes"
		{...rest}
		value={value || undefined}
		options={countryCode}
	/>
);

export default SelectCountryCode;
