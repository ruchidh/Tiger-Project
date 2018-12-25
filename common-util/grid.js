import styled from 'styled-components';

import breakpoint from '../util/breakpoint';

const Grid = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px;
	text-align: ${({ align = 'inherit' }) => align};

	@media (min-width: ${breakpoint.SM}px) {
		width: 540px;
	}
	@media (min-width: ${breakpoint.MD}px) {
		width: 720px;
	}
	@media (min-width: ${breakpoint.LG}px) {
		width: 960px;
	}
	@media (min-width: ${breakpoint.XL}px) {
		width: 1140px;
	}
`;

export default Grid;
