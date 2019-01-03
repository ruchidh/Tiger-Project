import styled from 'styled-components';

export const Container = styled.div`
	body {
		background-color: #a0a0a0;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 58px;
		height: 16px;
	}

	.switch input {
		display: none;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ffffff;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 16px;
		width: 30px;
		left: 0px;
		bottom: 0px;
		background-color: #777777;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #ffffff;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #ffffff;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(28px);
		-ms-transform: translateX(28px);
		transform: translateX(28px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 12px;
	}

	.slider.round:before {
		border-radius: 20px;
	}

	label {
		display: 'inline-block';
	}
`;

export const LeftSwitch = styled.div`
	font-family: GreycliffCF-Bold;
	font-size: 14px;
	color: #777777;
	letter-spacing: 0.36px;
`;

export const RightSwitch = styled.div`
	font-family: GreycliffCF-Bold;
	font-size: 14px;
	color: #777777;
	letter-spacing: 0.36px;
`;
