import styled from 'styled-components';

import { FONT, COLOR } from '../../../util/v2/theme';

const Main = styled.h2`
	font-family: ${FONT.BOLD};
	color: ${COLOR.HEADER};
	font-size: 36px;
	letter-spacing: 0;
	line-height: 48px;
	${({ center }) => center && 'text-align: center;'};
`;

export default Main;
