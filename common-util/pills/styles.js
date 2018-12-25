import styled from 'styled-components';
import breakpoint from '../../util/breakpoint';

const COLOR_TEXT_DARK = '#202020';
const COLOR_TEXT_LIGHT = '#FFFFFF';

const BG_COLOR_DARK_ACTIVE = '#202020';
const BG_COLOR_DARK_ACTIVE_HOVER = '#242424';

const BG_COLOR_LIGHT = '#F8F8F8';
const BG_COLOR_LIGHT_HOVER = '#F0F0F0';

const BG_COLOR_DARK_INACTIVE = '#DADADA';
const BG_COLOR_DARK_INACTIVE_HOVER = '#CDCDCD';

export const Container = styled.div`
	max-width: ${props => (props.width ? props.width : '100%')};
	width: ${props => (props.width ? props.width : 'auto')};
	margin: ${({ tabPill }) => (tabPill ? '0px' : '10px')};
	margin-left: ${({ type }) => (type === 'outline' ? '0px' : '10px')};
	background-color: ${({ tabPill }) => (tabPill ? 'white' : null)};
`;

export const Pill = styled.div`
	display: inline-block;
	background-color: ${({ type, tabPill }) =>
		type === 'outline' ? (tabPill ? 'white' : BG_COLOR_LIGHT) : BG_COLOR_DARK_INACTIVE};
	color: ${({ type, tabPill }) =>
		type === 'outline' ? (tabPill ? '#9F9F9F' : COLOR_TEXT_DARK) : COLOR_TEXT_LIGHT};
	letter-spacing: -0.11px;
	font-family: GreycliffCF-DemiBold;
	border-radius: ${({ tabPill }) => (tabPill ? '0px' : '4px')};
	cursor: pointer;
	margin-left: ${({ tabPill }) => (tabPill ? '0px' : '10px')};
	transition: 0.1s all linear;
	text-transform: uppercase;
	font-size: ${({ type, tabPill }) => (type === 'outline' ? (tabPill ? '120%' : '90%') : '100%')};
	padding: ${({ type, tabPill, past }) =>
		type === 'outline'
			? tabPill
				? past
					? '10px 158px'
					: '10px 115px'
				: '4px 45px'
			: '8px 65px'};
	&:hover {
		background-color: ${({ type }) =>
			type === 'outline' ? BG_COLOR_LIGHT_HOVER : BG_COLOR_DARK_INACTIVE_HOVER};
		border-bottom: ${({ tabPill }) => (tabPill ? '5px solid #DADADA' : 'null')};
	}
	&.active {
		background-color: ${({ type, tabPill }) =>
			type === 'outline' ? (tabPill ? 'white' : BG_COLOR_LIGHT) : BG_COLOR_DARK_ACTIVE};
		color: ${({ type }) => (type === 'outline' ? COLOR_TEXT_DARK : COLOR_TEXT_LIGHT)};

		border-bottom: ${({ type, tabPill }) =>
			type === 'outline' ? (tabPill ? '5px solid #1FD899' : '3px solid #777777') : 'none'};
	}
	&.active:hover {
		background-color: ${({ type }) =>
			type === 'outline' ? BG_COLOR_LIGHT_HOVER : BG_COLOR_DARK_ACTIVE_HOVER};
		border-bottom: ${({ type, tabPill }) =>
			type === 'outline' ? (tabPill ? '5px solid  #1FD899' : '3px solid #777777') : 'none'};
	}
	@media (max-width: ${breakpoint.SM}px) {
		padding: ${({ type, tabPill, past }) =>
			type === 'outline'
				? tabPill
					? past
						? '10px 20px'
						: '10px 25px'
					: '4px 10px'
				: '8px 16px'};
	}
`;
