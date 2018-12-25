import styled from 'styled-components';

import { FONT } from '../../util/theme';

export const Container = styled.div`
	padding: 10px;
	display: flex;
	vertical-align: center;
`;

export const Message = styled.div`
	font-family: ${FONT.MEDIUM};
	font-size: 110%;
	letter-spacing: 0.62px;
	margin-left: 10px;
	display: inline-block;
`;

export const Icon = styled.img`
	width: 25px;
	height: 25px;
`;
