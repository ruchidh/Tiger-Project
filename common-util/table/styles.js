import styled from 'styled-components';

import { FONT, COLOR } from '../../util/theme';

const BG_COLOR = '#f8f8f8';
const BORDER_SIZE = {
	default: 4,
	compact: 1,
	none: 0,
};

const PADDING = {
	default: 16,
	compact: 8,
	none: 0,
};

const NO_DATA_FONT_SIZE = {
	default: 20,
	compact: 16,
	none: 14,
};

export const Container = styled.div`
	display: block;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
`;

export const Table = styled.table`
	width: 100%;
	max-width: 100%;
	margin-bottom: 1rem;
	border: 0;
	background: transparent;
	border-spacing: 0 0;
`;

export const Tr = styled.tr`
	background: #ffffff;
`;

export const Th = styled.th`
	color: #333;
	line-height: 12px;
	letter-spacing: 0.39px;
	vertical-align: bottom;
	padding: ${({ bsStyle }) => (bsStyle ? PADDING[bsStyle] : 16)}px;
	padding-bottom: 8px;
	font-family: GreycliffCF-Bold;
	font-size: 11px;
`;

export const ThGroup = styled(Th)`
	color: black;
	font-family: GreycliffCF-Bold;
	text-align: center;
`;

export const Td = styled.td`
	background: white;
	padding: ${({ bsStyle }) => (bsStyle ? PADDING[bsStyle] : 16)}px;
	vertical-align: middle;
	border-bottom: ${({ bsStyle }) => BORDER_SIZE[bsStyle]}px solid ${BG_COLOR};
	border-top: ${({ bsStyle }) => BORDER_SIZE[bsStyle]}px solid ${BG_COLOR};
`;

export const NoData = styled.div`
	font-family: GreycliffCF-Regular;
	font-size: ${({ bsStyle }) => NO_DATA_FONT_SIZE[bsStyle]}px;
	color: ${COLOR.DARK_GREY};
	letter-spacing: 0.69px;
	padding: 16px;
	margin-top: 8px;
	background: white;
	text-align: center;
`;

export const Commodity = styled.div`
	font-family: ${FONT.BOLD};
	font-size: 12px;
	text-transform: uppercase;

	img {
		margin-right: 5px;
		vertical-align: middle;
	}
`;
