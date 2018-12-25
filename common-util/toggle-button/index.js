import { Component } from 'react';
import { Container, LeftSwitch, RightSwitch } from './styles';

class ToggleButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listView: true,
		};
	}

	handleClick(e) {
		this.setState({ listView: !this.state.listView });
	}

	render() {
		return (
			<Container>
				<LeftSwitch style={{ display: 'inline', marginRight: '20px' }}>List</LeftSwitch>
				<label className="switch">
					<input type="checkbox" onClick={e => this.props.handleChange(e)} />
					<span className="slider round" />
				</label>
				<RightSwitch style={{ display: 'inline', marginLeft: '20px' }}>Tab</RightSwitch>
			</Container>
		);
	}
}

export default ToggleButton;
