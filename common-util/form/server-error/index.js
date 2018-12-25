import PropTypes from 'prop-types';

import { Ul, Li } from './styles';

const Error = ({ errors }) => {
	const elements = (errors || []).map((item, i) => <Li key={i}>{item}</Li>);
	return errors && errors.length > 0 ? <Ul>{elements}</Ul> : null;
};

Error.propTypes = {
	errors: PropTypes.arrayOf(PropTypes.string),
};

Error.defaultProps = {
	errors: [],
};

export default Error;
