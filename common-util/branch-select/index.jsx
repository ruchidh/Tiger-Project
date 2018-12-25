import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Component } from 'react';
import { Select } from './style';
import { getBranches } from '../../store/v2/address/actions';

class BranchSelect extends Component {
	componentDidMount() {
		const { getBranches: getData } = this.props;
		getData();
	}

	render() {
		const { value, handleSelect, branches } = this.props;
		return (
			<Select
				options={
					branches
          && branches.map(b => ({ name: b.name, value: ((b || {})._id || {}).$oid }))
				}
				value={value}
				onChange={handleSelect}
				placeholder="Select a branch"
				bsStyle="grey"
			/>
		);
	}
}

BranchSelect.propTypes = {
	value: PropTypes.shape({}),
	handleSelect: PropTypes.func,
	branches: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	getBranches: PropTypes.func.isRequired,
};

BranchSelect.defaultProps = {
	value: undefined,
	handleSelect: () => {},
};

const mapStateToProps = state => ({
	branches: (state.v2.addresses || {}).billing || [],
});

const mapDispatchToProps = dispatch => ({
	getBranches: (type, params) => dispatch(getBranches(type, params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BranchSelect);
