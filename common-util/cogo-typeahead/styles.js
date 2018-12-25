import styled from 'styled-components';
import { COLOR, FONT } from '../../util/v2/theme';
import ellipsis from '../../css-util/ellipsis';

const SIZE = {
	sm: {
		height: '40px',
		listMarginTop: '27px',
	},
	md: {
		height: '48px',
		listMarginTop: '35px',
	},
};

const THEME = {
	blue: {
		bgColor: COLOR.DARK_BLUE,
		color: COLOR.WHITE,
		border: 'none',
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.WHITE}`,
		bgClear: '#0B5BAB',
	},
	default: {
		bgColor: COLOR.WHITE,
		color: COLOR.BLACK,
		border: `2px solid ${COLOR.SLATY}`,
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.SLATY}`,
		bgClear: COLOR.MED_GREY,
		focusColor: '#2E8FE2',
	},
	light_blue: {
		bgColor: 'rgba(27,139,232,0.05)',
		color: COLOR.BLACK,
		border: `1px solid ${COLOR.BLUE}`,
		borderRadius: '4px',
		height: 40,
	},
	grey: {
		bgColor: COLOR.LIGHT_GREY,
		color: COLOR.BLACK,
		phColor: COLOR.MED_GREY,
		border: `1px solid ${COLOR.SLATY}`,
		borderRadius: '4px',
		fcBorder: `1px solid ${COLOR.SLATY}`,
		bgClear: COLOR.MED_GREY,
		focusColor: '#2E8FE2',
	},
};

export const Input = styled.input.attrs({
	type: 'text',
	autoComplete: 'off',
})`
	${ellipsis} width: 100%;
	height: ${({ size = 'md' }) => SIZE[size].height};
	padding: 16px;
	font-size: 14px;
	line-height: 16px;
	color: ${({ bsStyle = 'default' }) => THEME[bsStyle].color};
	background: ${({ bsStyle = 'default' }) => THEME[bsStyle].bgColor};
	border: ${({ bsStyle = 'default' }) => THEME[bsStyle].border};
	border-radius: ${({ bsStyle = 'default' }) => THEME[bsStyle].borderRadius};
	outline: 0;

	&:-webkit-input-placeholder {
		color: ${({ bsStyle = 'default' }) => THEME[bsStyle].phColor};
	}
	&:focus {
		border: ${({ bsStyle = 'default' }) => THEME[bsStyle].fcBorder};
	}

	&.disable-text {
		color: transparent;
		text-shadow: 0 0 0 #000;
	}
`;

export const BtnClear = styled.span`
	width: 17px;
	height: 17px;
	position: absolute;
	right: 5px;
	top: 0;
	background: ${({ bsStyle = 'default' }) => THEME[bsStyle].bgClear};
	text-align: center;
	line-height: 17px;
	border-radius: 100%;
	font-size: 10px;
	font-weight: 400;
	color: ${({ bsStyle = 'default' }) => THEME[bsStyle].color};
	cursor: pointer;
	bottom: 0;
	margin: auto;
`;

export const Hint = styled.div`
	position: absolute;
	left: 20px;
	color: #ccc;
`;


export const Line = styled.div`
	border: 1px solid #eeeeee;
	width: 100%;
`;

export const Ul = styled.ul`
	font-size: 14px;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
	position: absolute;
	top: ${({ size = 'md' }) => SIZE[size].listMarginTop};
	left: 0;
	background: #fff;
	width: ${({ align }) => (align === 'justify' ? '100%' : '500px')};
	list-style-type: none;
	padding-left: 0;
	z-index: 9999;
	transition: all 0.5s;
	max-height: 250px;
	overflow: auto;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;

	li.results {
		${ellipsis} min-height: 40px;
		padding: 12px 16px;
		cursor: pointer;

		&:hover {
			background-color: ${COLOR.DARK_BLUE};
			color: ${COLOR.WHITE};
		}
	}

	li.no-result {
		min-height: 40px;
		padding: 10px 16px;
		cursor: pointer;
	}
	
`;


export const Item = styled.div`
width: 100%;
padding-left: 22px;
font-size: 14px;
-webkit-letter-spacing: -0.11px;
-moz-letter-spacing: -0.11px;
-ms-letter-spacing: -0.11px;
letter-spacing: -0.11px;
line-height: 16px;
position: relative;
background-image: ${({ type, flag }) => (flag ? `url('${flag}')` : (type === 'destination' ? "url('/static/app/images/v2/destination-marker.svg')" : "url('/static/app/images/v2/origin-marker.svg')"))};
background-size: 13px;
background-position: center left;
background-repeat: no-repeat;
`;
