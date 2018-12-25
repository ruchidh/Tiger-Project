import React from 'react';
import PropTypes from 'prop-types';

import { Li, Ul, Container, Span } from './styles';
class MultiStep extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentState:
				this.props.steps.length - 1 === this.props.compState
					? this.props.compState
					: this.props.compState + 1,
		};
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	componentDidMount() {
		this.setState({
			currentState:
				this.props.steps.length - 1 === this.props.compState
					? this.props.compState
					: this.props.compState + 1,
		});
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			currentState:
				nextProps.steps.length - 1 === nextProps.compState
					? nextProps.compState
					: nextProps.compState + 1,
		});
	}
	handleOnClick(evt) {
		this.setCurrentState(evt.currentTarget.value);
	}
	setCurrentState(value) {
		value <= this.props.compState + 1 ? this.setState({ currentState: value }) : null;
	}
	renderSteps() {
		const width = 100 / this.props.steps.length;
		const list = [];

		this.props.steps.forEach(
			(item, i) =>
				i <= this.props.compState
					? list.push(
							<Li widht={width} onClick={this.handleOnClick} key={i} value={i}>
								<Container>
									<div className="li-complete-mark">&#10003;</div>
									<Span>{this.props.steps[i].name}</Span>
								</Container>
							</Li>,
					  )
					: i === this.props.compState + 1
						? list.push(
								<Li widht={width} onClick={this.handleOnClick} key={i} value={i}>
									<Container>
										<div className="li-doing-mark">{i + 1}</div>
										<Span>{this.props.steps[i].name}</Span>
									</Container>
								</Li>,
						  )
						: list.push(
								<Li widht={width} onClick={this.handleOnClick} key={i} value={i}>
									<Container>
										<div className="li-todo-mark">{i + 1}</div>
										<Span>{this.props.steps[i].name}</Span>
									</Container>
								</Li>,
						  ),
		);
		return list;
	}
	render() {
		return [
			<Ul key={0}>{this.renderSteps()}</Ul>,
			<div key={1}>{this.props.steps[this.state.currentState].component}</div>,
		];
	}
}
MultiStep.propTypes = {
	steps: PropTypes.array.isRequired,
	compState: PropTypes.number.isRequired,
};
MultiStep.defaultProps = {
	steps: [],
	compState: -1,
};
export default MultiStep;
