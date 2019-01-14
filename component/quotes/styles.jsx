import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f7fa;
  padding: 16px 0px;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
font-family: GreyCliffCF-Bold;
font-size: 14px;
letter-spacing: normal;
color: #000000;
margin-bottom: 10px;
`;

export const Body = styled.div`
 max-height: calc(100vh -20px);
 overflow: scroll;
 background: white;
 padding: 16px;
 width: 82%;
 float: right;
 display: inline-block;
 margin: 0px 16px;
`;

export const Section = styled.div`
   .ant-radio-button-wrapper{
     height: 65px;
     line-height: 32px;
   }
`;
