import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  display: inline-block;
  text-align: center;
  width: 15%;
  float:left;

  .menu {
    background: transparent;
    text-align: left;
    border-left: 1px solid #e8e8e8;
    border-right: none;
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 300;
    
    .ant-menu-item-selected{ 
      background: white;
      color: #000000;
      border-left: 3px solid #1890ff;
    }

    .ant-menu-item:after {
      border-right: 0;
    }
  }
`;

export const H3 = styled.h3`
text-align: left;
padding: 0px 20px;
`;
