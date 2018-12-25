import styled from 'styled-components';
import { FONT, COLOR } from '../../../../util/v2/theme';

const THEME = {
	blue: {
		bgColor: COLOR.DARK_BLUE,
		color: COLOR.WHITE,
		phColor: COLOR.PLACEHOLDER,
		border: 'none',
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.WHITE}`,
	},
	default: {
		bgColor: COLOR.WHITE,
		color: COLOR.BLACK,
		phColor: COLOR.PLACEHOLDER,
		border: `1px solid ${COLOR.SLATY}`,
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.SLATY}`,
	},
	grey: {
		bgColor: COLOR.LIGHT_GREY,
		color: COLOR.BLACK,
		phColor: COLOR.PLACEHOLDER,
		border: `1px solid ${COLOR.SLATY}`,
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.SLATY}`,
	},
};

export const Input = styled.input`
	display: block;
	width: ${({ width = '100%' }) => width};
	height: 48px;
	padding: 0 16px;
	color: ${({ bsStyle = 'default' }) => THEME[bsStyle].color};
	background-color: ${({ bsStyle = 'default' }) => THEME[bsStyle].bgColor};
	background-image: none;
	border: ${({ bsStyle = 'default' }) => THEME[bsStyle].border};
	border-radius: ${({ bsStyle = 'default' }) => THEME[bsStyle].borderRadius};
	text-align: ${({ textAlign = 'left' }) => textAlign};
	font-family: ${FONT.MEDIUM};
	outline: none;
	margin-right: ${({ marginRight = 0 }) => marginRight};
	border-right: ${({ borderRight = '' }) => borderRight};
	disabled: ${({ disabled = false }) => disabled};
	transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

	&:-webkit-input-placeholder {
		color: ${({ bsStyle = 'default' }) => THEME[bsStyle].phColor};
	}
	&:focus {
		border: ${({ bsStyle = 'default' }) => THEME[bsStyle].fcBorder};
	}
`;

export const CheckBoxElement = styled.div`
	position: relative;
	display: inline-block;
	height: auto;
	padding-top: 0 !important;
	user-select: none;
	padding-left: 20px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	label {
		padding-left: 15px;
	}
	&:hover input ~ .custom-checkbox {
		background-color: transparent;
	}
	input:checked ~ .custom-checkbox {
		background-color: #1fd899;
	}
	input:checked ~ .custom-checkbox:after {
		display: block;
	}
	input {
		opacity: 0;
		position: absolute;
		width: 29px;
		height: 29px;
		top: 0;
		left: 0;
		z-index: 10;
		right: 6px;
		cursor: pointer;
	}
	.custom-checkbox {
		position: absolute;
		top: 0;
		left: 0;
		height: 29px;
		width: 29px;
		border: 2px solid #1fd899;
		background-color: transparent;
		&:after {
			content: '';
			position: absolute;
			display: none;
			left: 10px;
			top: 3px;
			width: 8px;
			height: 15px;
			border: solid white;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
`;

export const TextArea = styled.textarea`
	display: block;
	width: ${({ width = '100%' }) => width};
	padding: 11px 12px;
	color: #555;
	background-color: #fff;
	background-image: none;
	border: ${({ border = '#1px solid #ddd' }) => border};
	border-radius: ${({ borderRadius = '4px' }) => borderRadius};
	text-align: ${({ textAlign = 'left' }) => textAlign};
	font-family: GreycliffCF-Medium;
	transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	outline: none;
	margin-right: ${({ marginRight = 0 }) => marginRight};
	border-right: ${({ borderRight = '' }) => borderRight};
	disabled: ${({ disabled = false }) => disabled};
`;
export const RadioElement = styled.div`
	position: relative;
	display: inline-block;
	height: auto !important;
	padding-top: 0 !important;
	user-select: none;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	&:hover input ~ .custom-radio {
		background-color: transparent;
	}
	label {
		padding-left: 15px;
	}
	input:checked ~ .custom-radio {
		background-color: #fff;
		border: 2px solid #1fd899;
	}
	input:checked ~ .custom-radio:after {
		display: block;
	}
	input {
		opacity: 0;
		top: 0;
		position: absolute;
		width: 16px;
		height: 16px;
		z-index: 10;
		right: 6px;
		cursor: pointer;
	}
	.custom-radio {
		position: absolute;
		top: 0;
		right: 6px;
		height: 16px !important;
		width: 16px !important;
		border: 2px solid #b8b8b8;
		border-radius: 50%;
		background: #fff !important;
		&:after {
			content: '';
			position: absolute;
			display: none;
			left: 3px !important;
			top: 3px !important;
			width: 6px !important;
			height: 6px !important;
			border: solid #1fd899 !important;
			border-radius: 50%;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
`;
