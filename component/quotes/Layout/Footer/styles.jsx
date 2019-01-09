import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  color: white;
  left: 0px;
  right: 0px;
  z-index: 500;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.15);
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Step = styled.div`
 padding: 16px 25px;
 min-width: 165px;
 border-right: 1px solid #e8e8e8;
 text-align: left;
 &:last-child {
   border: none;
 }
`;

export const Button = styled(AntButton)`
  font-family: GreycliffCF-Regular;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
