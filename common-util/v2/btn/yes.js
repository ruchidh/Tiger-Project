import styled from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

const Yes = styled.button.attrs({
	type: 'button',
})`
	background: ${COLOR.BLUE};
	border-radius: 4px;
	outline: none;
	border: none;
	cursor: pointer;
	width: 40px;
	height: 40px;

	&:after {
		content: '✓';
		color: ${COLOR.WHITE};
		font-family: ${FONT.REGULAR};
		line-height: 22px;
		font-size: 22px;
	}
`;

export default Yes;
