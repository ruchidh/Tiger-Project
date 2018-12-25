import styled from 'styled-components';

import { FONT } from '../../util/theme';

const ToastWrap = styled.div`
	position: relative;
	height: 100vh;
`;

const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 10001;
	top: 0;
	left: 0;
	background-color: ${props => props.backdropBgColor};
`;

const ContentWrap = styled.div`
    position: fixed;
    ${props => props.position} : ${props => props.offset}px;
    width: 63%;
    left: 0;
    z-index: 10002;
    padding: 25px;
    background: ${props => props.toastBgColor};
	box-shadow: 0 -2px 4px 0 rgba(217,217,217,0.50);
	margin-left: 13.5%;
    margin-right: 23.5%;
`;

const Header = styled.div`
	font-family: ${FONT.MEDIUM};
	font-size: 26px;
	color: ${props => props.headerColor};
	letter-spacing: 0.32px;
	text-align: ${props => props.headerTextAlign};
`;

const Close = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
`;

export { ToastWrap, Backdrop, ContentWrap, Header, Close };
