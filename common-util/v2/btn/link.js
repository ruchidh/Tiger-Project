import styled from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

const Link = styled.button.attrs({
	type: 'button',
})`
	outline: none;
	background: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
	font-family: ${FONT.BOLD};
	font-size: 14px;
	color: ${COLOR.BLUE};
	line-height: 14px;
`;

export default Link;
