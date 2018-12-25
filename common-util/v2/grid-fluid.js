import styled from 'styled-components';

import breakpoint from '../../util/v2/breakpoint';

const GridFluid = styled.div`
	width: 100%;
	padding-right: ${breakpoint.HALF_GUTTER}px;
	padding-left: ${breakpoint.HALF_GUTTER}px;
	margin-right: auto;
	margin-left: auto;
`;

export default GridFluid;
