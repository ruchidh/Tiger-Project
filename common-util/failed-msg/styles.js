import styled from 'styled-components';

import Grid from '../grid';
import Primary from '../v2/btn/primary';
import { COLOR, FONT } from '../../util/v2/theme';

export const CustomGrid = styled(Grid)`
	padding-top: 5%;
	padding-bottom: 5%;

	h2 {
		margin-bottom: 30px;
	}

	p {
		text-align: justify;
		max-width: 500px;
		margin-bottom: 30px;
	}

	&.full-width {
		width: 100%;
	}
`;

export const Button = styled(Primary)`
	font-family: ${FONT.BOLD};
	font-size: 14px;
`;

export const Image = styled.img`
	width: 100%;
	filter: grayscale(1);
`;

export const FrontText = styled.h1`
	font-family: ${FONT.BOLD};
	letter-spacing: 0.83px;
	color: ${COLOR.FONT_BLACK};
	letter-spacing: 0;
	font-size: 32px;
	line-height: 32px;
	margin: 32px 0;
`;

export const InsideText = styled.h4`
	font-family: ${FONT.MEDIUM};
	max-width: 500px;
	font-size: 16px;
	color: ${COLOR.FONT_BLACK};
	letter-spacing: 0;
	line-height: 32px;
	margin: 0 0 48px;
`;
