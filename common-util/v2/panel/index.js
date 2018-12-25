import styled from 'styled-components';

import { COLOR } from '../../../util/v2/theme';

const Panel = styled.div`
	background: ${COLOR.WHITE};
	${({ noShadow = false }) =>
		noShadow ? '' : 'box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.08);'} border-radius: 4px;
	padding: 24px 16px;
`;

export default Panel;
