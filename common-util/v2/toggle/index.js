import { Component } from 'react';
import PropTypes from 'prop-types';

import { Switch, Label, Checkbox } from './styles';

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: props.value,
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.value,
		});
	}

	render() {
		const handler = this.props.handler ? this.props.handler : () => {};
		const props = {};
		this.props.name ? (props.name = this.props.name) : null;
		return (
			<Label>
				<Checkbox
					type="checkbox"
					checked={this.state.open}
					{...props}
					onChange={e => {
						handler(e);
						this.setState({ open: !this.state.open });
					}}
				/>
				<Switch className="toggle-slider">
					<img src="/static/app/images/seller/check-mark.svg" />
					<span>x</span>
				</Switch>
			</Label>
		);
	}
}

Toggle.propTypes = {
	value: PropTypes.bool.isRequired,
	handler: PropTypes.func,
	name: PropTypes.string,
};

Toggle.defaultProps = {
	value: false,
};

export default Toggle;
