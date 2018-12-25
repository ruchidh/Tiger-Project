import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { getLineItems } from '../../../store/seller/line-item/actions';

const LineItems = ({
	name,
	isLoading,
	lineItems,
	value,
	handler,
	multiple,
	placeholder,
	disabled,
	getLineItems,
	type,
}) => {
	const handleSearch = q => {
		q
			? getLineItems({
					q: q,
					type: type || '',
			  })
			: null;
	};

	return (
		<AsyncTypeahead
			name={name}
			isLoading={isLoading}
			onSearch={handleSearch}
			options={lineItems}
			align="justify"
			selected={value}
			onChange={v => handler(v, name)}
			align="justify"
			labelKey="name"
			useCache={false}
			maxResults={10}
			minLength={0}
			caseSensitive={false}
			multiple={multiple}
			renderMenuItemChildren={o => o.name}
			placeholder={placeholder}
			disabled={disabled}
		/>
	);
};

LineItems.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool,
};

LineItems.defaultProps = {
	value: [],
	disabled: false,
	isLoading: false,
	placeholder: 'Search line items...',
};

const mapStateToProps = state => {
	const { lineItems, errors } = { ...state.seller }.lineItems;
	return { lineItems, errors };
};

const mapDispatchToProps = dispatch => ({
	getLineItems: params => dispatch(getLineItems(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LineItems);
