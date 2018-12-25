import styled from 'styled-components';

import breakpoint from '../../util/v2/breakpoint';

const Grid = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-left: ${breakpoint.GUTTER}px;
	padding-right: ${breakpoint.GUTTER}px;

	@media (min-width: ${breakpoint.XL}px) {
		width: ${breakpoint.XL}px;
	}
`;

export default Grid;
