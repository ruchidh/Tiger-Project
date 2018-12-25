import { Tooltip } from './styles';

const ErrorPopover = ({ message, position, style }) => (
	<Tooltip position={position} style={style}>
		{message}
	</Tooltip>
);

export default ErrorPopover;
