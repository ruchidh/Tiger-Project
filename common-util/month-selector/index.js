import React from 'react';
import PropTypes from 'prop-types';

import { Container, MonthButton, Month, Header, Body } from './styles';

const MonthSelector = ({ selectedMonth, name, handler, bodyStyle, headerStyle, header }) => {
	const monthsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const renderMonthItems = () => {
		var list = [];
		const newSelectedMonth = selectedMonth ? selectedMonth - 1 : null;
		monthsList.map(function(item, index) {
			list.push(
				<MonthButton
					key={item}
					style={{ background: newSelectedMonth === index ? '#B2EAD7' : '#FFFFFF' }}
					className="month-button">
					<Month onClick={() => handler(name, index + 1)}>{item}</Month>
				</MonthButton>,
			);
		});
		return list;
	};
	return (
		<Container>
			<Header
				style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
				headerStyle={headerStyle}>
				{header}
			</Header>
			<Body bodyStyle={bodyStyle}>{renderMonthItems()}</Body>
		</Container>
	);
};

MonthSelector.propTypes = {
	header: PropTypes.string.isRequired,
	headerStyle: PropTypes.object,
	bodyStyle: PropTypes.object,
	selectedMonth: PropTypes.number,
	handler: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

MonthSelector.defaultProps = {
	header: 'No. of months',
};

export { MonthSelector };
