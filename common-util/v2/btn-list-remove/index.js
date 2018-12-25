import { Component } from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

class BtnList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	render() {
		return this.getList(this.props.list);
	}

	getList = list => {
		const that = this,
			buttons = [],
			length = this.props.list.length,
			diff = this.state.open ? 0 : length - this.props.max,
			max = diff <= 0 ? length : this.props.max;

		for (var i = 0; i < length; i++) {
			buttons.push(
				<Btn
					key={i}
					type="button"
					onClick={this.props.handler.bind(null, list[i])}
					className={i < max || that.state.open ? 'show' : ''}>
					{list[i]} <span className="btn-list-remove-mark">x</span>
				</Btn>,
			);
		}
		buttons.push(
			<Btn
				key={i}
				type="button"
				className={diff > 0 && !this.state.open ? 'show' : ''}
				onClick={() => this.setState({ open: true })}>{`+${diff} More`}</Btn>,
		);
		return buttons;
	};
}

BtnList.propTypes = {
	max: PropTypes.number.isRequired,
	list: PropTypes.array.isRequired,
	handler: PropTypes.func.isRequired,
};

BtnList.defaultProps = {
	list: [],
	max: 3,
};

export default BtnList;
