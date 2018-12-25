import styled from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

export const Container = styled.div`
	display: inline-block;
	transition: all 0.4s ease-out;
	cursor: pointer;

	input[type='radio'] {
		display: none;
	}

	input[type='radio'] + label {
		font-family: ${FONT.MEDIUM};
		color: ${COLOR.MED_GREY};
		font-size: 14px;
		cursor: pointer;
		letter-spacing: -0.09px;
		transition: all 0.4s ease-out;

		&.active {
			color: ${COLOR.BLACK};
			font-family: ${FONT.BOLD};
		}
	}

	&:hover {
		input[type='radio'] + label {
			color: ${COLOR.BLACK};
		}
	}

	input[type='radio'] + label span.radio {
		box-shadow: 0 0 0 2px #e7e7e7;
		display: inline-block;
		width: ${({ size }) => (size === 'sm' ? 12 : 20)}px;
		height: ${({ size }) => (size === 'sm' ? 12 : 20)}px;
		${({ size }) => (size === 'sm' ? 'margin-top: -3px;' : '')} vertical-align: middle;
		border-radius: 50%;
		margin-right: ${({ label }) => (label ? 8 : 0)}px;
		transition: all 0.4s ease-out;
	}

	input[type='radio'] + label span.radio {
		border: 2px solid ${COLOR.WHITE};
		background-color: #e7e7e7;
	}

	input[type='radio']:checked + label span.radio {
		background-color: ${COLOR.GREEN};
		box-shadow: 0 0 0 2px ${COLOR.GREEN};
	}
`;
