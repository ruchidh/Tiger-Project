import { Component } from 'react';
import PropTypes from 'prop-types';

import { Div, Plain } from './styles';

class Expiry extends Component {
	constructor(props) {
		super(props);
		this.tick = this.tick.bind(this);
		this.expiry = this.expiry.bind(this);
		this.clearInterval = this.clearInterval.bind(this);
		this.state = {
			remaining: props.time,
			theme: props.theme,
		};
	}

	componentDidMount() {
		this.timer = setInterval(this.tick, 1000);
	}

	renderTimer = (theme, duration) => {
		if (theme === 'plain') {
			return this.renderRemainingTimePlain(duration);
		}
		return this.renderRemainingTime(duration);
	}

	render() {
		const state = this.state;
		return this.state.remaining > 0 ? this.renderTimer(state.theme, state.remaining) : null;
	}

	renderRemainingTime(duration) {
		const days = Math.floor(duration / (3600 * 24));
		const hours = Math.floor((duration - days * 3600 * 24) / 3600);
		const minutes = Math.floor((duration - days * 3600 * 24 - hours * 3600) / 60);
		const seconds = duration - days * 3600 * 24 - hours * 3600 - minutes * 60;
		return (
			<Div style={{ whiteSpace: 'nowrap' }}>
				<div className="timerWrap">
					<div className="timeWrap">
						<div>{days}</div>
						<div>{hours}</div>
						<div>{minutes}</div>
						<div>{seconds}</div>
					</div>
					<div className="labels">
						<div>DAYS</div>
						<div>HOURS</div>
						<div>MINS</div>
						<div>SECS</div>
					</div>
				</div>
			</Div>
		);
	}

	renderRemainingTimePlain(duration) {
		const days = Math.floor(duration / (3600 * 24));
		const hours = Math.floor((duration - days * 3600 * 24) / 3600);
		const minutes = Math.floor((duration - days * 3600 * 24 - hours * 3600) / 60);
		const seconds = duration - days * 3600 * 24 - hours * 3600 - minutes * 60;
		return (
			<Plain style={{ whiteSpace: 'nowrap' }}>
				<div className="time">{minutes}</div>
				<div className="time">:</div>
				<div className="time">{seconds}</div>
			</Plain>
		);
	}

	tick() {
		const time = this.state.remaining;
		if (time < 2) {
			this.setState(
				{
					remaining: 0,
				},
				this.expiry,
			);
		} else {
			this.setState({
				remaining: time - 1,
			});
		}
	}

	expiry() {
		this.clearInterval();
		this.props.handler();
	}

	clearInterval() {
		this.timer ? clearInterval(this.timer) : null;
	}
}

Expiry.propTypes = {
	time: PropTypes.number.isRequired,
	theme: PropTypes.string,
};

Expiry.defaultProps = {
	time: 0,
	theme: 'default',
};

export default Expiry;
