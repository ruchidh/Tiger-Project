import styled from 'styled-components';

import { COLOR } from '../../util/theme';

export const Prev = styled.div`
	border: solid ${COLOR.WHITE};
	border-width: 2px 0 0 2px;
	display: inline-block;
	padding: 5px;
	color: #fff;
	right: 30px;
	transform: rotate(-45deg);
`;

export const Next = styled.div`
	border: solid ${COLOR.WHITE};
	border-width: 0 2px 2px 0;
	display: inline-block;
	padding: 5px;
	color: ${COLOR.WHITE};
	right: 30px;
	transform: rotate(-45deg);
`;

export const DatepickerContainer = styled.div`
	display: inline-block;
	position: relative;
	width: fit-content;
`;

export const ApplyButton = styled.button`
	border: none;
	color: ${COLOR.WHITE};
	background: ${COLOR.GREEN};
	padding: 13px 10px 13px;
	cursor: pointer;
	border-radius: 3px;
	margin-left: 10px;
`;

export const BtnContainer = styled.div`
	position: absolute;
	right: 0;
	pointer-events: auto;
	margin: 5px;
	z-index: 10;
`;

export const ClearButton = styled.button`
	border: none;
	color: ${COLOR.DARK_GREY};
	text-decoration: underline;
	background: transparent;
	cursor: pointer;
`;

export const ErrorMessage = styled.h4`
	font-size: 16px;
	color: red;
	font-weight: bold;
	margin-top: 24px;
`;
