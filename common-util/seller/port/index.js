import PropTypes from 'prop-types';

import { port as display } from '../../../util/display';

const Port = ({ port, mainPort, type, style }) => {
	const list = [];
	if (!port && !mainPort) {
		return null;
	}
	if (port) {
		list.push(
			<div key={0} style={style}>
				{display(port)}
			</div>,
		);
	}
	if (mainPort) {
		var portType = null;
		if (type === 'origin') {
			portType = 'POL: ';
		} else if (type === 'destination') {
			portType = 'POD: ';
		}
		list.push(
			<div key={1} className="font-DemiBold">
				{portType}
				{display(mainPort)}
			</div>,
		);
	}
	return list;
};

Port.propTypes = {
	port: PropTypes.object,
	mainPort: PropTypes.object,
	type: PropTypes.string,
};

export default Port;
