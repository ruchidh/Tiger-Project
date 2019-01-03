import React from 'react';

import incoTerms from 'util/constants/inco-terms';
import ControlSelect from '../form/ControlSelect';

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
