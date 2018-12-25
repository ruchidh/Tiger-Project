import styled from 'styled-components';

import { FONT, COLOR } from '../../../util/theme';

export const Dialog = styled.div`
	position: relative;
	width: auto;
	margin: 10px;
`;

export const Header = styled.div`
	padding: 15px;
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	border-bottom: 1px solid #e5e5e5;
	background-color: ${COLOR.BLACK};
	border: ${COLOR.BLACK};
	color: ${COLOR.WHITE};

	&.dark {
		color: ${COLOR.WHITE};
		border: 1px solid transparent;
		background-color: rgba(0, 0, 0, 0.6);
	}

	&.grey {
		border-top-right-radius: 0px;
		border-top-left-radius: 0px;
		background-color: #f2f2f2;
	}

	&:before,
	&:after {
		display: table;
		content: ' ';
	}
`;

export const Title = styled.span`
	margin: 0;
	line-height: 1.42857143;
	font-family: ${FONT.BOLD};
	font-weight: 500;
	color: ${COLOR.WHITE};
	box-sizing: border-box;
	font-size: 18px;
`;

export const Body = styled.div`
	position: relative;
	overflow: auto;
	padding: 15px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;

	&.dark {
		background-color: rgba(0, 0, 0, 0.6);
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	&:before,
	&:after {
		display: table;
		content: ' ';
	}
`;

export const Add = styled.img`
	margin-right: 10px;
`;

export const Footer = styled.div`
	position: relative;
	padding: 15px;
	text-align: right;
	display: block;
	box-sizing: border-box;
	border-top: 1px solid rgba(155, 155, 155, 0.27);

	&.grey {
		border-top: none;
	}

	&:before,
	&:after {
		display: table;
		content: ' ';
	}

	button {
		margin-left: 15px;
	}
`;
