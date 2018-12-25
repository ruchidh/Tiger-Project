import styled from 'styled-components';

import c from '../../col';
import Button from '../../btn/white';
import { COLOR, FONT } from '../../../../util/v2/theme';
import Breakpoints from '../../../../util/v2/breakpoint';
import Text from '../../../../common-util/v2/form/input';

export const Container = styled.div`
	width: 100%;
	background: ${COLOR.BLUE};
	border-radius: 4px;
	padding: ${({ orientation, closeBtn = false }) =>
		closeBtn
			? orientation === 'vertical'
				? '24px 0 0'
				: '24px 16px 16px'
			: orientation === 'vertical'
				? 0
				: '16px'};
	position: relative;

	.rbt-input-main {
		::placeholder {
			color: rgba(255, 255, 255, 0.45);
		}
		color: ${COLOR.WHITE};
		font-family: ${FONT.DEMI_BOLD};
		background-color: rgba(0, 0, 0, 0.15);
		background-image: url(/static/app/images/arrow-white.svg);
	}

	.rbt-input-main:focus {
		color: ${COLOR.WHITE};
	}

	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
`;

export const Col = styled(c)`
	margin-bottom: 15px;

	&.button {
		padding: 0px;
		margin-bottom: 0px;
	}
`;

export const Number = styled(Text).attrs({
	bsStyle: 'blue',
})`
	color: ${COLOR.WHITE};
	height: 48px;
	border: none;
	margin: 0;
	font-family: ${FONT.DEMI_BOLD};
	background-color: rgba(0, 0, 0, 0.15);
`;

export const Label = styled.div`
	font-size: 12px;
	color: ${COLOR.WHITE};
	text-transform: uppercase;
	margin-bottom: 8px;
`;

export const ButtonParentFull = styled.div`
	align-items: center;
	width: 100%;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
`;

export const ButtonParent = styled.div`
	display: block;

	@media (min-width: ${Breakpoints.SM}px) {
		margin-top: 12px;
	}
`;

export const Submit = styled(Button)`
	font-family: ${FONT.BOLD};
	font-size: 16px;
	padding: 15px 20px;
	width: 100%;
	${({ orientation }) =>
		orientation === 'vertical'
			? `
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;`
			: `border-radius: 4px;
             margin-top: 14px;
             height: 48px;`};
`;

export const Error = styled.div`
	color: #eb826f;
	font-family: GreycliffCF-Medium;
	font-size: 85%;
	letter-spacing: -0.08px;
	text-transform: uppercase;
`;

export const Close = styled.button`
	padding: 0;
	margin: 0;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	position: absolute;
	right: 16px;
	top: 16px;
	z-index: 2;

	img {
		width: 25px;
		height: 25px;
		filter: invert(100%);
	}
`;

export const DateContainer = styled.div`
	.react-datepicker-wrapper {
		width: 100%;
	}

	.react-datepicker__input-container {
		margin: 0;
		width: 100%;
	}
	.react-datepicker__input-container input {
		width: 100%;
		background-color: ${COLOR.DARK_BLUE};
		border: none;
		color: ${COLOR.WHITE};

		&:focus {
			border: 1px solid ${COLOR.WHITE};
		}
	}
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #ffffff;
	padding: 16px;
	border-radius: 4px;
	box-shadow: 0 0 12px 0px rgba(0, 0, 0, 0.2);
	max-width: 450px;
	text-align: center;
	margin-bottom: -30px;
	border-left: 5px solid #91dc5a;
`;

export const Icon = styled.img`
	width: 22px;
	height: 22px;
	margin: 0px 15px;
`;
