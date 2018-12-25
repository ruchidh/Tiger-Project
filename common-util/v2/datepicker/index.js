import DatePicker from 'react-datepicker';

import { Container } from './style';

const PROPS = [
	{ name: 'placeholder', as: 'placeholderText', defaultValue: 'Select...' },
	{ name: 'placement', as: 'popperPlacement', defaultValue: 'top-start' },
	{ name: 'value', as: 'selected' },
	{ name: 'time', as: 'showTimeSelect', defaultValue: false },
	{ name: 'disabled', defaultValue: false },
	{ name: 'months', as: 'monthsShown', defaultValue: 1 },
	{ name: 'onBlur', defaultValue: () => {} },
	{ name: 'filter', as: 'filterDate', defaultValue: () => true },
	{ name: 'highlight', as: 'highlightDates', defaultValue: [] },
	{ name: 'startDate', as: 'startDate', defaultValue: null },
	{ name: 'endDate', as: 'endDate', defaultValue: null },
	{ name: 'selectsStart', as: 'selectsStart', defaultValue: null },
	{ name: 'selectsEnd', as: 'selectsEnd', defaultValue: null },
	{ name: 'includeDates', as: 'includeDates', defaultValue: null },
	{ name: 'inline', as: 'inline', defaultValue: false },
	{ name: 'highlightDates', as: 'highlightDates', defaultValue: [] },
];

const Datepicker = props => {
	const params = {};
	PROPS.forEach(({ name, as, defaultValue }) => {
		props[name] || defaultValue ? (params[as ? as : name] = props[name] || defaultValue) : null;
	});

	return (
		<Container
			display={props.block ? 'block' : 'inline-block'}
			size={props.size}
			bsStyle={props.bsStyle}>
			<DatePicker
				{...params}
				onChange={v => {
					props.onChange(v, props.name);
				}}
			/>
		</Container>
	);
};

export default Datepicker;
