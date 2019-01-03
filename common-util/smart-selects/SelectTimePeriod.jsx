import React from 'react';

import timePeriod from 'util/constants/time-period';
import ControlSelect from '../form/ControlSelect';

const SelectTimePeriod = ({ value, ...rest }) => (
	<ControlSelect
		placeholder="Select Time Period"
		{...rest}
		value={value || undefined}
		options={timePeriod}
	/>
);

export default SelectTimePeriod;
