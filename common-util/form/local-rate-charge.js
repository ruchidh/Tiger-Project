import { Component } from 'react';
import PropTypes from 'prop-types';

import AsyncTypeahead from '../cogo-typeahead';
import { getRequest } from '../../helpers/api';

class LocalCharges extends Component {
	state = {
		charges: [],
	};

	getLocalCharge = params => {
		getRequest('v1/rate_charges', params).then(response => {
			if (response.data.success) {
				this.setState({
					charges: response.data.suggestions,
				});
			} else {
				this.setState({
					charges: [],
				});
			}
		});
	};

	handleSearch = q => {
		const { shipmentMode, types } = this.props;
		if (q) {
			this.getLocalCharge({
				q, shipment_modes: shipmentMode, types,
			});
		}
	};

	render() {
		const {
			name,
			size,
			isLoading,
			value,
			handler,
			multiple,
			placeholder,
			disabled,
			bsStyle,
		} = this.props;
		return (
			<AsyncTypeahead
				name={name}
				size={size}
				isLoading={isLoading}
				onSearch={this.handleSearch}
				options={this.state.charges}
				align="justify"
				selected={value}
				onChange={v => handler(v, name)}
				labelKey="name"
				useCache={false}
				maxResults={10}
				minLength={0}
				caseSensitive={false}
				multiple={multiple}
				placeholder={placeholder}
				disabled={disabled}
				bsStyle={bsStyle}
			/>
		);
	}
}

LocalCharges.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.arrayOf,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isLoading: PropTypes.bool,
	bsStyle: PropTypes.string,
	size: PropTypes.string,
	shipmentMode: PropTypes.string,
	types: PropTypes.string,
};

LocalCharges.defaultProps = {
	value: [],
	disabled: false,
	multiple: false,
	isLoading: false,
	placeholder: 'Search Charges...',
	bsStyle: undefined,
	shipmentMode: undefined,
	types: undefined,
};

export default LocalCharges;
