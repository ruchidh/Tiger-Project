import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';
// import {port} from '../../../util/display';
import { getYards } from '../../../store/yard/actions';
const Yard = ({
	name,
	isLoading,
	yards,
	value,
	handler,
	multiple,
	placeholder,
	disabled,
	getYards,
}) => {
	const handleSearch = q => {
		if (!q || q.length > 25) {
			return;
		} else {
			q
				? getYards({
						q: q,
				  })
				: null;
		}
	};
	return (
		<AsyncTypeahead
			name={name}
			isLoading={isLoading}
			onSearch={handleSearch}
			options={yards}
			align="justify"
			selected={value}
			onChange={v => handler(v, name)}
			align="justify"
			labelKey={data => data.name + ' | ' + data.address}
			useCache={false}
			maxResults={10}
			minLength={0}
			caseSensitive={false}
			multiple={multiple}
			renderMenuItemChildren={data => data.name + ' | ' + data.address}
			placeholder={placeholder}
			disabled={disabled}
		/>
	);
};

Yard.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isLoading: PropTypes.bool,
	getYards: PropTypes.func,
	yards: PropTypes.arrayOf(PropTypes.object),
};

Yard.defaultProps = {
	value: [],
	disabled: false,
	multiple: false,
	yards: [],
	isLoading: false,
	placeholder: 'Search yard...',
};

const mapStateToProps = ({ yard: { isLoading, yards, errors } }) => ({
	yards,
	errors,
	isLoading,
});

const mapDispatchToProps = dispatch => ({
	getYards: params => dispatch(getYards(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Yard);
