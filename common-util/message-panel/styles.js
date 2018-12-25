import styled from 'styled-components';

import Col from '../col';
import Row from '../row';
import { FONT, COLOR } from '../../util/theme';

export const StepPanel = styled(Row)``;

export const Cogo = styled.img`
	margin-top: 10px;
`;

export const Steps = styled(Col)`
	display: inline-block;
	&:first-child {
		width: 60px;
	}
	&:nth-child(2) {
		width: calc(100% - 60px);
	}
`;

export const Description = styled.p`
	font-family: ${FONT.DEMI_BOLD};
	font-size: 16px;
	color: ${COLOR.BLACK};
	letter-spacing: 0.62px;
	padding-left: 20px;
`;
