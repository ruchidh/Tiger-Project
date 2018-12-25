import styled from 'styled-components';

export const Chip = styled.div`
	font-family: GreycliffCF-DemiBold;
	font-size: 90%;
	letter-spacing: 0.29px;
	line-height: 14px;
	text-transform: uppercase;
	color: #ffffff;
	background: #eb826f;
	padding: 6px 25px;
	transform: skewX(20deg);
	position: absolute;
	top: 0;
	right: 0;
	margin-right: -5px !important;
	background: ${({ chipBackground }) => (chipBackground ? chipBackground : ' #eb826f')};
	pointer-events: ${({ disabled }) => (disabled === true ? 'none' : ' auto')};
	cursor: ${({ disabled }) => (disabled === false ? 'pointer' : 'auto')};
	opacity: ${({ disabled }) => (disabled === true ? '0.5' : '1')};
`;

export const ChipText = styled.div`
	transform: skewX(-20deg);
`;
