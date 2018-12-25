import styled from 'styled-components';
import ellipsis from '../../../../css-util/ellipsis';


export const Container = styled.div`
    border-radius: 4px;
    margin-bottom: 8px;
    background: #f9f9f9;
	border: 1px solid #ebebeb;
	height: 40px;
	cursor: pointer;
	color: rgb(27, 139, 232);
	font-family: GreycliffCF-Bold;
	input[type="file"] {
		display: none;
	}
	
	padding: ${({active}) => active ? '8px 20px' : '' };
	line-height: 24px;
`;

export const Label = styled.label`
	border: 1px solid #ddd;
	border-radius: 4px;
	cursor: pointer;
    padding-top: 28px;
    padding: 8px 21px;
    display: inline-block;
	width: 100%;
	height: 100%;
	line-height: 24px;
	&:hover {
		color: #2593fc;
		border: 1px solid #2593fc;
	}
`;

export const Input = styled.input``;

export const Span = styled.span`
	float: right;
    font-size: 16px;
	color: gray;
	${ellipsis}
`;
