import styled from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

export const Container = styled.div`
	display: inline-block;
	transition: all 0.4s ease-out;
	cursor: pointer;

	input[type='checkbox'] {
		display: none;
	}

	input[type='checkbox'] + label {
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
		input[type='checkbox'] + label {
			color: ${COLOR.BLACK};
		}
	}

	input[type='checkbox'] + label span.checkbox {
		display: inline-block;
		background-color: ${COLOR.WHITE};
		border: 2px solid ${COLOR.MED_GREY};
		width: ${({ size }) => (size === 'sm' ? 12 : 24)}px;
		height: ${({ size }) => (size === 'sm' ? 12 : 24)}px;
		${({ size }) => (size === 'sm' ? 'margin-top: -3px;' : '')} vertical-align: middle;
		margin-right: ${({ label }) => (label ? 16 : 0)}px;
		transition: all 0.4s ease-out;
	}

	input[type='checkbox']:checked + label span.checkbox {
		background-color: ${({ theme }) => (theme === 'blue' ? COLOR.BLUE : COLOR.GREEN)};
		border-color: ${({ theme }) => (theme === 'blue' ? COLOR.BLUE : COLOR.GREEN)};
		background-image: url(/static/app/images/v2/ic_check-white.svg);
		background-repeat: no-repeat;
		background-size:  ${({ size }) => (size === 'sm' ? 12 : 18)}px;;
		background-position: center;
	}
`;
