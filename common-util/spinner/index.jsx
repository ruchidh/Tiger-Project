import PropTypes from 'prop-types';

import { FullWrapper, Spin, Bounce } from './stylesChristmas';

const setSize = (type) => {
	switch (type) {
		case 'small':
			return 12;
		case 'mid':
			return 12;
		case 'large':
			return 12;
		default:
			return 12;
	}
};

const Spinner = ({
	style, type = '', fullWidth,
}) => {
	const spinnerRender = (
		<Spin style={style}>
			<Bounce className={`one ${type}`} size={setSize(type)} />
			<Bounce className={`two ${type}`} size={setSize(type)} />
			<Bounce className={`three ${type}`} size={setSize(type)} />
		</Spin>
	);
	return fullWidth ? <FullWrapper>{spinnerRender}</FullWrapper> : spinnerRender;
};

Spinner.propTypes = {
	type: PropTypes.oneOf(['small', 'mid', 'large']),
	style: PropTypes.shape,
	fullWidth: PropTypes.bool,
};

Spinner.defaultProps = {
	type: 'small', // small, mid or large
	style: {},
	fullWidth: false,
};

export default Spinner;

// REMOVE ABOVE CODE AND REAPPLY BELOW CODE AFTER CHIRISTMAS

// import PropTypes from 'prop-types';

// import { FullWrapper, Spin, Bounce } from './styles';

// const Spinner = ({ size, style, type = '', fullWidth }) => {
// 	const spinnerRender = (
// 		<Spin style={style}>
// 			<Bounce className={`one ${type}`} size={size} />
// 			<Bounce className={`two ${type}`} size={size} />
// 			<Bounce className={`three ${type}`} size={size} />
// 		</Spin>
// 	);
// 	return fullWidth ? <FullWrapper>{spinnerRender}</FullWrapper> : spinnerRender;
// };

// Spinner.propTypes = {
// 	type: PropTypes.oneOf('small', 'mid', 'large'),
// 	style: PropTypes.shape,
//	size: PropTypes.string,
// 	fullWidth: PropTypes.bool,
// };

// Spinner.defaultProps = {
// 	type: 'small', // small, mid or large
// 	size: '12px',
// 	style: {},
// 	fullWidth: false,
// };

// export default Spinner;
