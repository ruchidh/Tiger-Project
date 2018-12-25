import { connect } from 'react-redux';

import styled from 'styled-components';

const Label = styled.label`
	margin-left: 2px;
	margin-bottom: 5px;
	display: ${({ display = 'block' }) => display};
	font-size: ${({ fontSize = '90%' }) => fontSize};
	font-family: GreycliffCF-DemiBold;
	color: ${(props = {}) =>
		props.for && props.error[props.for] && props.error[props.for].message
			? '#a94442'
			: '#9E9E9E'};
	letter-spacing: 0.2px;

	&.error {
		color: #a94442;
	}

	&.required:after {
		color: #ea3f38;
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
