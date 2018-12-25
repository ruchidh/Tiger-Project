import styled from 'styled-components';

import { COLOR, FONT } from '../../util/theme';

export const Container = styled.div`
    ${({ float }) => float && `text-align: ${float};`}
    margin-top:  ${({ marginTop }) => (marginTop || '16px')};
    margin-bottom: ${({ marginBottom }) => (marginBottom || null)};
    ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}

    button:first-child {
        margin-left: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    };

    button:last-child {
        margin-right: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    };
`;

export const Btn = styled.button`
	background-color: white;
	margin-left: 1px;
	margin-right: 1px;
	border: none;
	height: 32px;
	width: 32px;
	font-size: 80%;
	cursor: pointer;
	outline: none;
	color: ${COLOR.BLUE};
	font-family: ${FONT.MEDIUM};

	&:disabled {
		opacity: 0.65;
		pointer-events: none;
		cursor: not-allowed;
	}

	&:hover {
		background-color: #eee;
	}

	&.active {
		color: ${COLOR.WHITE};
		cursor: default;
		background-color: ${COLOR.BLUE};
		font-family: ${FONT.REGULAR};
	}
`;

export const Image = styled.img`
	height: 9px;
	width: 5px;
`;
