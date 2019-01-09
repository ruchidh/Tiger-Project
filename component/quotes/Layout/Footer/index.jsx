import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Place from '../../../../common-util/place';
import {
	Container, Steps, Button, Step,
} from './styles';

class Footer extends Component {
	componentDidMount() {
		// do not
	}

	render() {
		return (
			<Container>
				<Steps>
					<Step style={{ width: '15%' }}>
						<Place title="Reference" desc="test2" />
					</Step>
					<Step style={{ width: '35%' }}>
						<Place title="test1" desc="test2" />
					</Step>
					<Step style={{ width: '15%' }}>
						<Place title="LCL" desc="test2" />
					</Step>
					<Step style={{ width: '15%' }}>
						<Place title="Standard" desc="test2" />
					</Step>
					<Step>
						<Button type="primary" size="large">
							Create Quote Enquiry
						</Button>
					</Step>
				</Steps>
			</Container>
		);
	}
}

Footer.propTypes = {
	query: PropTypes.shape({}),
};

Footer.defaultProps = {
	query: null,
};

export default Footer;
