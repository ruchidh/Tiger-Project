import React from 'react';
import { Cascader } from 'antd';

import commodityTypes from 'util/constants/commodity-types';
import containerTypes from 'util/constants/container-types';

const SelectCommodityType = props => (
	<Cascader
		{...props}
		options={containerTypes.map(cot => ({ ...cot, children: commodityTypes[cot.value] }))}
		placeholder="Select Commodity Type"
	/>
);

export default SelectCommodityType;
