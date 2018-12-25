import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: ${({ size }) => (size === 'sm' ? '30px' : size === 'lg' ? '52px' : '40px')};
`;

export const Button = styled.div`
	background: #d8d8d8;
	border-radius: 0 2px 2px 0;
	cursor: pointer;
	user-select: none;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	transition: 0.1s all linear;
	padding: ${({ size }) =>
		size === 'sm' ? '0px 10px' : size === 'lg' ? '2px 20px' : '2px 13px'};
	font-size: ${({ size }) => (size === 'sm' ? '130%' : size === 'lg' ? '180%' : '155%')};

	&:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	&:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	&:hover {
		background-color: #e2e2e2;
	}
`;

export const Amount = styled.input`
	background: #f8f8f8;
	border-radius: 2px;
	padding: 0px;
	border: none;
	text-align: center;
	min-width: ${({ size }) => (size === 'sm' ? '30px' : size === 'lg' ? '60px' : '40px')};
	max-width: ${({ size }) => (size === 'sm' ? '40px' : size === 'lg' ? '70px' : '50px')};
	font-size: ${({ size }) => (size === 'sm' ? '90%' : size === 'lg' ? '110%' : '100%')};

	&:focus {
		outline: none;
	}
`;
