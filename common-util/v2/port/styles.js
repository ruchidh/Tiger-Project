import styled, { css } from 'styled-components';

import ellipsis from '../../../css-util/ellipsis';
import { FONT, COLOR } from '../../../util/v2/theme';

export const Pairs = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: ${({ size }) => (size === 'lg' ? 'flex' : '')};
	margin-top: ${({ size }) => (size === 'lg' ? '10px' : '')};
`;

export const Item = styled.li`
	min-width: ${({ size }) => (size === 'lg' ? '20%' : '100%')};
	max-width: ${({ size }) => (size === 'lg' ? '40%' : '100%')};
	height: ${({ size }) => (size === 'lg' ? '18px' : '')};
	padding-left: 22px;
	font-family: ${FONT.Medium};
	font-size: 14px;
	letter-spacing: -0.11px;
	line-height: 16px;
	position: relative;

	background-image: url(/static/app/images/v2/${({ type }) =>
			(type === 'origin' || type === 'icd_origin')? 'origin-marker.svg' : 'destination-marker.svg'});
	background-size: ${({ type }) => (type === 'origin' ? 13 : 12)}px;
	background-position: center left;
	background-repeat: no-repeat;

	span {
		${ellipsis} width: 100%;
		display: inline-block;
	}

	${({ type }) => (type === 'origin' ? 'margin-bottom: 14px;' : '')} ${({ type, size, withLabel }) =>
		(type === 'origin' || type === 'icd_origin') && size != 'lg'
			? css`
					&:after {
						content: '';
						position: absolute;
						border-left: 1px dashed ${COLOR.BLUE};
						left: 6px;
						top: ${withLabel && type === 'icd_origin' ? 23 : 16}px;
						height: ${(withLabel && type === 'icd_origin') ? 44 : (withLabel ? 42 : 20)}px;
					}
			  `
			: ''};
`;

export const Image = styled.li`
	background-image: url(/static/app/images/arrow.svg);
	width: 20%;
	background-repeat: no-repeat;
	background-position-x: 40%;
	background-position-y: 6px;
`;

export const Label = styled.div`
	font-family: ${FONT.BOLD};
	padding-left: 22px;					
`;

export const LabelICD = styled.div`
	font-family: ${FONT.BOLD};
`;
