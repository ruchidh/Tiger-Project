import styled from 'styled-components';

import breakpoint from '../../util/v2/breakpoint';

const Row = styled.div`
	margin-right: -${breakpoint.HALF_GUTTER}px;
	margin-left: -${breakpoint.HALF_GUTTER}px;

	&:before,
	&:after {
		display: table;
		content: ' ';
	}

	&:after {
		clear: both;
	}

	${({ justify }) => (justify ? 'display: flex;' : '')};
`;

export default Row;
