import Slider from 'rc-slider';
import moment from 'moment';
import { Container, IconButton, Time } from './styles';

const ActionBar = ({
	player,
	handlePrevious,
	handleNext,
	handlePlay,
	handlePause,
	changeCurrentTime,
	toggleFullScreen,
	toggleVolume,
}) => {
	const { currentTime, duration, paused, muted, isFullScreen } = player;
	const time = moment.duration(currentTime, 'seconds');

	const mins = time.minutes() < 10 ? `0${time.minutes()}` : time.minutes();
	const secs = time.seconds() < 10 ? `0${time.seconds()}` : time.seconds();

	return (
		<Container>
			<IconButton
				className={`previous${handlePrevious ? '' : ' disabled'}`}
				onClick={handlePrevious}
			/>
			<IconButton
				className={paused ? 'play' : 'pause'}
				onClick={paused ? handlePlay : handlePause}
			/>
			<IconButton className={`next${handleNext ? '' : ' disabled'}`} onClick={handleNext} />
			<Time>{`${mins}:${secs}`}</Time>
			<Slider value={currentTime} min={0} max={duration} onChange={changeCurrentTime} />
			<IconButton className={muted ? 'mute' : 'volume'} onClick={toggleVolume} />
			<IconButton
				className={isFullScreen ? 'video-close' : 'video-expand'}
				onClick={toggleFullScreen}
			/>
		</Container>
	);
};

export default ActionBar;
