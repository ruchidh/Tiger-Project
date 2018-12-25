import styled from 'styled-components';

const COLOR_BLUE = '#1B8BE8';

export const Container = styled.div`
	padding: 10px 16px 0 16px;
	max-width: 100%;
	background-color: rgba(255, 255, 255, 0.5);
`;

export const Pill = styled.div`
	display: inline-block;
	color: ${COLOR_BLUE};
	font-size: 110%;
	letter-spacing: 0;
	line-height: 19px;
	opacity: 0.6;
	font-family: GreycliffCF-DemiBold;
	padding: 10px 20px;
	cursor: pointer;

	&.active {
		opacity: 1;
		border-bottom: 4px solid ${COLOR_BLUE};
	}

	&:hover {
		opacity: 1;
	}
`;
