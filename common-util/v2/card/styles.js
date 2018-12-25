import styled from 'styled-components';
import { COLOR } from '../../../util/v2/theme';

export const Container = styled.div`
	position: relative;
	background-color: ${COLOR.WHITE};
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
	border-radius: 4px;
`;

export const TitleContainer = styled.div`
	padding: 16px 32px;
	border-bottom: 1px solid #eaedf3;
`;

export const BodyContainer = styled.div`
	padding: 32px;
`;

export const FooterContainer = styled.div`
	padding: 16px 32px;
	border-top: 1px solid #eaedf3;
`;
