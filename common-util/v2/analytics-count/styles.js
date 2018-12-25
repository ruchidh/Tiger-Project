import styled from 'styled-components';
import colors from '../../../util/color';

export const Container = styled.div`
	background-color: ${({ backgroundColor = colors.COGO_BLUE }) => backgroundColor};
	padding: 20px;
	display: flex;
	justify-content: space-between;
	border-radius: 8px;
	transition: 0.1s all;
	cursor: ${({ cursor }) => (cursor ? 'pointer' : 'auto')};

	&:hover {
		box-shadow: ${({ cursor }) => (cursor ? '-1px 4px 22px -6px rgba(0, 0, 0, 0.5)' : 'none')};
	}
`;

export const Title = styled.p`
	color: ${colors.WHITE};
	font-size: 16px;
	margin: 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding-right: 16px;
`;

export const ValueSection = styled.div`
	display: flex;
	font-family: GreycliffCF-DemiBold;
`;

export const Value = styled.p`
	color: ${colors.WHITE};
	font-size: 18px;
	margin: 0;
`;

export const Unit = styled.p`
	color: ${colors.WHITE};
	font-size: 12px;
	margin: 0;
	padding-left: 2px;
	margin-top: 5px;
`;

export const Content = styled.div`
	width: ${icon => (icon ? 'calc(100% - 85px)' : '100%')};
	display: inline-block;
`;

export const Section = styled.div`
	width: 85px;
	text-align: center;
	display: inline-block;
`;

export const Image = styled.div`
	height: 65px;
	width: 65px;
	margin: auto;
	border-radius: 100%;
	display: inline-block;
	background-color: ${({ bg }) => bg};

	img {
		margin: auto;
		display: block;
		padding-top: 15px;
	}
`;
