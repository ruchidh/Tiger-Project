import { Component } from 'react';
import PropTypes from 'prop-types';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import Container from './styles';
import ActionBar from './action-bar';
import VolumeWarning from './volume-warning';
import NextVideo from './next-video';

class VideoPlayer extends Component {
	componentDidUpdate(prevProps) {
		const { src, previewImage } = this.props;

		if (previewImage !== prevProps.previewImage || src !== prevProps.src) {
			this.refs.player.load();
			this.refs.player.play();
		}
	}

	changeCurrentTime = seconds => this.refs.player.seek(seconds);

	handlePlay = () => this.refs.player.play();

	handlePause = () => this.refs.player.pause();

	toggleFullScreen = () => this.refs.player.toggleFullscreen();

	toggleVolume = () => {
		this.refs.player.muted = !this.refs.player.muted;
	};

	render() {
		const {
			src,
			previewImage,
			autoPlay,
			handlePrevious,
			handleNext,
			handleVideoSeen,
		} = this.props;

		return (
			<Container>
				<Player
					ref="player"
					src={src}
					poster={previewImage}
					fluid={false}
					height="100%"
					autoPlay={autoPlay}>
					<BigPlayButton position="center" />
					<ControlBar autoHide>
						<ActionBar
							handlePrevious={handlePrevious}
							handleNext={handleNext}
							handlePlay={this.handlePlay}
							handlePause={this.handlePause}
							changeCurrentTime={this.changeCurrentTime}
							toggleFullScreen={this.toggleFullScreen}
							toggleVolume={this.toggleVolume}
						/>
					</ControlBar>
					<VolumeWarning />
					{handleNext && (
						<NextVideo handleNext={handleNext} handleVideoSeen={handleVideoSeen} />
					)}
				</Player>
			</Container>
		);
	}
}

VideoPlayer.propTypes = {
	src: PropTypes.string.isRequired,
	previewImage: PropTypes.string,
	autoPlay: PropTypes.bool,
	handlePrevious: PropTypes.func,
	handleNext: PropTypes.func,
	handleVideoSeen: PropTypes.func,
};

VideoPlayer.defaultProps = {
	previewImage: '',
	autoPlay: false,
	handlePrevious: undefined,
	handleNext: undefined,
	handleVideoSeen: undefined,
};

export default VideoPlayer;
