import styled from 'styled-components';

import { FONT } from '../../util/theme';
import ellipsis from '../../css-util/ellipsis';

export const Container = styled.div`
	.port-vertical-code {
		font-family: ${FONT.DEMI_BOLD};
		font-size: 16px;
		${ellipsis};
	}

	.port-vertical-name {
		font-size: 12px;
		overflow: hidden;
		${ellipsis};
	}
`;
