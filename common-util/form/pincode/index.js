import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { getPincodes } from '../../../store/location/actions';

const Pincodes = ({
	name,
	isLoading,
	pincodes,
	value,
	handler,
	multiple,
	placeholder,
	disabled,
	getPincodes,
	...rest
}) => {
	const handleSearch = q => {
		q
			? getPincodes({
					q: q,
			  })
			: '';
	};

	return (
		<AsyncTypeahead
			name={name}
			isLoading={isLoading}
			onSearch={handleSearch}
			options={pincodes}
			align="justify"
			selected={value}
			onChange={v => handler(v, name)}
			labelKey={o => `${o.postal_code}`}
			useCache={false}
			maxResults={10}
			minLength={0}
			caseSensitive={false}
			multiple={multiple}
			renderMenuItemChildren={o => `${o.display_name}`}
			placeholder={placeholder}
			disabled={disabled}
			{...rest}
		/>
	);
};

Pincodes.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isIcd: PropTypes.bool,
	isLoading: PropTypes.bool,
	getPincodes: PropTypes.func,
	pincodes: PropTypes.arrayOf(PropTypes.object),
};

Pincodes.defaultProps = {
	value: [],
	isIcd: false,
	disabled: false,
	multiple: false,
	pincodes: [],
	isLoading: false,
	placeholder: 'Search pincodes...',
};

const mapStateToProps = ({ location: { pincodes } }) => ({
	pincodes,
});

const mapDispatchToProps = dispatch => ({
	getPincodes: params => dispatch(getPincodes(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Pincodes);
