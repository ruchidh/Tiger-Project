import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { Error } from './styles';
import { getCommodities } from '../../store/commodity/actions';

class Commodity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: null,
		};
	}
	// name, isLoading, commodities, value, handler, multiple, placeholder, disabled, getCommodities, inputProps
	handleSearch = q => {
		q
			? this.props.getCommodities({
					q: q,
			  })
			: null;
	};

	handleChange = (v, name) => {
		var { excludeItems } = this.props;
		if ((v || []).length > 0 && (excludeItems || []).length > 0) {
			var selectedHsCode = Number(v[0].hs_code);
			if (excludeItems.indexOf(selectedHsCode) != -1) {
				this.setState({ errors: 'This entry already exists in the list' });
			} else {
				this.setState({ errors: null }, this.props.handler(v, name));
			}
		} else {
			this.setState({ errors: null }, this.props.handler(v, name));
		}
	};

	render() {
		var {
			name,
			isLoading,
			commodities,
			value,
			multiple,
			placeholder,
			disabled,
			inputProps,
		} = this.props;
		return (
			<Fragment>
				<AsyncTypeahead
					name={name}
					inputProps={inputProps}
					isLoading={isLoading}
					onSearch={this.handleSearch}
					options={commodities}
					align="justify"
					selected={value}
					onChange={v => this.handleChange(v, name)}
					align="justify"
					labelKey={option => `${option.hs_code} - ${option.name}`}
					useCache={false}
					maxResults={10}
					minLength={0}
					caseSensitive={false}
					multiple={multiple}
					placeholder={placeholder}
					disabled={disabled}
				/>
				{this.state.errors ? <Error>{this.state.errors}</Error> : null}
			</Fragment>
		);
	}
}

Commodity.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isIcd: PropTypes.bool,
	isLoading: PropTypes.bool,
	getCommodities: PropTypes.func,
	commodities: PropTypes.arrayOf(PropTypes.object),
	inputProps: PropTypes.object,
	excludeItems: PropTypes.arrayOf(PropTypes.string),
};

Commodity.defaultProps = {
	value: [],
	isIcd: false,
	disabled: false,
	multiple: true,
	commodities: [],
	isLoading: false,
	placeholder: 'type HS code or keyword(s)',
	excludeItems: [],
};

const mapStateToProps = state => {
	const { commodities, errors } = state.commodity;
	return {
		commodities,
		errors,
	};
};

const mapDispatchToProps = dispatch => ({
	getCommodities: params => dispatch(getCommodities(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Commodity);
