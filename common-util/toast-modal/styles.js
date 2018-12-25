import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import { FONT, COLOR } from '../../util/theme';

import breakpoint from '../../util/breakpoint';

const transitionCurve = 'cubic-bezier(0.580, 0.015, 0.085, 1.460)';
export const transitionTime = 0.5;

const MODAL_SIZE = {
	sm: '250px',
	md: '400px',
	lg: '550px',
};

const mapStateToProps = ({ layout: { sidebarIsOpen } }) => ({ sidebarIsOpen });

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '271px' : '80px')};
	right: 0;
	bottom: 0;
	z-index: 600;
`;

const openBackdrop = keyframes`
    from {
        background-color: rgba(255,255,255,0);
    }

    to {
        background-color: rgba(255,255,255,0.8);
    }
`;

const closeBackdrop = keyframes`
    from {
        background-color: rgba(255,255,255,0.8);
    }

    to {
        background-color: rgba(255,255,255,0);
    }
`;

export const Backdrop = connect(mapStateToProps)(styled.div`
	position: absolute;
	top: 60px;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.8);
	z-index: 601;
	transition: left 0.5s;
	animation: ${openBackdrop} ${transitionTime}s;

	@media (max-width: ${breakpoint.MD}px) {
		left: 0px;
	}

	&.close-modal {
		animation: ${closeBackdrop} ${transitionTime}s;
		background: rgba(255, 255, 255, 0);
	}
`);

const openModal = pos => keyframes`
    from {
        bottom: -${pos};
    }

    to {
        bottom: 0;
    }
`;

const closeModal = pos => keyframes`
    from {
        bottom: 0;
    }

    to {
        bottom: -${pos};
    }
`;

export const Modal = connect(mapStateToProps)(styled.div`
	position: fixed;
	right: 0;
	left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? '271px' : '80px')};
	z-index: 602;
	padding: 24px;
	background-color: ${COLOR.WHITE};
	box-shadow: -1px -4px 22px -6px rgba(0, 0, 0, 0.15);
	overflow: auto;

	${({ size }) => `
        bottom: 0px;
        height: ${size ? MODAL_SIZE[size] : '40vh'};
        animation: ${openModal(
			size ? MODAL_SIZE[size] : '40vh',
		)} ${transitionTime}s ${transitionCurve};
    `} &.close-modal {
		${({ size }) => `
            bottom: -${size ? MODAL_SIZE[size] : '40vh'}
            height: ${size ? MODAL_SIZE[size] : '40vh'};
            animation: ${closeModal(
				size ? MODAL_SIZE[size] : '40vh',
			)} ${transitionTime}s ${transitionCurve};
        `};
	}

	@media (max-width: ${breakpoint.MD}px) {
		left: 0px;
	}
`);

export const Row = styled.div`
	margin: 10px 0;
`;

export const Context = styled.div`
	font-family: ${FONT.BOLD};
	color: #404040;
	margin: 5px 0;
	text-transform: uppercase;
	margin: 10px 0;
`;

export const Title = styled.div`
	font-family: ${FONT.MEDIUM};
	font-size: 170%;
	color: #1b8be8;
	letter-spacing: 0.32px;
`;

export const Subtitle = styled.div`
	font-size: 110%;
	letter-spacing: 0.2px;
	margin: 10px 0;
`;

export const Close = styled.button`
	padding: 0;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	float: right;

	img {
		width: 25px;
		height: 25px;
	}
`;
