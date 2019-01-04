import styled from 'styled-components';

export const Panel = styled.div`
   width: 40%;
   margin: 3em auto;
   background: #ffffff;
   font-family: GreyCliffCF-DemiBold;
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.5;
   color: #212529;
   padding: 32px;
`;

export const Info = styled.a`
   text-decoration: none;
   &:hover {
       text-decoration: underline;
   }
`;

export const H2 = styled.h2`
    font-family: GreyCliffCF-Bold;
    margin: 0px;
    padding: 0.75rem 1.25rem;
    background-color: rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.125);
`;

export const Footer = styled.div`
   margin-top: 10px;
   display: flex;
   justify-content: space-between;
`;
