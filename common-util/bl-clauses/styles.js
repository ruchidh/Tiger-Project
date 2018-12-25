import styled from 'styled-components';

import { COLOR, FONT } from '../../util/theme';

export const Error = styled.div`
	color: ${COLOR.DANGER};
	font-family: ${FONT.MEDIUM};
	font-size: 85%;
	letter-spacing: -0.08px;
	text-transform: uppercase;
`;
