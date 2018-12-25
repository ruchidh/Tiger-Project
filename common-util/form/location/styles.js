import styled from 'styled-components';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import colors from '../../../util/color';

export const Typeahead = styled(AsyncTypeahead)`
	width: 100%;
	margin: 3px 0px;

	${({ styleType }) =>
		styleType === 'search'
			? `.rbt-input-main {
                    height: 50px;
                    outline: none;
                    border: none;
                    box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);
                    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
                    line-height: 25px;
                    background-color: #f8f8f8;
                    color: #000;
                    border-radius: 3px;
                    padding: 12px 20px;

                    &:focus {
                        border: solid 1px ${colors.COGO_GREEN};
                        box-shadow: 0 1px 3px 0 rgba(75, 175, 79, 0.5);
                        color: black;
                    }
                }
            
                .rbt-menu {
                    border: none;
                    z-index: 50;
                }

                .rbt-input-hint {
                    letter-spacing: 0.1px;
                    margin-top: 1px;
                    width: 100%;    
                }
            
                .dropdown-menu > li > a {
                    white-space: normal;
                }

                .dropdown-menu > li:hover > a {
                    color: #fff;
                    background-color: ${colors.COGO_GREEN};
                }`
			: `.rbt-input-main {
                    height: 54px;
                    outline: none;
                    border: none;
                    box-shadow: 0 2px 4px 0 rgba(226, 226, 226, 0.5);
                }`};
`;

export const Error = styled.div`
	color: #eb826f;
	font-family: GreycliffCF-Medium;
	font-size: 85%;
	letter-spacing: -0.08px;
	text-transform: uppercase;
`;
