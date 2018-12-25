import styled, { keyframes } from 'styled-components';

export const transitionTime = 0.2;

const typeColors = {
	success: '#6EC05F',
	info: '#1271EC',
	loading: '#FFFFFF',
	warn: '#FED953',
	error: '#D60A2E',
};

const openToast = (type = 'top') => keyframes`
    from {
        margin-${type}: -25px;
	    opacity: 0;
    }

    to {
		opacity: 1;
        margin-${type}: 10px;
    }
`;

const closeToast = (type = 'top') => keyframes`
    from {
        margin-${type}: 10px;
		opacity: 1;
    }

    to {
        margin-${type}: -25px;
		opacity: 0;
    }
`;

export const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0px;
	left: 0px;
	margin: 0px auto;
	z-index: 2000;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	pointer-events: none;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;

	&.top-left {
		align-items: flex-start;
		justify-content: flex-start;

		.close-toast {
			opacity: 0;
			animation: ${closeToast('left')} ${transitionTime}s ease-in-out;
		}
	}

	&.top-center {
		align-items: center;
		justify-content: flex-start;

		.close-toast {
			opacity: 0;
			animation: ${closeToast('top')} ${transitionTime}s ease-in-out;
		}
	}

	&.top-right {
		align-items: flex-end;
		justify-content: flex-start;

		.close-toast {
			opacity: 0;
			animation: ${closeToast('right')} ${transitionTime}s ease-in-out;
		}
	}

	&.bottom-left {
		align-items: flex-start;
		justify-content: flex-end;

		.close-toast {
			opacity: 0;
			animation: ${closeToast('left')} ${transitionTime}s ease-in-out;
		}
	}

	&.bottom-center {
		align-items: center;
		justify-content: flex-end;

		.close-toast {
			opacity: 0;
			animation: ${closeToast('bottom')} ${transitionTime}s ease-in-out;
		}
	}

	&.bottom-right {
		align-items: flex-end;
		justify-content: flex-end;

		.close-toast {
			opacity: 0;
			animation: ${closeToast('right')} ${transitionTime}s ease-in-out;
		}
	}
`;

export const Toast = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 20px;
	background-color: #fff;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	border-radius: 4px;
	margin: 10px;
	transition: 0.1s all;
	pointer-events: all;
	cursor: pointer;

	border-left: ${({ type = 'success' }) => `3px solid ${typeColors[type]}`};

	&.top-left {
		animation: ${openToast('left')} ${transitionTime}s ease-in-out;
	}

	&.top-center {
		animation: ${openToast('top')} ${transitionTime}s ease-in-out;
	}

	&.top-right {
		animation: ${openToast('right')} ${transitionTime}s ease-in-out;
	}

	&.bottom-left {
		animation: ${openToast('left')} ${transitionTime}s ease-in-out;
	}

	&.bottom-center {
		animation: ${openToast('bottom')} ${transitionTime}s ease-in-out;
	}

	&.bottom-right {
		animation: ${openToast('right')} ${transitionTime}s ease-in-out;
	}
`;

export const Icon = styled.img`
	margin-right: 18px;
	margin-left: 0px;
	width: 20px;
	height: 20px;
`;

export const ToastGroup = styled.div``;

export const Heading = styled.div`
	font-family: GreycliffCF-Bold;
	font-size: 115%;
	letter-spacing: 0.05px;
`;

export const Text = styled.div`
	font-size: 105%;
`;
