import React from 'react';

import ControlSelect from '../form/ControlSelect';
import commodityTypes from 'constants/commodity-types';

const SelectCommodityMappingType = ({
	value, multiple, filters, ...rest
}) => (
	<ControlSelect
		{...rest}
		value={value || undefined}
		options={commodityTypes[filters] || commodityTypes.standard}
		multiple={multiple}
		placeholder="Select Commodity Types"
	/>
);

export default SelectCommodityMappingType;
