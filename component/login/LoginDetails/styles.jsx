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
    padding: 0.75rem 0.25rem;
    background-color: rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.125);
    text-align: center;
`;

export const Footer = styled.div`
   margin-top: 10px;
   display: flex;
   justify-content: space-between;
`;

export const BackIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const BackButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-family: GreycliffCF-Bold;
	font-family: 90%;
	color: #404040;
	letter-spacing: 0.19px;
	text-transform: uppercase;
	width: 100%;
	cursor: pointer;
	transition: 0.1s all;
`;
