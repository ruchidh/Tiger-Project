import { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Input1, Container, ToolTip } from './styles';

class DualSlider extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			value1: this.props.value1,
			value2: this.props.value2,
			min: this.props.min,
			max: this.props.max,
			step: this.props.step,
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			value1: nextProps.value1,
			value2: nextProps.value2,
			diff: nextProps.value2 - nextProps.value1,
			min: nextProps.min,
			max: nextProps.max,
			step: nextProps.step,
		});
	}
	render() {
		const bg1 = ((this.state.value1 - 1) / (this.state.max - this.state.min)) * 100;
		const bg2 = ((this.state.value2 - 1) / (this.state.max - this.state.min)) * 100;
		const leftThumb = ((this.state.value1 - 1) / (this.state.max - this.state.min)) * 100;
		const rightThumb =
			((this.state.max - this.state.value2) / (this.state.max - this.state.min)) * 100;
		return [
			<Container key={0}>
				<div>
					<ToolTip
						style={{
							position: 'absolute',
							top: '18px',
							left: `calc(${leftThumb}% - 40px)`,
						}}>
						{this.props.tooltipValues[this.state.value1 - 1]}
					</ToolTip>
					<Input
						bg1={bg1}
						bg2={bg2}
						type="range"
						name="value1"
						value={this.state.value1 || this.state.min}
						onChange={this.onChange}
						min={this.state.min}
						max={this.state.max}
						step={1}
						disabled={this.props.disabled}
					/>
				</div>
				<div key={2} style={{ height: 10 }}>
					<ToolTip
						style={{
							position: 'absolute',
							top: '18px',
							right: `calc(${rightThumb}% - 40px)`,
						}}>
						{this.props.tooltipValues[this.state.value2 - 1]}
					</ToolTip>
					<Input1
						type="range"
						name="value2"
						value={this.state.value2 || this.state.max}
						onChange={this.onChange}
						min={this.state.min}
						max={this.state.max}
						step={1}
						disabled={this.props.disabled}
					/>
				</div>
			</Container>,
		];
	}
	onChange(e) {
		var value = parseInt(e.target.value);
		var state = this.state || {};
		if (e.target.name === 'value1' && value < this.state.value2) {
			state[e.target.name] = value;
		}
		if (e.target.name === 'value2' && value > this.state.value1) {
			state[e.target.name] = value;
		}
		this.setState(state, this.props.onChange({ value1: state.value1, value2: state.value2 }));
	}
}
DualSlider.propTypes = {
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	value1: PropTypes.number.isRequired,
	value2: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired,
};
DualSlider.defaultProps = {};
export default DualSlider;
