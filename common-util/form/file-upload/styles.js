import styled, { keyframes } from 'styled-components';
import Btn from '../../../common-util/btn';
import Input from '../../../common-util/form/input';
import BtnLink from '../../../common-util/btn-link';

export const UploadZone = styled.div`
	text-align: center;
	border: 2px dashed #a5aea8;
	margin: 10px 0;
	background: #ffffff;
	border-radius: 6px;
`;

export const ChangeText = styled.span`
	font-family: GreycliffCF-DemiBold;
	font-size: 12px;
	color: #9b9b9b;
	margin-left: 5px;
`;

export const DeleteText = styled.span`
	font-family: GreycliffCF-DemiBold;
	font-size: 12px;
	color: #ff0000;
	text-align: center;
	margin-left: 5px;
`;

export const Actions = styled.div`
	display: flex;
	float: right;
	margin-right: 10px;
	margin-top: 40px;
	margin-bottom: 40px;
`;

export const Cancel = styled(Btn)`
	margin-right: 10px;
	border: none;
	color: #1b8be8;
`;

export const Save = styled(Btn)`
	margin-right: 10px;
`;

export const InputId = styled(Input)`
	width: 30%;
	display: inline-block;
	padding: 8px 8px;
`;

export const ChangeBtn = styled(BtnLink)`
	display: flex;
`;

export const DeleteBtn = styled(BtnLink)`
	display: flex;
	margin-left: 10px;
`;

export const Foot = styled.div`
	float: right;
	margin-top: 10px;
`;

export const DocumentId = styled.div`
	margin-bottom: 10px;
	padding: 0px 10px;
`;

export const Pdf = styled.img`
	width: 34px;
	height: 48px;
	float: left;
	margin: 0px 10px;
`;

export const FileDetails = styled.div``;

export const fadeIn = keyframes`
    99% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
`;

export const State = styled.span`
	float: right;
	font-family: GreycliffCF-DemiBold;
	font-size: 12px;
	color: #67a61d;
	text-align: right;
	visibility: hidden;
	animation: 2s ${fadeIn};
	animation-fill-mode: forwards;
	border: hidden;
`;

export const FileName = styled.span`
	float: left;
	font-family: GreycliffCF-DemiBold;
	font-size: 16px;
	color: #222328;
`;

export const Progress = styled.div`
	width: 100%;
	height: 15px;
	background-color: #ccc;
	clear: both;
	border-radius: 20px;
	float: right;
`;

export const other = keyframes`
    from {} 
    to {width: 100%;}
`;

export const Bar = styled.div`
	border-radius: 20px;
	background: #34c2e3;
	height: 15px;
	width: 0%;
	max-width: 100%;
	float: left;
	-webkit-animation: ${other} 2s 1 forwards;
	-moz-animation: ${other} 2s 1 forwards;
	-ms-animation: ${other} 2s 1 forwards;
	animation: ${other} 2s 1 forwards;
`;

export const InnerBar = styled.div`
	height: 15px;
	width: 100%;
	overflow: hidden;
	-moz-opacity: 0.25;
	-khtml-opacity: 0.25;
	opacity: 0.25;
	-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=25);
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=25);
	filter: alpha(opacity=25);
`;
