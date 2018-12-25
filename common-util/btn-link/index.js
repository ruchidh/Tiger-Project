import styled from 'styled-components';

import { COLOR } from '../../util/theme';

const Button = styled.button`
	background-color: transparent;
	color: ${props => (props.color ? props.color : COLOR.BLUE)};
	letter-spacing: 0.54px;
	line-height: initial;
	padding: 0;
	cursor: pointer;
	outline: none;
	border: none;
	display: inline-block;
	font-family: ${COLOR.DEMI_BOLD};
`;

export default Button;
