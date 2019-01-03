// Supports both forward and backward timers.
// Default backward timer, pass prop "forward" to use as forward timer.
// Expects moment duration object as prop

import { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			duration: props.duration,
			forward: props.forward,
		};
	}

	componentDidMount() {
		const { duration, forward } = this.state;
		if (duration) {
			this.timer = setInterval(() => {
				const newDuration = forward ? duration.add(1, 'seconds') : duration.subtract(1, 'seconds');
				this.setState({ duration: newDuration });
			}, 1000);
		}
	}

	componentWillUnmount() {
		if (this.timer) {
			clearInterval(this.timer);
		}
	}

	render() {
		const { duration } = this.state;
		return duration ? (
			<span>
				{Math.floor(duration.asHours()) + moment.utc(duration.asMilliseconds()).format(':mm:ss')}
			</span>
		) : null;
	}
}

Timer.propTypes = {
	duration: PropTypes.shape({}).isRequired,
	forward: PropTypes.bool,
};

Timer.defaultProps = {
	forward: false,
};

export default Timer;
