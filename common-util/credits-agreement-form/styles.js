import styled from 'styled-components';

import Text from '../../common-util/form/input';

import { COLOR } from '../../util/theme';

export const Container = styled.div`
	width: 100%;
	min-width: 780px;
	max-width: 800px;
	position: relative;
	margin: 20px auto;
	padding: 0 20px;
	max-height: 400px;
	overflow: auto;
`;

export const CheckBox = styled(Text)`
	position: relative;
	display: inline-block;
	height: auto !important;
	padding-top: 0 !important;
	user-select: none;
	padding-left: 35px;
	margin-bottom: 12px;
	margin-right: 24px;
	cursor: pointer;
	font-size: 100%;

	&:hover input ~ .custom-checkbox {
		background-color: transparent;
	}
	input:checked ~ .custom-checkbox {
		background-color: ${COLOR.GREEN};
	}
	input:checked ~ .custom-checkbox:after {
		display: block;
	}
	input {
		opacity: 0;
		position: absolute;
		width: 24px !important;
		height: 24px !important;
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
		height: 24px;
		width: 24px;
		border: 2px solid ${COLOR.GREEN};
		border-radius: 0;
		background-color: transparent;

		&:after {
			content: '';
			position: absolute;
			display: none;
			left: 7px;
			top: 1px;
			width: 8px;
			height: 15px;
			border: solid ${COLOR.WHITE};
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
`;
