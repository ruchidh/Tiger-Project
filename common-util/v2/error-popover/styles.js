import styled from 'styled-components';
import { COLOR } from '../../../util/v2/theme';

function setPosition(position) {
	switch (position) {
		case 'right':
			return `left: 103%;
                    top: 0px`;
		case 'left':
			return `right: 103%;
                    top: 0px`;
		case 'top':
			return 'bottom: 110%';
		case 'bottom':
			return 'top: 110%';
		default:
			return 'top: 110%';
	}
}

function getArrow(position) {
	switch (position) {
		case 'right':
			return `top: 50%;
                    right: 100%;
                    margin-top: -5px;
                    border-color: transparent ${COLOR.DANGER} transparent transparent;`;
		case 'left':
			return `top: 50%;
                    left: 100%;
                    margin-top: -5px;
                    border-color: transparent transparent transparent ${COLOR.DANGER};`;
		case 'top':
			return `top: 100%;
                    left: 10%;
                    margin-left: -5px;
                    border-color: ${COLOR.DANGER} transparent transparent transparent;`;
		case 'bottom':
			return `bottom: 100%;
                    left: 10%;
                    margin-left: -5px;
                    border-color: transparent transparent ${COLOR.DANGER} transparent;`;
		default:
			return `bottom: 100%;
                    left: 50%;
                    margin-left: -5px;
                    border-color: transparent transparent ${COLOR.DANGER} transparent;`;
	}
}
export const Tooltip = styled.div`
	visibility: visible;
	width: fit-content;
	width: -moz-max-content;
	min-width: 230px;
	background-color: ${COLOR.DANGER};
	color: ${COLOR.WHITE};
	text-align: center;
	border-radius: 6px;
	padding: 5px 10px;
	position: absolute;
	z-index: 1;
	${({ position }) => setPosition(position)};

	&::after {
		content: '';
		position: absolute;
		border-style: solid;
		border-width: 5px;

		${({ position }) => getArrow(position)};
	}
`;
