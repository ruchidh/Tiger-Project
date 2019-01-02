import styled from 'styled-components';

export const H2 = styled.h2`
    font-family: GreyCliffCF-Bold;
    background: grey;
`;

export const Container = styled.div`
    min-height: 100vh;
    background-color: #f4f8fc;
`;

export const LoginBox = styled.div`
    width: 40%;
    height: 200px;
    margin: 3em auto;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    text-align: center;
    padding: 0px 20px;
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
