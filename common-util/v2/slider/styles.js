import styled from 'styled-components';

export const Input = styled.input`
	-webkit-appearance: none;
	width: 100%;
	height: 8px;
	background-repeat: no-repeat;
	background-image: linear-gradient(#f0f2f7, #f0f2f7), linear-gradient(#67a61d, #67a61d),
		linear-gradient(#f0f2f7, #f0f2f7);
	background-size: ${({ bg1 }) => bg1}% 8px, ${({ bg2 }) => bg2}% 8px, 100% 8px;
	outline: none;
	pointer-events: none;
	position: absolute;
	border-radius: 3px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 100px;
		cursor: pointer;
		pointer-events: auto;
		position: relative;
		background: #ffffff;
		box-shadow: 0 7px 20px 0 rgba(34, 35, 40, 0.4);
		border: 1px solid #eee;
	}
`;
export const Input1 = styled.input`
	-webkit-appearance: none;
	width: 100%;
	height: 8px;
	outline: none;
	pointer-events: none;
	position: absolute;
	background: transparent;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 100px;
		top: -2px;
		cursor: pointer;
		pointer-events: auto;
		position: relative;
		background: #ffffff;
		box-shadow: 0 7px 20px 0 rgba(34, 35, 40, 0.4);
		border: 1px solid #eee;
	}
`;

export const Container = styled.div`
	position: relative;
	width: 90%;
	margin: auto;
	margin-top: 13px;
`;

export const ToolTip = styled.div`
	text-align: center;
	width: 80px;
	background-color: rgb(245, 245, 245);
	padding: 5px 7px;
	border-radius: 5px;
	font-family: GreycliffCF-Bold;
	font-size: 11px;
	color: #ffffff;
	line-height: 15px;
	background-color: #67a61d;
	border: 2px solid #eee;
	box-shadow: 1px 3px 10px rgba(200, 200, 200, 0.9);
`;
