import styled from 'styled-components';

import { COLOR, FONT } from '../../../../util/v2/theme';

const SIZE = {
	sm: {
		height: '40px',
		listMarginTop: '27px',
	},
	md: {
		height: '48px',
		listMarginTop: '32px',
	},
};

const THEME = {
	blue: {
		bgColor: COLOR.DARK_BLUE,
		color: COLOR.WHITE,
		border: 'none',
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.WHITE}`,
	},
	default: {
		bgColor: COLOR.WHITE,
		color: COLOR.BLACK,
		border: `1px solid ${COLOR.SLATY}`,
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.SLATY}`,
	},
	grey: {
		bgColor: COLOR.LIGHT_GREY,
		color: COLOR.BLACK,
		phColor: COLOR.PLACEHOLDER,
		border: `1px solid ${COLOR.SLATY}`,
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.SLATY}`,
	},
};

const setPosition = (position, size) => {
	switch (position) {
		case 'top':
			return `
                bottom: ${SIZE[size].listMarginTop};
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                `;
		case 'bottom':
			return `
                    top: ${SIZE[size].listMarginTop};
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                `;
	}
};

export const SelectBox = styled.div.attrs({})`
	width: 100%;
	height: ${({ size = 'md' }) => SIZE[size].height};
	padding: 0 16px;
	font-size: 14px;
	line-height: 16px;
	color: ${({ bsStyle = 'default' }) => THEME[bsStyle].color};
	background: ${({ bsStyle = 'default' }) => THEME[bsStyle].bgColor};
	border: ${({ bsStyle = 'default', active = false }) =>
		active ? THEME[bsStyle].fcBorder : THEME[bsStyle].border};
	border-radius: ${({ bsStyle = 'default' }) => THEME[bsStyle].borderRadius};
	outline: 0;
	display: flex;
	align-items: center;
	padding-right: ${({ hideArrow }) => (hideArrow ? '16px' : '35px')};

	&:after {
		content: '';
		display: ${({ hideArrow }) => (hideArrow ? 'none' : 'initial')};
		position: absolute;
		padding: 3px;
		border-bottom: 2px solid ${({ bsStyle = 'default' }) => THEME[bsStyle].color};
		border-right: 2px solid ${({ bsStyle = 'default' }) => THEME[bsStyle].color};
		right: 16px;
		transform: ${({ active }) => (active ? 'rotate(225deg)' : 'rotate(45deg)')};
		transition: transform 0.1s linear;
	}
`;

export const Ul = styled.ul`
	font-size: 14px;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
	position: absolute;
	left: 0;
	background: #fff;
	width: ${({ align }) => (align === 'justify' ? '100%' : '500px')};
	list-style-type: none;
	padding-left: 0;
	z-index: 9999;
	transition: all 0.5s;
	max-height: 225px;
	overflow-y: scroll;

	${({ position = 'bottom', size = 'md' }) => setPosition(position, size)} li.results {
		height: 40px;
		padding: 10px 16px;
		cursor: pointer;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		&:hover {
			background-color: ${COLOR.ALMOST_BLUE};
			color: ${COLOR.BLACK};
		}
	}

	li.no-result {
		min-height: 40px;
		padding: 10px 16px;
		cursor: pointer;
	}
`;

export const Placeholder = styled.span`
	font-family: ${FONT.DEMI_BOLD};
	font-size: 13px;
	color: ${COLOR.PLACEHOLDER};
`;
