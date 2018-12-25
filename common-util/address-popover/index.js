import React, { Component } from 'react';
import PropTypes from 'prop-types';

import values from 'lodash/values';
import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';
import CogoPopover from '../v2/popover';
import Checkbox from '../v2/checkbox';
import {
	Container,
	FormItem,
	FormLabel,
	FormControl,
	Input,
	ActionContainer,
	Pincode,
	FileUploadWrap,
	Textarea,
	ControlContainer,
	ServerError,
} from './styles';
// import GSTInput from '../gst-input';
import Yes from '../v2/btn/yes';
import No from '../v2/btn/no';
import FileUpload from '../form/file-upload/FileUpload';

class AddressPopover extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}

	componentDidMount() {
		this.setData();
	}

	componentWillReceiveProps(nextProps) {
		const { isOpen } = nextProps;
		if (!isOpen) {
			this.setData();
		}
	}

	setData = () => {
		if (this.props.address) {
			const { address } = this.props;
			this.setState({
				name: address.name,
				contact_no: address.contact_no,
				selectedPin: [{ display_name: address.line_two, postal_code: address.pin_code }],
				line_one: address.line_one,
				gstinObj: {
					stateCode: address.gst_no && address.gst_no.substring(0, 2),
					pan: address.gst_no && address.gst_no.substring(2, 12),
					entity: address.gst_no && address.gst_no.substring(12, 13),
					alpha: address.gst_no && address.gst_no.substring(13, 14),
					checkSum: address.gst_no && address.gst_no.substring(14, 15),
				},
			});
		}
	};

	onSubmit = e => {
		e.preventDefault();
		this.validateFields((err, vals) => {
			if (!err) {
				this.props.onSubmit(vals);
			} else {
				this.setState({ validationError: err });
			}
		});
	};

	validateFields = cb => {
		const address = pick(this.state, ['name', 'contact_no', 'line_one']);
		let error = null;
		if (!(this.state.selectedPin && this.state.selectedPin.length)) {
			error = { selectedPin: 'Pin Code is Required' };
		}
		address.pin_code =
			this.state.selectedPin && this.state.selectedPin.length
				? this.state.selectedPin[0].postal_code
				: null;
		address.line_two =
			this.state.selectedPin && this.state.selectedPin.length
				? this.state.selectedPin[0].display_name
				: null;
		address.gst_no = values(this.state.gstinObj).join('');
		if (this.state.isMailing) {
			if (!address.types) {
				address.types = ['mailing'];
			} else {
				address.types.push('mailing');
			}
		}
		if (this.state.file) {
			address.file = this.state.file;
		}
		return cb(error, address);
	};

	onChangeField = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleDelete = () => {
		this.setState({
			file: null,
		});
	};

	handleSave = file => {
		this.setState({
			file,
		});
	};

	render() {
		const { target, isOpen } = this.props;
		const { validationError, isMailing } = this.state;
		return (
			<CogoPopover isOpen={isOpen} target={target} preferPlace="left" tipSize={18}>
				<Container>
					<form onSubmit={this.onSubmit}>
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									style={{ width: 400 }}
									placeholder="eg Demo Technologies pvt ltd"
									name="name"
									onChange={this.onChangeField}
									value={this.state.name || ''}
									required
								/>
							</FormControl>
						</FormItem>
						<FormItem>
							<FormLabel>Contact Detail</FormLabel>
							<FormControl>
								<ControlContainer width={177}>
									<Input
										type="number"
										min={0}
										placeholder="contact no."
										name="contact_no"
										onChange={this.onChangeField}
										value={this.state.contact_no || ''}
										required
									/>
								</ControlContainer>
							</FormControl>
						</FormItem>
						<FormItem>
							<FormLabel>State details</FormLabel>
							<FormControl>
								<ControlContainer width={111}>
									<Pincode
										placeholder="PINCODE"
										handler={val => {
											this.setState({
												selectedPin: val,
												validationError: null,
											});
										}}
										value={this.state.selectedPin}
									/>
									{validationError && validationError.selectedPin ? (
										<ServerError>{validationError.selectedPin}</ServerError>
									) : null}
									{this.props.error ? (
										!isEmpty(this.state.selectedPin) ? null : (
											<ServerError>
												Pin code does not exist in the system
											</ServerError>
										)
									) : null}
								</ControlContainer>
								<ControlContainer width={284}>
									<Input
										disabled
										placeholder="Locality"
										style={{ fontSize: '0.8em' }}
										value={
											this.state.selectedPin && this.state.selectedPin[0]
												? this.state.selectedPin[0].display_name
												: ''
										}
										required
									/>
								</ControlContainer>
							</FormControl>
						</FormItem>
						<FormItem>
							<FormLabel>Address</FormLabel>
							<FormControl>
								<Textarea
									placeholder="eg Demo Technologies pvt ltd"
									name="line_one"
									onChange={this.onChangeField}
									value={this.state.line_one || ''}
									required
								/>
								{this.props.error ? (
									!isEmpty(this.state.line_one) ? null : (
										<ServerError>Address cannot be blank!</ServerError>
									)
								) : null}
							</FormControl>
						</FormItem>
						{this.props.showMailingCheckbox ? (
							<FormItem style={{ paddingTop: 16 }}>
								<FormLabel />
								<FormControl style={{ height: 48, paddingTop: 8 }}>
									<Checkbox
										handler={() => {
											this.setState(prevState => ({
												isMailing: !prevState.isMailing,
											}));
										}}
										label="This is also your mailing address"
										checked={this.state.isMailing}
									/>
								</FormControl>
							</FormItem>
						) : null}
						{this.props.showUpload ? (
							<FormItem>
								<FormLabel>GST document</FormLabel>
								<FormControl>
									<FileUploadWrap>
										{
											<div>
												{!isEmpty(this.state.url) && (
													<div
														style={{
															fontFamily: 'GreycliffCF-DemiBold',
														}}>
														Uploaded File:{' '}
														<a
															href={this.state.url}
															target="_blank"
															rel="noopener noreferrer">
															{this.state.file_name}
														</a>
													</div>
												)}
												<FileUpload
													handleDelete={this.handleDelete}
													handleSave={this.handleSave}
													text="here to upload"
												/>
											</div>
										}
									</FileUploadWrap>
								</FormControl>
							</FormItem>
						) : null}

						<ActionContainer>
							<Yes style={{ width: 100 }} type="submit" />
							<No
								style={{ width: 100, marginLeft: 11 }}
								type="button"
								onClick={() => {
									this.props.onClose(false);
								}}
							/>
						</ActionContainer>
					</form>
				</Container>
			</CogoPopover>
		);
	}
}

AddressPopover.propTypes = {
	onClose: PropTypes.func.isRequired,
	address: PropTypes.objectOf.isRequired,
	onSubmit: PropTypes.func.isRequired,
	target: PropTypes.node,
	isOpen: PropTypes.bool.isRequired,
	error: PropTypes.arrayOf,
	showMailingCheckbox: PropTypes.bool,
	showUpload: PropTypes.bool,
};

AddressPopover.defaultProps = {
	target: undefined,
	error: undefined,
	showMailingCheckbox: false,
	showUpload: false,
};

export default AddressPopover;
