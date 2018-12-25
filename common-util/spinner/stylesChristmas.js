import styled from 'styled-components';

import { COLOR } from '../../util/theme';

export const FullWrapper = styled.div`
	display: flex;
	height: 100%;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Spin = styled.div`
	display: block;
	margin: 20px 0;
`;

export const Bounce = styled.div`
	display: inline-block;
	border-radius: 100%;
	animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	margin: 0px 2px;

	&.one {
		background-color: ${COLOR.BLUE};
		animation-delay: -0.32s;
		position: relative;

		&:after{
			content: '';
			background-image: url(/static/app/images/christmas/santa_hat.svg);
			background-repeat: no-repeat;
			background-size: ${({ size }) => size * 2}px;
			width: ${({ size }) => size * 2}px;
			height: ${({ size }) => size * 2}px;
			position: absolute;
			top: -${({ size }) => (size * 2 + (size <= 12 ? 5 : 0))}px;
			left: -${({ size }) => size / 2 + 2}px;
			animation: sk-bouncedelay2 1.4s infinite ease-in-out both;
		}
	}

	&.two {
		background-color: ${COLOR.YELLOW};
		animation-delay: -0.16s;
		position: relative;

		&:after{
			content: '';
			background-image: url(/static/app/images/christmas/santa_hat2.svg);
			background-repeat: no-repeat;
			background-size: ${({ size }) => size * 2}px;
			width: ${({ size }) => size * 2}px;
			height: ${({ size }) => size * 2}px;
			position: absolute;
			top: -${({ size }) => (size * 2 + (size <= 12 ? 5 : 0))}px;
			left: -${({ size }) => size / 2}px;
			animation: sk-bouncedelay2 1.4s infinite ease-in-out both;
		}
	}

	&.three {
		background-color: ${COLOR.GREEN};
		position: relative;

		&:after{
			content: '';
			background-image: url(/static/app/images/christmas/santa_hat4.svg);
			background-repeat: no-repeat;
			background-size: ${({ size }) => size * 2}px;
			width: ${({ size }) => size * 2}px;
			height: ${({ size }) => size * 2}px;
			position: absolute;
			top: -${({ size }) => (size * 2 + (size <= 12 ? 5 : 0))}px;
			left: -${({ size }) => size / 2 + 2}px;
			animation: sk-bouncedelay2 1.4s infinite ease-in-out both;
		}
	}

	&.small {
		width: ${({ size }) => (size || '12')}px;
		height: ${({ size }) => (size || '12')}px;
		margin: 0px 2px;
	}

	&.mid {
		width: ${({ size }) => (size || '20')}px;
		height: ${({ size }) => (size || '20')}px;
		margin: 0px 5px;
		margin-bottom: 15px;
	}

	&.large {
		width: ${({ size }) => (size || '35')}px;
		height: ${({ size }) => (size || '35')}px;
		margin: 0px 10px;
	}

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			transform: translateY(10px);
		}
		40% {
			transform: translateY(0);
		}
	}

	@keyframes sk-bouncedelay2 {
		0%,
		80%,
		100% {
			transform: translateY(16px);
		}
		40% {
			transform: translateY(10px);
		}
	}
`;
