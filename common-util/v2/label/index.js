import styled from 'styled-components';
import { connect } from 'react-redux';
import { COLOR, FONT } from '../../../util/v2/theme';
const Label = styled.label`
	font-size: 90%;
	margin-left: 2px;
	margin-bottom: 5px;
	display: ${({ display }) => display};
	font-family: ${FONT.DEMI_BOLD};
	color: ${(props = {}) =>
		props.for && props.error[props.for] && props.error[props.for].message
			? '#a94442'
			: '#9E9E9E'};
	letter-spacing: 0.2px;
	margin-right: 10px;

	&.error {
		color: ${COLOR.RED};
	}

	&.required:after {
		color: ${COLOR.RED};
		content: '*';
		position: absolute;
		margin-left: 2px;
	}
`;

Label.defaultProps = {
	display: 'block',
};

const mapStateToProps = ({ form: { error } }) => ({
	error,
});

export default connect(
	mapStateToProps,
	null,
)(Label);
