import styled from 'styled-components';

export const Input = styled.input`
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

export const CheckBoxElement = styled.div`
	position: relative;
	display: inline-block;
	height: auto;
	padding-top: 0 !important;
	user-select: none;
	padding-left: 20px;
	margin-bottom: 10px;
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
		top: ${({ type = 'radio' }) => (type === 'radio' ? '0px' : '-14px')};
		position: absolute;
		width: ${({ type = 'radio' }) => (type === 'radio' ? '16px' : '25px')};
		height: ${({ type = 'radio' }) => (type === 'radio' ? '16px' : '25px')};
		z-index: 10;
		right: 6px;
		cursor: pointer;
	}
	.custom-radio {
		position: absolute;
		top: ${({ type = 'radio' }) => (type === 'radio' ? '0px' : '-14px')};
		right: 6px;
		height: ${({ type = 'radio' }) => (type === 'radio' ? '16px' : '25px')} !important;
		width: ${({ type = 'radio' }) => (type === 'radio' ? '16px' : '25px')} !important;
		border: 2px solid #b8b8b8;
		border-radius: 50%;
		background: #fff !important;
		&:after {
			content: '';
			position: absolute;
			display: none;
			left: 3px !important;
			top: 3px !important;
			width: ${({ type = 'radio' }) => (type === 'radio' ? '6px' : '15px')} !important;
			height: ${({ type = 'radio' }) => (type === 'radio' ? '6px' : '15px')} !important;
			background: ${({ type = 'radio' }) => (type === 'radio' ? '' : '#1FD899')};
			border: solid #1fd899 !important;
			border-radius: 50%;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
`;
