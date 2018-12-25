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
	}

	&.two {
		background-color: ${COLOR.YELLOW};
		animation-delay: -0.16s;
	}

	&.three {
		background-color: ${COLOR.GREEN};
	}

	&.small {
		width: ${({ size }) => (size ? size : '12px')};
		height: ${({ size }) => (size ? size : '12px')};
		margin: 0px 2px;
	}

	&.mid {
		width: ${({ size }) => (size ? size : '20px')};
		height: ${({ size }) => (size ? size : '20px')};
		margin: 0px 5px;
		margin-bottom: 15px;
	}

	&.large {
		width: ${({ size }) => (size ? size : '35px')};
		height: ${({ size }) => (size ? size : '35px')};
		margin: 0px 10px;
	}

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			transform: scale(0);
		}
		40% {
			transform: scale(1);
		}
	}
`;
