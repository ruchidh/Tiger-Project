import styled from 'styled-components';

import { FONT, COLOR } from '../../util/theme';

export const Div = styled.div`
	font-size: 150%;
	font-family: ${FONT.REGULAR};
	color: ${props => (props.color ? props.color : COLOR.BLACK)};

	&.danger {
		color: ${COLOR.DANGER};
	}

	&.success {
		color: ${COLOR.GREEN};
	}

	&.warning {
		color: ${COLOR.WARNING};
	}

	.timeWrap > div {
		display: inline-block;
		width: 40px;
		background-image: linear-gradient(-180deg, #f9f9f9 0%, #f6f6f6 100%);
		border: 0 solid #d6d6d6;
		border-radius: 4px;
		margin-right: 5px;
		padding: 5px 0;
		box-shadow: 0 2px 4px 0 rgba(101, 101, 101, 0.5);
		text-align: center;
		&:last-child {
			margin-right: 0;
		}
	}

	.labels {
		display: block;
		width: 100%;
		height: 15px;
		margin-top: 7px;
		font-family: ${FONT.DEMI_BOLD};
		font-size: 9.6px;
		color: #606060;
		text-align: center;
	}

	.labels > div {
		display: inline-block;
		font-size: 9px;
		width: 40px;
		margin-right: 5px;
		text-align: center;
		vertical-align: top;
		&:last-child {
			margin-right: 0;
		}
	}

	.timerWrap {
		border: 1px solid #eee;
		display: inline-block;
		border-radius: 5px;
		padding: 5px;
	}
`;

export const Plain = styled.div`
	div.time {
		display: inline-block;
		font-family: ${FONT.DEMI_BOLD};
		font-size: 20px;
	}
`;
