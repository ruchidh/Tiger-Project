import styled from 'styled-components';

export const Ul = styled.ul`
	padding-left: 0px;
	margin: 0px;
`;
export const Li = styled.li`
	display: inline-block;
	cursor: pointer;
	width: ${props => (props.widht ? props.widht + '%' : '50%')};
	background: #f5f5f5;
	div.li-complete-mark {
		background: #67a61d;
		width: 25px;
		height: 25px;
		min-width: 25px;
		border-radius: 50%;
		text-align: center;
		color: white;
		margin-left: 15px;
	}
	div.li-doing-mark {
		background: black;
		width: 25px;
		height: 25px;
		min-width: 25px;
		border-radius: 50%;
		text-align: center;
		color: white;
		margin-left: 15px;
	}
	div.li-todo-mark {
		background: black;
		width: 25px;
		height: 25px;
		min-width: 25px;
		border-radius: 50%;
		text-align: center;
		color: white;
		margin-left: 15px;
		opacity: 0.2;
	}
`;
export const Container = styled.div`
	border: 1px solid #e9eaef;
	display: flex;
	height: 50px;
	align-items: center;
`;
export const Span = styled.span`
	font-family: GreycliffCF-Bold;
	color: #000000;
	letter-spacing: 0;
	margin: 15px;
`;
