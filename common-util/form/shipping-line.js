import { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { getRequest } from '../../helpers/api';
import { organisation } from '../../util/display';

class ShippingLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			isLoading: false,
		};
	}

	render() {
		const { isLoading, list } = this.state;
		const {
			name,
			value,
			handler,
			onFocus,
			multiple,
			placeholder,
			disabled,
			className,
		} = this.props;
		return (
			<AsyncTypeahead
				name={name}
				isLoading={isLoading}
				onSearch={(q) => {
					q ? this.setState({ isLoading: true, q }, this.getData.bind(this)) : null;
				}}
				options={list}
				align="justify"
				selected={value}
				onChange={v => handler(v, name)}
				onFocus={onFocus}
				align="justify"
				labelKey="short_name"
				useCache={false}
				maxResults={10}
				minLength={0}
				caseSensitive={false}
				multiple={multiple}
				renderMenuItemChildren={organisation}
				placeholder={placeholder}
				disabled={disabled}
				className={className}
			/>
		);
	}

	updateData(response) {
		this.setState({
			isLoading: false,
			list: response.data.information || [],
		});
	}

	getData() {
		getRequest('v1/organizations/shipping_line', {
			q: this.state.q,
			seller_type: 'shipping_line',
			'status[]': [
				'active',
				'inactive',
				'email_verified',
				'shipper_marked',
				'seller_marked',
				'company_verified',
			],
		}).then(this.updateData.bind(this));
	}
}

ShippingLine.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	onFocus: PropTypes.func,
	className: PropTypes.string,
};

ShippingLine.defaultProps = {
	value: [],
	disabled: false,
	multiple: false,
	placeholder: 'Search shipping lines...',
};

export default ShippingLine;
