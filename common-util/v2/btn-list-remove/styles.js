import styled from 'styled-components';

const COLOR_BLUE = '#1B8BE8';

export const Btn = styled.button`
	border-color: ${COLOR_BLUE};
	color: ${COLOR_BLUE};
	border-radius: 100px;
	background-color: white;
	line-height: 16px;
	padding: 6px 10px;
	font-size: 80%;
	margin: 5px;
	outline: none;
	cursor: pointer;
	white-space: nowrap;
	text-transform: capitalize;
	font-family: GreycliffCF-DemiBold;
	display: none;

	&.show {
		display: initial;
	}

	span.btn-list-remove-mark {
		float: right;
		font-size: 75%;
		font-weight: bold;
		margin-left: 10px;
		padding: 3px 6px;
		background: ${COLOR_BLUE};
		color: white;
		border-radius: 20px;
		line-height: 10px;
	}

	&:hover {
		background-color: ${COLOR_BLUE};
		color: white;

		span.btn-list-remove-mark {
			background: white;
			color: ${COLOR_BLUE};
		}
	}
`;
