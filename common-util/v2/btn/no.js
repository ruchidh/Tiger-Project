import styled from 'styled-components';

import { COLOR, FONT } from '../../../util/v2/theme';

const No = styled.button.attrs({
	type: 'button',
})`
	background: #ececec;
	border-radius: 4px;
	outline: none;
	border: none;
	cursor: pointer;
	width: 40px;
	height: 40px;

	&:after {
		content: 'x';
		color: #9b9b9b;
		font-family: ${FONT.REGULAR};
		line-height: 22px;
		font-size: 22px;
	}
`;

export default No;
