import styled, { keyframes } from 'styled-components';

import { COLOR } from '../../../util/v2/theme';

export const LoadAni = keyframes`
    0% {
        left: 0;
        width: 10px;
    }

    25% {
        width: 80px;
    }

    50% {
        left: 100%;
        width: 10px;
    }

    75% {
        width: 80px;
    }

    100% {
        left: 0;
        width: 10px;
    }
`;

function setPosition(position) {
	switch (position) {
		case 'top':
			return 'top: 0;';
		case 'bottom':
			return 'bottom: 0;';
	}
}

function setBorder(position, margin) {
	switch (position) {
		case 'top':
			return `
                    border-top-left-radius: ${margin ? margin : 0};
                    border-top-right-radius: ${margin ? margin : 0};`;
		case 'bottom':
			return `
                    border-bottom-left-radius: ${margin ? margin : 0};
                    border-bottom-right-radius: ${margin ? margin : 0};`;
	}
}

export const Loader = styled.div`
	margin: auto;
	width: 100%;
	background-color: transparent;
	position: absolute;
	${({ position }) => setPosition(position)} .path {
		position: relative;
		overflow: hidden;
		width: auto;
		height: 5px;
		background-color: #c1c1c1;
		${({ position, margin }) => setBorder(position, margin)} .shape {
			position: absolute;
			left: 0;
			background-color: ${({ color }) => (color ? color : COLOR.DARK_BLUE)};
			width: 80px;
			height: 5px;
			display: block;
			x-transition: all 1s ease-in-out;
			animation: ${LoadAni} 1.7s infinite;
		}
	}
`;
