import styled from 'styled-components';
import { COLOR } from '../../util/v2/theme';

import CogoInput from '../v2/input';

export const Input = styled(CogoInput)`
	background-color: ${COLOR.LIGHT_GREY};
	border: 1px solid #ebebeb;
	height: 40px;
	padding: 12px;

	font-family: GreycliffCF-DemiBold;
	font-size: 14px;
	color: #9b9b9b;
	letter-spacing: -0.11px;
	line-height: 16px;
`;
