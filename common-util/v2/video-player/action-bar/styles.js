import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0px;
	z-index: 5;
	width: 100%;
	height: 80px;
	display: flex;
	background: #fff;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	padding: 0px 20px;

	& > * {
		margin: 0px 10px;
	}

	.rc-slider-track {
		background-color: #1b8be8;
	}

	.rc-slider-handle {
		border-color: #1b8be8;

		:focus {
			box-shadow: 0 0 0 5px #84c7ff;
		}
	}
`;

export const IconButton = styled.div`
	background-color: transparent;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
	transition: 0.1s all linear;

	&.previous {
		width: 12px;
		height: 12px;
		transform: rotate(180deg);
		background-image: url('/static/app/images/demo/skip.svg');

		&.disabled {
			filter: invert(70%);
		}
	}

	&.next {
		width: 12px;
		height: 12px;
		background-image: url('/static/app/images/demo/skip.svg');

		&.disabled {
			filter: invert(70%);
		}
	}

	&.play {
		width: 22px;
		height: 22px;
		background-image: url('/static/app/images/demo/play.svg');
	}

	&.pause {
		width: 20px;
		height: 20px;
		background-image: url('/static/app/images/demo/pause.svg');
	}

	&.volume {
		width: 18px;
		height: 18px;
		background-image: url('/static/app/images/demo/volume.svg');
	}

	&.mute {
		width: 18px;
		height: 18px;
		background-image: url('/static/app/images/demo/mute.svg');
	}

	&.video-expand {
		width: 18px;
		height: 15px;
		background-image: url('/static/app/images/demo/video-expand.svg');
	}

	&.video-close {
		width: 18px;
		height: 15px;
		background-image: url('/static/app/images/demo/video-collapse.svg');
	}

	&:hover {
		filter: invert(30%);
	}
`;

export const Time = styled.div`
	font-family: GreycliffCF-Bold;
	font-size: 14px;
	color: #404040;
	letter-spacing: -0.02px;
	width: 55px;
`;

export const BarParent = styled.div`
	height: 2px;
	flex: 1;
	position: relative;
`;

export const Bar = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	background-color: #1b8be8;
	width: 60px;
	height: 4px;
	margin-top: -1px;
`;
