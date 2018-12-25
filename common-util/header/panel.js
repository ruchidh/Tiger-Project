import styled from 'styled-components';

import { FONT } from '../../util/theme';

const Medium = styled.div`
	font-family: ${FONT.MEDIUM};
	background-color: #e6e6e6;
	padding: 5px 10px;
	line-height: 12px;
	letter-spacing: -0.08px;
	font-size: 12px;
	width: 100%;
	text-transform: uppercase;
`;

const Borderless = styled.div`
	font-family: ${FONT.MEDIUM};
	background-color: transparent;
	padding: 5px 10px;
	line-height: 12px;
	letter-spacing: -0.08px;
	font-size: 12px;
	width: 100%;
	text-transform: uppercase;
`;

const Bold = styled.div`
	font-family: ${FONT.BOLD};
	background-color: #e6e6e6;
	padding: 8px 20px;
	line-height: 12px;
	letter-spacing: 0.62px;
	font-size: 14px;
	width: 100%;
	text-transform: uppercase;
`;

const PanelHeader = Medium;

PanelHeader.Medium = Medium;
PanelHeader.Borderless = Borderless;
PanelHeader.Bold = Bold;

export default PanelHeader;
