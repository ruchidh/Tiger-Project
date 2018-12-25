import styled from 'styled-components';
import Text from '../form/input';

export const Container = styled.div``;

export const Title = styled.h2`
	font-family: GreycliffCF-Medium;
	font-size: 130%;
	color: #000000;
	letter-spacing: 0;
	text-transform: uppercase;
`;

export const Subtitle = styled.div`
	font-family: GreycliffCF-Regular;
	font-size: 100%;
	color: #000000;
	letter-spacing: 0;
	margin-bottom: 35px;
`;

export const Row = styled.div`
	width: 100%;
	flex-direction: row;
	margin: 30px 0px;
	display: flex;
	align-items: center;
`;

export const Group = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 40px;
`;

export const Label = styled.div`
	flex: 1;
	font-family: GreycliffCF-Medium;
	font-size: 115%;
	color: #000000;
	letter-spacing: 0.62px;
`;

export const BtnParent = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const UploadParent = styled.div`
	flex: 1;
	display: flex;
`;

export const InfoButton = styled.img`
	cursor: pointer;
`;

export const Input = styled(Text)`
	border: 1px solid #979797;
	border-radius: 6px;
	width: auto;
`;

export const Error = styled.div`
	color: #eb826f;
	font-family: GreycliffCF-Medium;
	font-size: 85%;
	letter-spacing: -0.08px;
	text-transform: uppercase;
`;
