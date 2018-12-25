import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { Error } from './styles';
import { getEscalationReasons } from '../../store/v2/shipmentsActions/actions';

class EscalationReasons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: null,
		};
	}

	componentDidMount() {
		const { getEscalationReasons } = this.props;
		getEscalationReasons({});
	}

	handleSearch = (q) => {
		const { getEscalationReasons } = this.props;
		if (q) {
			getEscalationReasons({ q });
		}
	};

	handleChange = (v, name) => {
		const { handler } = this.props;
		this.setState({ errors: null }, () => handler(v, name));
	};

	render() {
		const {
			name,
			isLoading,
			value,
			multiple,
			placeholder,
			disabled,
			inputProps,
			escalation_reasons,
		} = this.props;
		const { errors } = this.state;
		return (
			<Fragment>
				<AsyncTypeahead
					name={name}
					inputProps={inputProps}
					isLoading={isLoading}
					onSearch={this.handleSearch}
					options={escalation_reasons}
					align="justify"
					selected={value}
					onChange={v => this.handleChange(v, name)}
					labelKey={option => `${option.reason}`}
					useCache={false}
					maxResults={10}
					minLength={0}
					caseSensitive={false}
					multiple={multiple}
					placeholder={placeholder}
					disabled={disabled}
				/>
				{errors ? <Error>{errors}</Error> : null}
			</Fragment>
		);
	}
}

EscalationReasons.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isLoading: PropTypes.bool,
	getEscalationReasons: PropTypes.func.isRequired,
	escalation_reasons: PropTypes.arrayOf(PropTypes.object),
	inputProps: PropTypes.object,
};

EscalationReasons.defaultProps = {
	value: [],
	disabled: false,
	multiple: true,
	escalation_reasons: [],
	isLoading: false,
	placeholder: 'type HS code or keyword(s)',
};

const mapStateToProps = (state) => {
	const { escalation_reasons, errors } = state.v2.shipmentActions;
	return {
		escalation_reasons,
		errors,
	};
};

export default connect(
	mapStateToProps,
	{ getEscalationReasons },
)(EscalationReasons);
