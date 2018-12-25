import styled, { css } from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

const Primary = styled.button.attrs({
	type: ({ type = 'button' }) => type,
})`
	outline: none;
	cursor: pointer;
	font-size: 16px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	padding: 10px 22px;
	border: 2px solid ${COLOR.WHITE};
	color: ${COLOR.BLACK};
	background: ${COLOR.WHITE};
	font-family: ${FONT.DEMI_BOLD};
	text-align: center;

	&:disabled {
		cursor: not-allowed;
		background: ${COLOR.DARK_BLUE};
		border-color: ${COLOR.DARK_BLUE};
		color: ${COLOR.WHITE};
	}

	${({ loading }) =>
		loading
			? css`
					cursor: progress;
					background: ${COLOR.DISABLED};
					border-color: ${COLOR.DISABLED};
			  `
			: ''};
`;

export default Primary;
