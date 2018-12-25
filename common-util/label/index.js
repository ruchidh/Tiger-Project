import styled from 'styled-components';

export const Label = styled.span`
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	color: ${props => props.color};
	min-width: 40px;
`;
