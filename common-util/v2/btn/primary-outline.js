import styled from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

const PrimaryOutline = styled.button.attrs({
	type: ({ type = 'button' }) => type,
})`
	outline: none;
	cursor: pointer;
	font-size: 16px;
	border-radius: 4px;
	padding: 10px 22px;
	border: 2px solid ${COLOR.BLUE};
	color: ${COLOR.BLUE};
	background: ${COLOR.WHITE};
	font-family: ${FONT.DEMI_BOLD};
	text-align: center;

	&.active,
	&:hover {
		color: ${COLOR.WHITE};
		background: ${COLOR.BLUE};
	}

	&:disabled {
		cursor: not-allowed;
		background: ${COLOR.DISABLED};
		border-color: ${COLOR.DISABLED};
	}
`;

export default PrimaryOutline;
