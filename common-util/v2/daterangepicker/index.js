import React, { Component } from 'react';

import { Container } from './styles';
import DatePicker from '../datepicker';

class DateRangePicker extends Component {
	render() {
		const {
			size,
			bsStyle,
			startDate,
			endDate,
			onStartChange,
			onEndChange,
			startPlaceholder,
			endPlaceholder,
			filter = v => true
		} = this.props;

		return (
			<Container>
				<DatePicker
					size={size}
					bsStyle={bsStyle}
					value={startDate}
					selectsStart
					startDate={startDate}
					endDate={endDate}
					placeholder={startPlaceholder}
					onChange={onStartChange}
					filter={filter}
				/>

				<DatePicker
					size={size}
					bsStyle={bsStyle}
					value={endDate}
					selectsEnd
					startDate={startDate}
					endDate={endDate}
					placeholder={endPlaceholder}
					onChange={onEndChange}
					placement="top-end"
					filter={filter}
				/>
			</Container>
		);
	}
}

export default DateRangePicker;
