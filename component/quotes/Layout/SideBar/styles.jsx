import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  color: white;
  z-index: 500;
  text-align: center;
  width: 15%;

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
