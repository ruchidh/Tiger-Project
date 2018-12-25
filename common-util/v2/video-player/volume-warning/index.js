import { Container, Icon } from './styles';

const VolumeWarning = ({ player: { muted, userActivity, currentTime, duration } }) => {
	const timeLeft = Math.floor(duration - currentTime);

	return timeLeft > 5 && muted ? (
		<Container className={userActivity ? 'up' : ''}>
			<Icon />
			Please turn on the volume
		</Container>
	) : null;
};

export default VolumeWarning;
