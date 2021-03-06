import React from 'react';

import commodityTypes from 'util/constants/commodity-types';
import ControlSelect from '../form/ControlSelect';

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
