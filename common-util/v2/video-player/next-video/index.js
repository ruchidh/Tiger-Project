import { Component } from 'react';
import Container from './styles';

class NextVideo extends Component {
	componentDidUpdate(prevProps) {
		const { player, handleNext, handleVideoSeen } = this.props;

		if (!prevProps.player.ended && player.ended) {
			setTimeout(() => {
				handleNext();
			}, 1000);
		}

		const prevDiff = prevProps.player.duration - prevProps.player.currentTime <= 10;
		const currentDiff = player.duration - player.currentTime <= 10;

		if (!prevDiff && currentDiff) {
			handleVideoSeen();
		}
	}

	render() {
		const { player, handleNext } = this.props;
		const { currentTime, duration, userActivity } = player;

		const timeLeft = Math.floor(duration - currentTime);

		return currentTime > 0 && handleNext && timeLeft <= 5 ? (
			<Container className={userActivity ? 'up' : ''}>
				{timeLeft === 0
					? 'Playing next video now...'
					: `Showing next video in ${timeLeft}...`}
			</Container>
		) : null;
	}
}

export default NextVideo;
