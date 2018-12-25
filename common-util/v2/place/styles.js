import styled from 'styled-components';
import Popover from 'react-popover';

export const PlaceText = styled.div`
	letter-spacing: 0.27px;
	line-height: 16px;
`;

export const Title = styled.div`
    font-family: GreycliffCF-DemiBold;
    font-size: 12px;
    color: #9B9B9B;
    text-align: center;
	text-transform: uppercase;
`;

export const SubTitle = styled.div`
    font-family: GreycliffCF-DemiBold;
    font-size: 12px;
    color: #9B9B9B;
    text-align: center;
	text-transform: uppercase;
`;

export const Desc = styled.div`
    font-family: GreycliffCF-DemiBold;
    font-size: 14px;
    color: #404040;
    text-align: center;
    line-height: 16px;
    margin-top: 5px;
    max-width: 150px;
    min-width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

`;

export const SubDesc = styled.div`
    font-family: GreycliffCF-DemiBold;
    font-size: 14px;
    color: #404040;
    text-align: center;
    line-height: 16px;
`;


export const PopText = styled(Popover)`
	.Popover-body {
		background: #FFFFFF;
		box-shadow: 0 2px 10px 0 rgba(0,0,0,0.32);
        border-radius: 4px;
		font-size: 14px;
		text-align: center;
		line-height: 16px;
		letter-spacing: 1px;
		padding: 8px;
        max-width: 200px;
        font-family: GreycliffCF-Medium;
        color: #4A4A4A;
	}
	.Popover-tipShape {
		fill: #FFFFFF;
	}
`;

export const Icon = styled.img`
  margin-left: 5px;
`;
