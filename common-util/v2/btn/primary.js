import styled, { css } from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

const Primary = styled.button.attrs({
	type: ({ type = 'button' }) => type,
})`
	outline: none;
	cursor: pointer;
	font-size: 16px;
	border-radius: 4px;
	padding: 10px 22px;
	border: 2px solid ${COLOR.BLUE};
	color: ${COLOR.WHITE};
	background: ${COLOR.BLUE};
	font-family: ${FONT.DEMI_BOLD};
	text-align: center;

	&.empty {
		color: ${COLOR.BLUE};
		background: ${COLOR.WHITE};
	}

	&:disabled {
		cursor: not-allowed;
		background: ${COLOR.DISABLED};
		border-color: ${COLOR.DISABLED};
	}

	${({ loading }) =>
		loading
			? css`
					cursor: progress;
					background: ${COLOR.DISABLED};
					border-color: ${COLOR.DISABLED};
					color: ${COLOR.WHITE};
			  `
			: ''};
`;

export default Primary;
