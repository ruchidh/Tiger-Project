import styled from 'styled-components';

import { COLOR, FONT } from '../../util/theme';

export const Container = styled.div`
	font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
	width: ${props => (props.width ? props.width : '384px')};
	height: ${props => (props.width ? props.width : '344px')};
	display: inline-block;
	margin-right: 15px;
	vertical-align: top;
`;

export const Header = styled.div`
	font-size: ${props =>
		props.headerStyle && props.headerStyle.fontSize ? props.headerStyle.fontSize : '14px'};
	height: ${props =>
		props.headerStyle && props.headerStyle.height ? props.headerStyle.height : '32px'};
	text-transform: uppercase;
	font-size: 16px;
	padding-top: 2px;
	color: ${COLOR.WHITE};
	letter-spacing: 0.62px;
	text-align: center;
`;

export const Body = styled.div`
	margin: 0px;
	height: ${props =>
		props.bodyStyle && props.bodyStyle.height ? props.bodyStyle.height : '312px'};
	background-color: ${props =>
		props.bodyStyle && props.bodyStyle.backgroundColor
			? props.bodyStyle.backgroundColor
			: COLOR.WHITE};
	color: ${props =>
		props.bodyStyle && props.bodyStyle.color ? props.bodyStyle.color : COLOR.BLACK};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	cursor: pointer;
`;

export const MonthButton = styled.div`
	font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
	display: table;
	width: ${props =>
		props.bodyStyle && props.bodyStyle.width ? props.bodyStyle.width : 'calc(25% - 20px)'};
	height: ${props =>
		props.bodyStyle && props.bodyStyle.height ? props.bodyStyle.height : '48px'};
	text-align: center;
	vertical-align: middle;
	margin: 10px;
`;

export const Month = styled.div`
	font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
	display: table-cell;
	vertical-align: middle;
	font-family: ${FONT.REGULAR};
	font-size: 20px;
	color: ${COLOR.BLACK};
	letter-spacing: 0.77px;
`;
