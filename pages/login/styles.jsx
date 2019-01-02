import styled from 'styled-components';

export const A = styled.a`
    text-decoration: none;
    color: #fff;
    background-color: red;
    padding: 12px 20px;
    font-family: GreyCliffCF-Medium;
    &:hover{
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.3);
    }
`;

export const H2 = styled.h2`
    margin-bottom: 50px;
    font-family: GreyCliffCF-Bold;
`;

export const Container = styled.div`
    min-height: 100vh;
    background: red;
    display: flex;
    flex-direction: column;
`;

export const LoginBox = styled.div`
    width: 40%;
    height: 200px;
    margin: auto;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    text-align: center;
    padding: 20px;
`;

export const Header = styled.div`
   width: 100%;
   text-align: center;
`;
