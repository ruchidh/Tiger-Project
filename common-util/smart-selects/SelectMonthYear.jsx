import React from 'react';

import ControlSelect from '../form/ControlSelect';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const YEARS = ['2017', '2018'];

const SelectMonthYear = ({ value, ...rest }) => {
	const list = [];
	YEARS.forEach((year) => {
		MONTHS.forEach((month, i) => {
			list.push({
				value: `${year}_${i}`,
				label: `${year} - ${month}`,
			});
		});
	});
	return (
		<ControlSelect
			{...rest}
			value={value || undefined}
			options={list}
			placeholder="Select Year Month"
		/>
	);
};

export default SelectMonthYear;
