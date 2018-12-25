import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { Error } from './styles';
import { getBlClauses } from '../../store/blClauses/actions';

class BlClauses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: null,
		};
	}

	// name, isLoading, commodities, value, handler, multiple, placeholder, disabled, getCommodities, inputProps
	handleSearch = (q) => {
		const { getBlClauses } = this.props;
		if (q) {
			getBlClauses({
				q,
			});
		}
	};

	handleChange = (v, name) => {
		// if ((v || []).length > 0) {
		const { handler } = this.props;
		this.setState({ errors: null }, () => handler(v, name));
		// }
	};

	render() {
		const {
			name,
			isLoading,
			bl_clauses,
			value,
			multiple,
			placeholder,
			disabled,
			inputProps,
		} = this.props;
		const { errors } = this.state;
		return (
			<Fragment>
				<AsyncTypeahead
					name={name}
					inputProps={inputProps}
					isLoading={isLoading}
					onSearch={this.handleSearch}
					options={bl_clauses}
					align="justify"
					selected={value}
					onChange={v => this.handleChange(v, name)}
					labelKey={option => `${option.text}`}
					useCache={false}
					maxResults={10}
					minLength={0}
					caseSensitive={false}
					multiple={multiple}
					placeholder={placeholder}
					disabled={disabled}
				/>
				{errors ? <Error>{errors}</Error> : null}
			</Fragment>
		);
	}
}

BlClauses.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isLoading: PropTypes.bool,
	getBlClauses: PropTypes.func,
	bl_clauses: PropTypes.arrayOf(PropTypes.object),
	inputProps: PropTypes.object,
};

BlClauses.defaultProps = {
	disabled: false,
	multiple: true,
	bl_clauses: [],
	isLoading: false,
	placeholder: 'type bl clauses or keyword(s)',
};

const mapStateToProps = (state) => {
	const { bl_clauses, errors } = state.blClauses;
	return {
		bl_clauses,
		errors,
	};
};

const mapDispatchToProps = dispatch => ({
	getBlClauses: params => dispatch(getBlClauses(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BlClauses);
