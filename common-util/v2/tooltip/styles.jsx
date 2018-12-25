import styled from 'styled-components';
import Popover from 'react-popover';
import { COLOR } from '../../../util/v2/theme';

export default styled(Popover)`
	.Popover-body {
		background-color: ${props => (props.transparent ? 'transparent' : '#303030')};
		padding: ${props => (props.transparent ? '0px' : '8px 16px')};
		border-radius: 4px;
		box-shadow: ${props => (props.transparent ? 'initial' : '0 0 12px 0px rgba(0, 0, 0, 0.2)')};
		max-width: 400px;
		color: #fff !important;
	}

	.Popover-tipShape {
		fill: ${({ tipShape }) => tipShape || '#303030'};
		/* display: none; */
	}

	&.orange {
		.Popover-body {
			background-color: ${COLOR.ORANGE};
		}

		.Popover-tipShape {
			fill: ${COLOR.ORANGE};
			/* display: none; */
		}
	}

	&.blue {
		.Popover-body {
			background-color: ${COLOR.BLUE};
		}

		.Popover-tipShape {
			fill: ${COLOR.BLUE};
			/* display: none; */
		}
	}

	&.blue {
		.Popover-body {
			background-color: ${COLOR.GREEN};
		}

		.Popover-tipShape {
			fill: ${COLOR.GREEN};
			/* display: none; */
		}
	}

	&.white {
		.Popover-body {
			background-color: ${COLOR.WHITE};
			color: #000 !important;
			font-family: GreycliffCF-DemiBold;
		}

		.Popover-tipShape {
			fill: ${COLOR.WHITE};
			/* display: none; */
		}
	}
`;
