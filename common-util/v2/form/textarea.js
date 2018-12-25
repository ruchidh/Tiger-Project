import styled from 'styled-components';

import { FONT, COLOR } from '../../../util/v2/theme';

const Textarea = styled.textarea.attrs({
	rows: '4',
})`
	background: ${COLOR.LIGHT_GREY};
	border: 1px solid ${COLOR.SLATY};
	border-radius: 4px;
	padding: 16px;
	font-family: ${FONT.DEMI_BOLD};
	font-size: 16px;
	color: ${COLOR.LIGHT_BLACK};
	letter-spacing: 0;
	line-height: 16px;
	width: 100%;
	display: block;
	outline: none;
	resize: vertical;
	min-height: 60px;
`;

export default Textarea;
