import styled, { keyframes } from 'styled-components';

import { FONT } from '../../util/theme';
import breakpoint from '../../util/breakpoint';

const SIZES = {
	lg: '90%', md: '800px', sm: '420px', xs: '300px',
};

const transitionCurve = 'cubic-bezier(0.580, 0.015, 0.085, 1.460)';
export const transitionTime = 0.5;

export const Container = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	z-index: 1050;
	overflow: hidden;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	visibility: hidden;
	transition: visibility ${transitionTime}s;

	&.show-modal {
		visibility: visible;
	}
`;

const backdropOpen_BG = 'rgba(0, 0, 0, 0.6)';
const backdropClosed_BG = 'rgba(0, 0, 0, 0)';

const openBackdrop = keyframes`
    from {
        background-color: ${backdropClosed_BG};
    }

    to {
        background-color: ${backdropOpen_BG};
    }
`;

const closeBackdrop = keyframes`
    from {
        background-color: ${backdropOpen_BG};
    }

    to {
        background-color: ${backdropClosed_BG};
    }
`;

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1024;
	background-color: ${backdropClosed_BG};
	animation: ${closeBackdrop} ${transitionTime}s;

	&.show-modal {
		animation: ${openBackdrop} ${transitionTime}s;
		background-color: ${backdropOpen_BG};
	}
`;

const dialogOpen_Scale = 'scale(1, 1)';
const dialogClosed_Scale = 'scale(0, 0)';

const openModal = (x, y) => keyframes`
    from {
        transform: translate(${x}px, ${y}px) ${dialogClosed_Scale};
	    opacity: 0;
    }

    to {
		opacity: 1;
		transform: translate(0, 0) ${dialogOpen_Scale};
    }
`;

const closeModal = (x, y) => keyframes`
    from {
		opacity: 1;
		transform: translate(0, 0) ${dialogOpen_Scale};
    }

    to {
		transform: translate(${x}px, ${y}px) ${dialogClosed_Scale};
		opacity: 0;
    }
`;

export const Dialog = styled.div`
	position: relative;
	margin-top: -20px;
	z-index: 1025;
	opacity: 0;
	box-shadow: 0 0 8px 2px rgba(0,0,0,0.05);
	
    ${({ size, x, y }) => `
	    width: ${SIZES[size]};
	    transform: translate(${x}px, ${y}px) ${dialogClosed_Scale};
	    animation: ${closeModal(x, y)} ${transitionTime}s ${transitionCurve};
    `}

	@media (max-width: ${breakpoint.MD}px) {
		max-width: 85%;
	}

	@media (max-width: ${breakpoint.SM}px) {
		width: 90%;
	}

	&.show-modal {
		opacity: 1;
        ${({ x, y }) => `
		    transform: translate(0px, 0px) ${dialogOpen_Scale};
            animation: ${openModal(x, y)} ${transitionTime}s ${transitionCurve};
        `}
	}
`;

export const Content = styled.div`
	position: relative;
	background: #fff;
	background-clip: padding-box;
	border-radius: 4px;
	outline: 0;
	box-shadow: 0 3px 5px 0 rgba(166, 165, 165, 0.5);
	z-index: 1050;
	max-height: 86vh;
	overflow-y: auto;
`;

export const Close = styled.button`
	float: right;
	position: absolute;
	top: ${({ closeSize }) => (closeSize === 'bg' ? -17 : -25)}px;
	right: ${({ closeSize }) => (closeSize === 'bg' ? -17 : 0)}px;
	background: transparent;
	border: none;
	text-transform: inherit;
	color: white;
	font-family: ${FONT.MEDIUM};
	cursor: pointer;
	outline: none;
	z-index: ${({ closeSize }) => (closeSize === 'bg' ? 1051 : 1)};
	&.dark {
		top: -12px;
		right: -15px;
	}

	&:hover {
		color: #ccc;

		span {
			background-color: #999;
			color: #fff;
		}
	}
`;

export const Span = styled.span`
	float: right;
	border-radius: 100%;
	width: 15px;
	height: 15px;
	background-color: #fff;
	color: #a9a9a9;
	line-height: 0.9;
	margin-left: 10px;
	padding-top: 0px;
	transition: 0.1s all linear;

	&.dark {
		width: 24px;
		height: 24px;
		background-color: #202020;
		color: #fff;
		padding-top: 4px;
	}
`;

export const Span2 = styled.span`
	border-radius: 100%;
	width: 40px;
	height: 40px;
	background-color: #fff;
	color: #a9a9a9;
	margin-left: 10px;
	padding-top: 0px;
	transition: 0.1s all linear;
	box-shadow: 0 3px 5px 0 rgba(166, 165, 165, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;
