import PropTypes from 'prop-types';

import { Reset } from './styles';
const FilterReset = ({ active, handler }) => {
	return (
		<Reset onClick={handler}>
			<img src="/static/app/images/seller/refresh.svg" />
		</Reset>
	);
};

FilterReset.propTypes = {
	active: PropTypes.bool,
	handler: PropTypes.func.isRequired,
};

export default FilterReset;
