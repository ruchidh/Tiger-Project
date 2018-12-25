import styled from 'styled-components';
import { COLOR } from '../../util/v2/theme';

import CogoInput from '../v2/input';
import CogoPincode from '../form/pincode';

import CogoTextarea from '../v2/form/textarea';

export const ServerError = styled.div`
	color: red;
`;

export const Input = styled(CogoInput)`
	background-color: ${COLOR.LIGHT_GREY};
	border: 1px solid #ebebeb;
	height: 40px;
	width: 100%;

	font-family: GreycliffCF-DemiBold;
	font-size: 14px;
	color: #9b9b9b;
	letter-spacing: -0.11px;
	line-height: 16px;
`;

export const Container = styled.div`
	padding: 16px;
	position: relative;
`;

export const FormItem = styled.div`
	vertical-align: bottom;
	width: 100%;
	position: relative;
	margin-bottom: 24px;

	&::after {
		content: '';
		clear: both;
		display: table;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

export const FormLabel = styled.p`
	width: 138px;
	float: left;
	margin-top: 0;
	margin-bottom: 0;
	padding-top: 8px;

	font-family: GreycliffCF-DemiBold;
	font-size: 16px;
	color: #404040;
	letter-spacing: -0.07px;
	line-height: 24px;
`;

export const FormControl = styled.div`
	width: 403px;
	float: left;
	vertical-align: bottom;

	&::after {
		content: '';
		clear: both;
		display: table;
	}
`;

export const ActionContainer = styled.div`
	padding-left: 138px;
	width: 100%;
`;

export const Pincode = styled(CogoPincode)`
	width: 100%;
	.rbt-input-main {
		height: 40px;
		width: 100%;
		background-color: ${COLOR.LIGHT_GREY};
		border: 1px solid ${COLOR.SLATY};

		font-family: GreycliffCF-DemiBold;
		font-size: 14px;
		color: #9b9b9b;
		letter-spacing: -0.11px;
		line-height: 16px;
	}
	.rbt-menu {
		width: 380px !important;
	}
	.rbt-input-hint {
		display: none;
	}
`;

export const FileUploadWrap = styled.div``;

export const Textarea = styled(CogoTextarea)`
	resize: none;

	font-family: GreycliffCF-DemiBold;
	font-size: 14px;
	color: #9b9b9b;
	letter-spacing: -0.11px;
	line-height: 16px;
`;

export const ControlContainer = styled.div`
	width: ${props => (props.width ? `${props.width}px` : 'auto')};
	float: left;
	margin-left: 8px;

	&:first-child {
		margin-left: 0px;
	}
`;
