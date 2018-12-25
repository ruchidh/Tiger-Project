import React from 'react';
import PropTypes from 'prop-types';

import { Typeahead } from './styles';


function MultiSelectV2(props) {
	const {
		onChange, value, options, placeholder, ...rest
	} = props;
	return (
		<Typeahead
			{...rest}
			multiple
			selected={value}
			onChange={onChange}
			options={options}
			placeholder={placeholder}
		/>
	);
}

MultiSelectV2.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.arrayOf(PropTypes.shape({})),
	options: PropTypes.arrayOf(PropTypes.shape({})),
	placeholder: PropTypes.string,
};

MultiSelectV2.defaultProps = {
	onChange: () => {},
	value: undefined,
	options: [],
	placeholder: 'Select ...',
};

export default MultiSelectV2;
