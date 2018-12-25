import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { Error } from './styles';
import { getPackages } from '../../store/packages/actions';

class Packages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: null,
		};
	}

	// name, isLoading, commodities, value, handler, multiple, placeholder, disabled, getCommodities, inputProps
	handleSearch = (q) => {
		const { getPackages } = this.props;
		if (q) {
			getPackages({
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
			packages,
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
					options={packages}
					align="justify"
					selected={value}
					onChange={v => this.handleChange(v, name)}
					labelKey={option => `${option.code}-${option.name}`}
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

Packages.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isLoading: PropTypes.bool,
	getPackages: PropTypes.func,
	packages: PropTypes.arrayOf(PropTypes.object),
	inputProps: PropTypes.object,
};

Packages.defaultProps = {
	disabled: false,
	multiple: true,
	packages: [],
	isLoading: false,
	placeholder: 'type packages or keyword(s)',
};

const mapStateToProps = (state) => {
	const { packages, errors } = state.packages;
	return {
		packages,
		errors,
	};
};

const mapDispatchToProps = dispatch => ({
	getPackages: params => dispatch(getPackages(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Packages);
