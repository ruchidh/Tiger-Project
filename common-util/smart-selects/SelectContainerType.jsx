import React from 'react';

import containerTypes from 'util/constants/container-types';
import ControlSelect from '../form/ControlSelect';

const SelectContainerType = ({ value, ...rest }) => (
	<ControlSelect
		{...rest}
		value={value || undefined}
		options={containerTypes}
		placeholder="Select Container Types"
	/>
);

export default SelectContainerType;
