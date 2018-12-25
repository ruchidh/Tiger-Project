import styled from 'styled-components';

export const Ul = styled.ul`
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
	list-style: none;

	&:before,
	&:after {
		display: table;
		content: ' ';
		clear: both;
	}

	&.light {
		display: flex;
		& > * {
			flex: 1;
		}
	}
`;

export const Content = styled.div`
	border: 1px solid #ddd;
	background: white;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;

	&.light {
		border: none;
		background: transparent;
	}
`;

export const TabPanel = styled.div`
	padding: 20px;
	opacity: 0;
	-webkit-transition: opacity 25s linear;
	-o-transition: opacity 25s linear;
	transition: opacity 25s linear;
	display: none;

	&.active {
		display: block;
		opacity: 1;
	}

	&.light {
		background-color: transparent;
		padding: 10px 0px;
	}
`;
