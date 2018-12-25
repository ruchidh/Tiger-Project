
import styled from 'styled-components';
import { Typeahead as T } from 'react-bootstrap-typeahead';
import { FONT, COLOR } from '../../../util/v2/theme';
import ellipsis from '../../../css-util/ellipsis';

export const Typeahead = styled(T)`
    .rbt-input-multi.rbt-input {
        background: ${COLOR.LIGHT_GREY};
        border: 1px solid ${COLOR.SLATY};
        font-family: ${FONT.DEMI_BOLD};
        color: ${COLOR.FONT_BLACK};
        letter-spacing: -0.11px;
        min-height: 48px;
        margin-bottom: 8px;
        padding: 0 4px;
    }

    .rbt-input-wrapper {
        width: 100%;
    }

    .rbt-token-removeable {
        display: inline-block;
        margin: 5px 4px 4px 0;
        border: 1px solid #dddddd;
        border-radius: 4px;
        padding: 0 4px;
        font-family: ${FONT.MEDIUM};
        font-size: 14px;
        color: #000;
        line-height: 15px;
        max-width: 160px;
        ${ellipsis};
    }

    .rbt-token-remove-button {
        outline: none;
        cursor: pointer;
        background: transparent;
        border: none;
    }

    .rbt-input-hint-container {
        display: inline-block;
        padding-top: 8px;
    }
`;

export default { Typeahead };
