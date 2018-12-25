import styled from 'styled-components';

import { FONT, COLOR } from '../../util/v2/theme';

const Input = styled.input`
	display: block;
	width: 100%;
	height: 48px;
	background: #f2f2f2;
	border-radius: 4px;
	padding: 12px 16px;
	border: none;
	font-family: ${FONT.DEMI_BOLD};
	font-size: 16px;
	color: ${COLOR.LIGHT_BLACK};
	line-height: 16px;
	outline: none;

	transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

	&:-webkit-input-placeholder {
		opacity: 0.45;
		font-family: ${FONT.DEMI_BOLD};
		font-size: 16px;
		color: ${COLOR.FOOTER_GREY};
		letter-spacing: -0.13px;
		line-height: 24px;
	}
`;

export default Input;
