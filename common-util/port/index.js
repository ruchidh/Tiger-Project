import isEmpty from 'lodash/isEmpty';

import { Container } from './styles';

const Port = ({ data, inverse = false }) => {
	if (isEmpty(data)) {
		return null;
	}
	return inverse ? (
		<Container>
			<div className="port-vertical-code">{data.name}</div>
			<div className="port-vertical-name">{data.port_code}</div>
		</Container>
	) : (
		<Container>
			<div className="port-vertical-code">{data.port_code}</div>
			<div className="port-vertical-name">{data.name}</div>
		</Container>
	);
};

export default Port;
