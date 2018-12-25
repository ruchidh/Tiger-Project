import styled from 'styled-components';

const GridFluid = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	text-align: ${({ align = 'inherit' }) => align};
`;

export default GridFluid;
