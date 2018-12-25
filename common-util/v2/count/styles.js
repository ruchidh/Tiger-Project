import styled from 'styled-components';
import { FONT } from '../../../util/v2/theme';
export const Value = styled.h2`
	font-family: ${FONT.BOLD};
	font-size: 130%;
	line-height: 130%;
	color: white;
	letter-spacing: 0;
	line-height: 25px;
	margin: 0;
	line-height: 100%;
`;

export const Title = styled.p`
	opacity: 0.7;
	font-family: ${FONT.DEMI_BOLD};
	color: white;
	letter-spacing: 1px;
	font-size: 100%;
	margin: 0 0 12px 0;
	line-height: 120%;
	height: 34px;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	display: -webkit-box;
	-webkit-box-orient: vertical;
`;

export const Content = styled.div`
	width: calc(100% - 85px);
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
