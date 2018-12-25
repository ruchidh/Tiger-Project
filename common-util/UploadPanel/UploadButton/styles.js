import styled from 'styled-components';

export const Button = styled.label`
	border: 1px solid #1b8be8;
	border-radius: 6px;
	color: #1b8be8;
	padding: 5px 20px;
	cursor: pointer;
	transition: 0.1s all linear;

	&:hover {
		background-color: #1b8be8;
		color: #fff;
	}
`;

export const Input = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

export const FileName = styled.div`
	white-space: nowrap;
	display: inline-block;
	font-family: GreycliffCF-Medium;
	font-size: 100%;
	color: #1fd899;
	width: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 35px;
	padding-left: 10px;
`;
