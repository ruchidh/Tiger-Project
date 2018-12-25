import moment from 'moment';

import { view } from '../../util/moment';
import Date from '../date/view';

import { Calendar, Left, Month, Title } from './styles';

const CalendarView = ({
	date,
	margin,
	barPadding,
	barColor,
	barFont,
	boxPadding,
	left,
	heading,
	title,
	width,
	barForeColor,
	monthStyle,
	leftStyle,
	padding,
}) => (
	<Calendar margin={margin} width={width} padding={padding}>
		{left ? (
			<Left
				barPadding={barPadding}
				barForeColor={barForeColor}
				barColor={barColor}
				barFont={barFont}
				style={leftStyle}>
				{left} DAYS LEFT
			</Left>
		) : (
			<Left
				barPadding={barPadding}
				barForeColor={barForeColor}
				barColor={barColor}
				barFont={barFont}
				style={leftStyle}>
				{heading}
			</Left>
		)}
		<Month boxPadding={boxPadding} style={monthStyle}>
			<Date
				date={date}
				grey
				fontDay="26px"
				fontMonth="14px"
				colorDay="#777777"
				colorMonth="#C4C4C4"
				fontFamily="GreycliffCF-Bold"
				monthFamily="GreycliffCF-Medium"
				dayAlign="center"
				monthAlign="center"
			/>
			<Title> {title}</Title>
		</Month>
	</Calendar>
);

export default CalendarView;
