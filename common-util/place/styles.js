import styled from 'styled-components';

export const Place = styled.div`
	letter-spacing: 0.27px;
	line-height: 14px;
`;

export const Title = styled.div`
	font-family: ${({ light, medium }) =>
		light ? 'GreycliffCF-Medium' : medium ? 'GreycliffCF-DemiBold' : 'GreycliffCF-Bold'};
	font-size: ${({ light, medium }) => (light ? '100%' : medium ? '110%' : '120%')};
	color: #202020;
	text-transform: uppercase;
`;

export const Description = styled.div`
	font-family: GreycliffCF-Regular;
	font-size: 100%;
	color: #777777;
	margin-top: 7px;
	text-transform: capitalize;
`;
