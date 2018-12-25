import PropTypes from 'prop-types';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';

const MultiSelect = ({
	name,
	isLoading,
	list,
	handleSearch,
	value,
	handler,
	multiple,
	placeholder,
	disabled,
}) => (
	<AsyncTypeahead
		name={name}
		isLoading={isLoading}
		onSearch={handleSearch}
		options={list || []}
		align="justify"
		selected={value}
		onChange={v => handler(v, name)}
		labelKey={option => option}
		useCache={false}
		maxResults={10}
		minLength={0}
		caseSensitive={false}
		multiple={multiple}
		placeholder={placeholder}
		disabled={disabled}
	/>
);

MultiSelect.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.arrayOf(PropTypes.shape({})),
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	// isIcd: PropTypes.bool,
	isLoading: PropTypes.bool,
	list: PropTypes.arrayOf(PropTypes.any),
	handleSearch: PropTypes.func,
};

MultiSelect.defaultProps = {
	value: [],
	// isIcd: false,
	disabled: false,
	multiple: true,
	list: [],
	isLoading: false,
	placeholder: 'type HS code or keyword(s)',
	handleSearch: () => {},
};

export default MultiSelect;
