import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker, DateRangePicker, isInclusivelyAfterDay } from 'react-dates';
import {
	DatepickerContainer,
	Prev,
	Next,
	ErrorMessage,
	BtnContainer,
	ClearButton,
	ApplyButton,
} from './styles';

class Datepicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: this.props.date || null,
			focused: this.props.focused || true,
			focusedInput: 'startDate',
			type: this.props.type || 'single',
			numberOfMonths: this.props.numberOfMonths || 2,
			startDate: this.props.startDate || null,
			endDate: this.props.endDate || null,
			transformOrigin: this.props.transformOrigin || null,
		};
	}

	handleClearDates = () => {
		this.setState(
			{
				startDate: null,
				endDate: null,
				date: null,
				focusedInput: 'startDate',
			},
			this.props.handleSelect(null, null),
		);
	};

	handleDisablePointer = today => {
		const disablePointer = this.props.disablePointer;
		const enabledMonths = this.props.enabledMonths;
		const startDate = this.props.startDate,
			endDate = this.props.endDate;
		if (disablePointer === 'allDates') return false;
		if (disablePointer === 'pastDates')
			return isInclusivelyAfterDay(today, moment().add(1, 'days')); //enable past dates inclusinve today
		if (disablePointer === 'futureDates') return !isInclusivelyAfterDay(today, moment()); //enable future dates inclusive today
		if (disablePointer === 'default') return !isInclusivelyAfterDay(today, moment()); //enable future dates inclusive today
		if (disablePointer === 'custom' && enabledMonths) {
			return (
				today.isAfter(moment().add(enabledMonths, 'month')) ||
				today.isBefore(moment().subtract(1, 'days'))
			);
		}
		if (disablePointer === 'range' && startDate && endDate) {
			return today.isAfter(endDate) || today.isBefore(startDate);
		}
		return !isInclusivelyAfterDay(today, moment()); //enable future dates inclusive today
	};

	renderClearButton = () => {
		return this.props.showClearBtn ? (
			<ClearButton onClick={() => this.handleClearDates()}>Clear</ClearButton>
		) : null;
	};

	renderApplyButton = () => {
		return this.props.showApplyBtn ? (
			<ApplyButton
				onClick={() =>
					this.props.handleApplyDates(this.state.startDate, this.state.endDate)
				}>
				Apply
			</ApplyButton>
		) : null;
	};

	render() {
		const dpSize = this.props.size;
		var dpStyle = {};
		switch (dpSize) {
			case 'sm':
				dpStyle = { transform: 'scale(0.7' };
				break;
			case 'md':
				dpStyle = { transform: 'scale(0.8)' };
				break;
			case 'lg':
				dpStyle = { transform: 'scale(1)' };
				break;
			default:
				dpStyle = { transform: 'scale(1)' };
		}
		dpStyle.transformOrigin = this.props.transformOrigin;
		if (this.state.type === 'single') {
			return (
				<DatepickerContainer style={dpStyle} data-html2canvas-ignore>
					<SingleDatePicker
						numberOfMonths={this.state.numberOfMonths}
						date={this.state.date}
						onDateChange={date =>
							this.setState({ date }, this.props.handleSelect(date, this.props.name))
						}
						focused={this.state.focused}
						onFocusChange={({ focused }) => {
							if (!focused) return;
							this.setState({ focused });
						}}
						isOutsideRange={today => this.handleDisablePointer(today)}
						hideKeyboardShortcutsPanel={true}
						displayFormat="DD-MM-YYYY"
						weekDayFormat="ddd"
						daySize={50}
						navPrev={<Prev />}
						navNext={<Next />}
						keepOpenOnDateSelect
					/>
					<ErrorMessage>{this.props.dateError}</ErrorMessage>
				</DatepickerContainer>
			);
		} else if (this.state.type === 'double') {
			return (
				<DatepickerContainer style={dpStyle}>
					<BtnContainer>
						{this.renderClearButton()}
						{this.renderApplyButton()}
					</BtnContainer>
					<DateRangePicker
						startDateId="1"
						endDateId="2"
						numberOfMonths={this.state.numberOfMonths}
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						onDatesChange={({ startDate, endDate }) => {
							this.setState(
								{ startDate, endDate },
								this.props.handleSelect(startDate, endDate),
							);
						}}
						focusedInput={this.state.focusedInput}
						onFocusChange={focusedInput => {
							if (!focusedInput) return;
							this.setState({ focusedInput });
						}}
						isOutsideRange={today => this.handleDisablePointer(today)}
						hideKeyboardShortcutsPanel={true}
						displayFormat="DD-MM-YYYY"
						weekDayFormat="ddd"
						daySize={50}
						navPrev={<Prev />}
						navNext={<Next />}
						keepOpenOnDateSelect
					/>
					<ErrorMessage>{this.props.dateError}</ErrorMessage>
				</DatepickerContainer>
			);
		}
	}
}

Datepicker.propTypes = {
	date: PropTypes.object,
	startDate: PropTypes.object,
	endDate: PropTypes.object,
	focused: PropTypes.bool,
	type: PropTypes.oneOf(['single', 'double']).isRequired,
	focusedInput: PropTypes.string,
	numberOfMonths: PropTypes.number,
	handleSelect: PropTypes.func.isRequired,
	disablePointer: PropTypes.oneOf(['allDates', 'pastDates', 'futureDates', 'custom', 'default']),
	enabledMonths: PropTypes.number.isRequired,
	dateError: PropTypes.string,
	handleApplyDates: PropTypes.func,
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Datepicker.defaultProps = {
	enabledMonths: 2,
	type: 'single',
};

export default Datepicker;
