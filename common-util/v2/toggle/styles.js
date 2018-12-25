import styled from 'styled-components';

const COLOR_TOGGLE_ACTIVE = '#67A61D';
const COLOR_TOGGLE_INACTIVE = '#e4e8ef';

export const Label = styled.label`
	position: relative;
	display: inline-block;
	width: 46px;
	height: 24px;
`;

export const Checkbox = styled.input`
	display: none;

	&:checked + .toggle-slider {
		background-color: ${COLOR_TOGGLE_ACTIVE};
	}

	&:focus + .toggle-slider {
		box-shadow: 0 0 1px ${COLOR_TOGGLE_ACTIVE};
	}

	&:checked + .toggle-slider:before {
		-webkit-transform: translateX(22px);
		-ms-transform: translateX(22px);
		transform: translateX(22px);
	}
`;

export const Switch = styled.div`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${COLOR_TOGGLE_INACTIVE};
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;

	> span {
		position: relative;
		top: 2px;
		right: 10px;
		float: right;
		color: #b9bed1;
		font-size: 85%;
		font-family: GreycliffCF-DemiBold;
		font-weight: bolder;
	}

	img {
		left: 8px;
		position: relative;
		width: 9px;
	}

	&:before {
		position: absolute;
		content: '';
		height: 14px;
		width: 14px;
		left: 5px;
		bottom: 5px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
		z-index: 2;
	}
`;
