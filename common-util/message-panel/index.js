import PropTypes from 'prop-types';
import PlainPanel from '../plain-panel';

import { StepPanel, Steps, Description, Cogo } from './styles';

const MessagePanel = ({ message }) => (
	<PlainPanel>
		<StepPanel>
			<Steps>
				<Cogo src="/static/app/images/cogo-logo.svg" alt="cogoport" />
			</Steps>
			<Steps>
				<Description>{message}</Description>
			</Steps>
		</StepPanel>
	</PlainPanel>
);

MessagePanel.propTypes = {
	message: PropTypes.string,
};

export default MessagePanel;
