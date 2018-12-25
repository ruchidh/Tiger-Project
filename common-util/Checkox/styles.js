import styled from 'styled-components';

import { COLOR, FONT } from '../../util/v2/theme';

export const Label = styled.label`
	font-size: 14px;
	color: #6b6c6f;
	line-height: 22px;
	margin: 8px 32px 8px 0;
	cursor: pointer;
	display: inline-block;

	&:hover {
		color: #000;
	}

	.checked {
		font-family: ${FONT.BOLD};
		color: #000;
	}
`;

export const Input = styled.input.attrs({
	type: 'checkbox',
})`
	outline: none;
	margin-right: 12px;
`;
