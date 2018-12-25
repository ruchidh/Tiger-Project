import styled from 'styled-components';

import { COLOR, FONT } from '../../../util/theme';

export const Container = styled.div`
	display: ${({ horizontal }) => (horizontal ? 'flex' : 'block')};
	margin-top: 0px;
	font-family: ${({ horizontal, fontFamily }) =>
		horizontal ? 'GreycliffCF-Bold' : fontFamily ? fontFamily : 'GreycliffCF-DemiBold'};
	color: ${({ type, colorDay }) =>
		type != null
			? type === 'danger'
				? '#EB826F'
				: '#1FD899'
			: colorDay
				? colorDay
				: '#202020'};
`;

export const Day = styled.div`
	line-height: 1;
	font-family: GreycliffCF-DemiBold;
	text-align: ${({ dayAlign }) => (dayAlign ? dayAlign : 'left')};
	font-size: ${({ horizontal, grey, fontDay }) =>
		horizontal ? '120%' : grey ? (fontDay ? fontDay : '110%') : '125%'};
	margin: 0;
	margin-left: 0px;
	margin-right: ${({ horizontal }) => (horizontal ? '4px' : '0px')};
	margin-bottom: 7px;
	text-decoration: ${({ expired }) => (expired ? 'line-through' : null)};
`;

export const Month = styled.div`
	margin: 0;
	text-align: ${({ monthAlign }) => (monthAlign ? monthAlign : 'left')};
	font-family: ${({ grey, monthFamily }) =>
		grey ? 'GreycliffCF-Regular' : monthFamily ? monthFamily : null};
	font-size: ${({ horizontal, grey, fontMonth }) =>
		horizontal ? '120%' : grey ? (fontMonth ? fontMonth : '90%') : '100%'};
	text-decoration: ${({ expired }) => (expired ? 'line-through' : null)};
	line-height: 14px;
	color: ${({ grey, type, colorMonth }) =>
		grey
			? type != null
				? type === 'danger'
					? '#EB826F'
					: '#1FD899'
				: colorMonth
					? colorMonth
					: '#777777'
			: type != null
				? type === 'danger'
					? '#EB826F'
					: '#1FD899'
				: '#202020'};
`;
