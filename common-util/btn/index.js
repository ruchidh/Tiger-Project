import styled from 'styled-components';

import { COLOR } from '../../util/theme';

const THEME = {
	primary: {
		bgColor: COLOR.BLUE,
		color: COLOR.WHITE,
		border: 'none',
		borderRadius: '6px',
	},
	outline: {
		bgColor: COLOR.WHITE,
		color: COLOR.BLUE,
		border: `2px solid ${COLOR.BLUE}`,
		borderRadius: '6px',
	},
	default: {
		bgColor: COLOR.WHITE,
		color: COLOR.BLACK,
		border: `2px solid ${COLOR.BLACK}`,
		borderRadius: '6px',
	},
	green: {
		bgColor: COLOR.GREEN,
		color: COLOR.WHITE,
		border: 'none',
		borderRadius: '3px',
	},
	grey: {
		bgColor: '#D8D8D8',
		color: COLOR.WHITE,
		border: 'none',
		borderRadius: '3px',
	},
	danger: {
		bgColor: COLOR.DANGER,
		color: COLOR.WHITE,
		border: 'none',
		borderRadius: '3px',
	},
	black: {
		bgColor: COLOR.BLACK,
		color: COLOR.WHITE,
		border: 'none',
		borderRadius: '3px',
	},
};

const Button = styled.button`
	background-color: ${({ bsStyle = 'primary' }) => THEME[bsStyle].bgColor};
	color: ${({ bsStyle = 'primary' }) => THEME[bsStyle].color};
	letter-spacing: 0.54px;
	line-height: 17px;
	border-radius: ${({ bsStyle = 'green' }) => (THEME[bsStyle].borderRadius ? '3px' : '6px')};
	border: ${({ bsStyle = 'primary' }) => THEME[bsStyle].border};
	padding: 8px 16px;
	cursor: pointer;
	outline: none;
	display: inline-block;
	vertical-align: middle;
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px transparent;
	font-family: GreycliffCF-DemiBold;
	transition: 0.2s all linear;
	text-transform: uppercase;

	&:before,
	&:after {
		pointer-events: none;
		position: absolute;
		content: '';
		left: 0;
		width: 100%;
		box-sizing: border-box;
		background-repeat: no-repeat;
		height: 5px;
		opacity: 0;
		transition-duration: 0.3s;
		transition-property: opacity;
	}

	&:before {
		bottom: 100%;
	}

	&:after {
		top: 100%;
	}

	&:hover {
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.45);
	}

	&:hover:before,
	&:focus:before,
	&:active:before,
	&:hover:after,
	&:focus:after,
	&:active:after {
		opacity: 0.8;
	}

	&[disabled] {
		opacity: 0.3;
		pointer-events: none;
	}
`;

export default Button;
