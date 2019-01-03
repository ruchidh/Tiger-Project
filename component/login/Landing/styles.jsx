import styled from 'styled-components';

export const H2 = styled.h2`
    font-family: GreyCliffCF-Bold;
    margin: 0px;
    padding: 0.75rem 1.25rem;
    background-color: rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.125);
`;

export const Container = styled.div`
    min-height: 100vh;
    background-color: #f4f8fc;
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 35%;
    height: 200px;
    margin: 3em auto;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    text-align: center;
`;

export const Header = styled.div`
   text-align: center;
   background: #ffffff;
   border-bottom: 1px solid rgba(65,77,91,0.1);
   padding: 20px; 
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
`;

export const LoginButton = styled.div`
 padding: 20px 0px;
`;
