import React, { Component, Fragment } from 'react';

class WithInfiniteScroll extends Component {
	componentDidMount() {
		document.getElementById(this.props.id).addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		document.getElementById(this.props.id).removeEventListener('scroll', this.onScroll, false);
	}

	onScroll = () => {
		const {
			id, list, nextScroll, onPaginatedSearch,
		} = this.props;
		try {
			if (
				document.getElementById(id).scrollTop + document.getElementById(id).clientHeight == document.getElementById(id).scrollHeight
				&& (list || []).length
				&& nextScroll
			) {
				onPaginatedSearch();
			}
		} catch (e) {
			console.log(e, 'e');
		}
	};

	render() {
		const { children } = this.props;
		return <>{children}</>;
	}
}

export default WithInfiniteScroll;
