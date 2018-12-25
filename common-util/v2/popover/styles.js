import styled from 'styled-components';
import Popover from 'react-popover';

import { COLOR } from '../../../util/v2/theme';

export const PopoverContainer = styled(Popover)`
	.Popover-body {
		background-color: ${props => (props.transparent ? 'transparent' : '#FFFFFF')};
		padding: ${props => (props.transparent ? '0px' : '16px')};
		border-radius: 4px;
		box-shadow: ${props => (props.transparent ? 'initial' : '0 0 12px 0px rgba(0, 0, 0, 0.2)')};
		max-height: 600px;
		overflow: scroll;
	}

	.Popover-tipShape {
		fill: ${({ tipShape }) => (tipShape ? tipShape : 'white')};
		display: none;
	}
`;
