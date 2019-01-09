import styled from 'styled-components';
import Popover from 'react-popover';

export const PlaceText = styled.div`
	letter-spacing: normal;
	font-size: 14px;
	font-family: GreycliffCF-Regular;
`;

export const Title = styled.div`
	color: #525252;
	text-align: left;
	text-transform: uppercase;
`;

export const SubTitle = styled.div`
	font-size: 12px;
	color: #9b9b9b;
	text-align: left;
	text-transform: uppercase;
`;

export const Desc = styled.div`
	color: #404040;
	text-align: left;
	line-height: 16px;
	margin-top: 5px;
	max-width: 150px;
	min-width: 100px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const SubDesc = styled.div`
	font-size: 12px;
	color: #404040;
	text-align: left;
	line-height: 16px;
`;

export const PopText = styled(Popover)`
	.Popover-body {
		background: #ffffff;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.32);
		border-radius: 4px;
		font-size: 14px;
		text-align: left;
		line-height: 16px;
		letter-spacing: 1px;
		padding: 8px;
		max-width: 200px;
		font-family: GreycliffCF-Medium;
		color: #4a4a4a;
	}
	.Popover-tipShape {
		fill: #ffffff;
	}
`;

export const Icon = styled.img`
	margin-left: 5px;
`;
