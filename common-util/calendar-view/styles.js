import styled from 'styled-components';

export const Calendar = styled.div`
	width: ${({ width }) => (width ? width : null)};
	display: block;
	padding: ${({ padding }) => (padding ? padding : '10px')};
	margin: ${({ margin }) => (margin ? margin : 'auto')};
`;

export const Left = styled.div`
	background: ${({ barColor }) => (barColor ? barColor : '#FFCF51')};
	font-family: GreycliffCF-Bold;
	font-size: ${({ barFont }) => (barFont ? barFont : ' 14px')};
	color: ${({ barForeColor }) => (barForeColor ? barForeColor : '#ffffff')};
	letter-spacing: 0.54px;
	text-align: center;
	padding: ${({ barPadding }) => (barPadding ? barPadding : '4px 0px')};
	width: ${({ barWidth }) => (barWidth ? barWidth : null)};
`;

export const Month = styled.div`
	background: #ffffff;
	box-shadow: 0 2px 4px 0 rgba(226, 226, 226, 0.5);
	padding: ${({ boxPadding }) => (boxPadding ? boxPadding : '0')};
	& > div:first-child {
		padding: 10px;
	}
	width: ${({ boxWidth }) => (boxWidth ? boxWidth : null)};
`;

export const Title = styled.div`
	font-family: GreycliffCF-DemiBold;
	font-size: 14px;
	color: #202020;
	letter-spacing: 0.29px;
	text-align: center;
	line-height: 14px;
	margin-top: 10px;
`;
