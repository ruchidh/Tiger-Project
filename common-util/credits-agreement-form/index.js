import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, CheckBox } from './styles';

import { profileActions } from '../../store/profile/actions';
import * as dashboardActions from '../../store/dashboard/actions';

import Btn from '../btn';
import Row from '../row';
import Col from '../col';
import Modal from '../modal';

class AgreementModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: false,
		};
	}

	componentDidMount() {
		if (this.props.displayActions) {
			this.props.getCreditAgreementForm();
		} else {
			this.props.getDashboardCreditsTnC();
		}
	}

	handleCheckbox = e => {
		var value = e.target.checked;
		this.setState({
			isChecked: value,
		});
	};

	renderAgreementForm = () => {
		return (
			<Modal show={this.props.show} onHide={this.props.onHide} greyModelEnabled={true}>
				<Modal.Header style={{ color: '#202020' }} greyModelEnabled={true}>
					{this.props.displayActions
						? 'CREDIT AGREEMENT FORM'
						: 'CREDIT ALLOTMENT - TERMS AND CONDITIONS'}
				</Modal.Header>
				<Modal.Body>
					<Container
						dangerouslySetInnerHTML={{
							__html: this.props.displayActions
								? this.props.caf
								: this.props.credits_tnc,
						}}
					/>
					{this.props.displayActions ? (
						<Row style={{ marginTop: '20px' }}>
							<Col md={12}>
								<CheckBox
									type="checkbox"
									name="agreement"
									checked={this.state.isChecked}
									handler={this.handleCheckbox}
								/>
								Agree to terms and conditions
							</Col>
							<Col md={12} style={{ textAlign: 'right' }}>
								<Btn
									type="button"
									bsStyle="default"
									style={{ border: 'border: 2px solid #E4E4E4' }}
									onClick={this.props.onHide}>
									CANCEL
								</Btn>
								<Btn
									type="button"
									bsStyle="green"
									style={{ border: '2px solid #1FD899', marginLeft: '20px' }}
									onClick={this.props.handleAgreement}
									disabled={this.state.isChecked ? false : true}>
									UNLOCK
								</Btn>
							</Col>
						</Row>
					) : null}
				</Modal.Body>
			</Modal>
		);
	};

	render() {
		return <div>{this.renderAgreementForm()}</div>;
	}
}

AgreementModal.propTypes = {
	caf: PropTypes.string,
	show: PropTypes.bool,
	onHide: PropTypes.func,
	handleAgreement: PropTypes.func,
	displayActions: PropTypes.bool,
	// show: PropTypes.bool
};

const mapStateToProps = state => {
	const { errors, caf } = state.profile;
	const { credits_tnc } = state.dashboard;
	return {
		errors,
		caf,
		credits_tnc,
	};
};

const mapDispatchToProps = dispatch => ({
	getCreditAgreementForm: () => dispatch(profileActions.getCreditAgreementForm()),
	getDashboardCreditsTnC: () => dispatch(dashboardActions.getDashboardCreditsTnC()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AgreementModal);
