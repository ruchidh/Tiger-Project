import styled from 'styled-components';

import breakpoint from '../../../../util/breakpoint';

const TRANSITION_TIME = 0.3;
const TRANSITION_CURVE = 'cubic-bezier(0.580, 0.015, 0.085, 1.460)';

export const Backdrop = styled.div`
	z-index: 1059;
	position: fixed;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	align-items: center;
	justify-items: center;
	background: rgba(219, 219, 219, 0.5);
	transition: background-color ${TRANSITION_TIME}s, visibility ${TRANSITION_TIME}s;

	&.notif-hidden {
		background-color: rgba(0, 0, 0, 0);
		visibility: hidden;
	}
`;

export const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1060;
	width: 420px;
	height: 100vh;
	padding: 32px 24px;
	background-color: white;
	box-shadow: 4px 0 10px 0 rgba(217, 217, 217, 0.5);
	transition: all ${TRANSITION_TIME}s ${TRANSITION_CURVE};

	&.notif-hidden {
		width: 0;
		padding: 0;
	}

	@media (max-width: ${breakpoint.SM}px) {
		width: 92%;
	}
`;
