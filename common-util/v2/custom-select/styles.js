import styled from 'styled-components';

export const SelectWrap = styled.div`
	position: relative;
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		background-color: #fff;
		border: 1px solid #f8f8f8;
		position: absolute;
		width: 100%;
		z-index: 100;
		top: 38px;
		left: 0;
		max-height: 165px;
		overflow: auto;
	}

	li {
		padding: 5px 7px;
		border-bottom: 1px solid #f8f8f8;
	}

	li span {
		padding-right: 7px;
	}

	li span img {
		vertical-align: middle;
	}

	& > div:first-child {
		border: 1px solid #ddd;
		height: 40px;
		border-radius: 5px;
	}

	input[type='text'] {
		height: 34px;
		width: calc(100% - 34px);
		border: none;
		outline: none;
		color: transparent;
		text-shadow: 0 0 0 #000;
		cursor: pointer;
	}

	span.img-icon {
		padding: 5px 7px;
	}

	li:hover {
		background-color: #f6f6f6;
		cursor: pointer;
	}
	&.organisation {
		flex: auto;
		cursor: pointer;
		div {
			height: 100%;
			border: none !important;
			font-family: GreycliffCF-Bold;
			font-size: 16px;
			color: #4A4A4A;
			line-height: 24px;
			padding: 12px;
			display: flex;
		}
		ul {
			font-family: GreycliffCF-Bold;
			font-size: 16px;
			color: #4A4A4A;
			line-height: 24px;
			top: 57px;
		}
		li {
			padding: 8px 19px;
			span {
				padding: 7px;
			}
			height: 40px;
		}
		li:hover {
			background-color: #f6f6f6;
			cursor: pointer;
		}	
	}
`;

export const ShortName = styled.span`
	font-family: GreycliffCF-DemiBold;
	font-size: 14px;
	text-align: center;
	line-height: 24px;
	margin: 0px 8px;
	height: 32px;
	width: 32px;
	padding: 4px 0px;
	line-height: 23px;
	border-radius: 4px;
	color: #FFFFFF;
`;

export const Image = styled.img``;
