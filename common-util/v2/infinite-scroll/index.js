import { Component } from 'react';

class InfiniteScroll extends Component {
	componentDidMount() {
		const { containerID } = this.props;
		const container = document.getElementById(containerID);

		if (container) {
			container.addEventListener('scroll', this.onScroll, false);
		}
	}

	componentWillUnmount() {
		const { containerID } = this.props;
		const container = document.getElementById(containerID);

		if (container) {
			container.removeEventListener('scroll', this.onScroll, false);
		}
	}

	onScroll = () => {
		const { containerID, onScrollEnd } = this.props;
		try {
			if (
				document.getElementById(containerID).scrollTop
					+ document.getElementById(containerID).clientHeight
				== document.getElementById(containerID).scrollHeight
			) {
				onScrollEnd();
			}
		} catch (e) {
			console.log(e, 'e');
		}
	};

	render() {
		const { children } = this.props;
		return children;
	}
}

export default InfiniteScroll;
