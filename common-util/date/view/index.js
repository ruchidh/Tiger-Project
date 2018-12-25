import { view } from '../../../util/moment';

import { Container, Day, Month } from './styles';

export default ({
	className = '',
	date,
	horizontal,
	type,
	expired,
	fontDay,
	fontMonth,
	colorDay,
	colorMonth,
	fontFamily,
	grey,
	monthFamily,
	monthAlign,
	dayAlign,
}) => {
	if (date === null) {
		return null;
	}
	const value = view(date);

	return view ? (
		<Container
			className={className}
			horizontal={horizontal}
			type={type}
			colorDay={colorDay}
			fontFamily={fontFamily}>
			<Day
				horizontal={horizontal}
				expired={expired}
				grey={grey}
				fontDay={fontDay}
				dayAlign={dayAlign}>
				{value && value.day ? value.day : ''}
			</Day>
			<Month
				horizontal={horizontal}
				expired={expired}
				grey={grey}
				type={type}
				fontMonth={fontMonth}
				colorMonth={colorMonth}
				monthFamily={monthFamily}
				monthAlign={monthAlign}>
				{value && value.month ? value.month : ''}
			</Month>
		</Container>
	) : null;
};
