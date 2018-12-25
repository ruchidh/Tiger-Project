import styled from 'styled-components';

export const Container = styled.div`
	background: #ffffff;
	box-shadow: ${({ boxShadow }) => (boxShadow || '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)')};
	margin-top: ${({ marginTop }) => (marginTop || '0')};
	margin-bottom: ${({ tabPill }) => (tabPill ? '0px' : '16px')};
	padding: ${({ padding }) => (padding ? padding : '15px')};
	padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom : '25px')};
	border-radius: ${({ tabPill }) => (tabPill ? '0px' : '7px')};
	position: relative;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	border-radius: ${({ tabPill }) => (tabPill ? '0px' : '4px')};
	width: ${({ width }) => (width ? width : 'initial')};
	height: ${({ height }) => (height ? height : 'initial')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'initial')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'initial')};
	flex: ${({ flex }) => (flex ? flex : '1')} !important;
	padding: ${({ heading, card, padding }) =>
		heading ? '25px 30px' : card ? '15px' : padding ? padding : '25px'};
	overflow: ${({ overflow }) => (overflow ? overflow : 'hidden')};
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: ${({ boxShadow }) =>
			boxShadow ? boxShadow : '0 0 33px 0 rgba(0, 0, 0, 0.07)'};
	}

	&.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	box-shadow: 0 2px 4px 0 rgba(175, 175, 175, 0.5);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	h4 {
		font-family: GreycliffCF-DemiBold;
		font-size: 100%;
		color: #9f9f9f;
		letter-spacing: 0.36px;
		text-transform: uppercase;
		margin: 5px 0px;
		padding-bottom: 10px;
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.08);

		h4 {
			color: #404040;
			font-family: GreyCliffCF-Bold;
		}
	}
	&.active {
		border-left: 4px solid #1B8BE8;
	}
`;

export const Group = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
`;

export const Title = styled.h1`
	font-family: GreycliffCF-DemiBold;
	font-size: 100%;
	color: #9f9f9f;
	letter-spacing: 0.36px;
	text-transform: uppercase;
	margin: 5px 0px;
	padding: 0px;
`;

export const CloseButton = styled.div`
	font-family: GreycliffCF-DemiBold;
	font-size: 90%;
	letter-spacing: 0.29px;
	line-height: 14px;
	text-transform: uppercase;
	color: #555;
	padding: 6px 25px;
	position: absolute;
	top: 0;
	right: 0;
	margin: 15px !important;
	background: #eee;
	border-radius: 100px;
	font-size: 110%;
	cursor: pointer;
`;
