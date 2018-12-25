import styled from 'styled-components';

import breakpoint from '../util/breakpoint';

function getColWidth(span) {
	if (!span) {
		return null;
	}
	let width = (span * 100) / 12;
	return `
        width: calc(${width.toFixed(8)}%);
    `;
}

function getColMargin(span) {
	if (!span) {
		return null;
	}
	let width = (span * 100) / 12;
	return `margin-left: calc(${width}%);`;
}

const Col = styled.div`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

    ${({ xs }) => xs && getColWidth(xs)};

    @media (min-width: ${breakpoint.SM}px) {
        ${({ sm }) => sm && getColWidth(sm)};
    }
    @media (min-width: ${breakpoint.MD}px) {
        ${({ md }) => md && getColWidth(md)};
    }
    @media (min-width: ${breakpoint.LG}px) {
        ${({ lg }) => lg && getColWidth(lg)};
    }

    @media (min-width: ${breakpoint.XL}px) {
        ${({ xl }) => xl && getColWidth(xl)};
    }

    /**
     * xsOffset, smOffset, mdOffset, lgOffset, xsOffset
     */
    ${({ xsOffset }) => xsOffset !== null && xsOffset !== undefined && getColMargin(xsOffset)};

    @media (min-width: ${breakpoint.SM}px) {
        ${({ smOffset }) => smOffset !== null && smOffset !== undefined && getColMargin(smOffset)};
    }

    @media (min-width: ${breakpoint.MD}px) {
        ${({ mdOffset }) => mdOffset !== null && mdOffset !== undefined && getColMargin(mdOffset)};
    }

    @media (min-width: ${breakpoint.LG}px) {
        ${({ lgOffset }) => lgOffset !== null && lgOffset !== undefined && getColMargin(lgOffset)};
    }

    @media (min-width: ${breakpoint.XL}px) {
        ${({ xlOffset }) => xlOffset !== null && xlOffset !== undefined && getColMargin(xlOffset)};
    }

    /**
     * xsHiddenUp, xsHiddenDown, smHiddenUp, smHiddenDown, mdHiddenUp, mdHiddenDown, lgHiddenUp, lgHiddenDown, xlHiddenUp, xlHiddenDown
     */
    ${({ xsHiddenUp }) => xsHiddenUp && 'display: none !important;'}
    @media (max-width: ${breakpoint.SM - 1}px) {
        ${({ xsHiddenDown }) => xsHiddenDown && 'display: none !important;'}
    }

    @media (min-width: ${breakpoint.SM}px) {
        ${({ smHiddenUp }) => smHiddenUp && 'display: none !important;'}
    }
    @media (max-width: ${breakpoint.MD - 1}px) {
        ${({ smHiddenDown }) => smHiddenDown && 'display: none !important;'}
    }

    @media (min-width: ${breakpoint.MD}px) {
        ${({ mdHiddenUp }) => mdHiddenUp && 'display: none !important;'}
    }
    @media (max-width: ${breakpoint.LG - 1}px) {
        ${({ mdHiddenDown }) => mdHiddenDown && 'display: none !important;'}
    }

    @media (min-width: ${breakpoint.LG}px) {
        ${({ lgHiddenUp }) => lgHiddenUp && 'display: none !important;'}
    }
    @media (max-width: ${breakpoint.XL - 1}px) {
        ${({ lgHiddenDown }) => lgHiddenDown && 'display: none !important;'}
    }

    @media (min-width: ${breakpoint.XL}px) {
        ${({ xlHiddenUp }) => xlHiddenUp && 'display: none !important;'}
    }
    ${({ xlHiddenDown }) => xlHiddenDown && 'display: none !important;'}
`;

export default Col;
