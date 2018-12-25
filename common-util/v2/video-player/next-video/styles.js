import styled from 'styled-components';

export default styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	z-index: 1000;
	display: flex;
	align-items: center;
	font-family: GreycliffCF-Regular !important;
	font-size: 15px !important;
	padding: 15px 25px;
	background-color: rgba(30, 30, 30, 0.8);
	border-radius: 4px;
	color: #fff;
	transition: 0.2s all;

	&.up {
		bottom: 95px;
	}
`;
