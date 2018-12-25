import React, { Component } from 'react';
import PropTypes from 'prop-types';
import values from 'lodash/values';
import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';

import { UploadActions } from '../form/file-upload/UploadActions';
import CogoPopover from '../v2/popover';
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
	Text,
} from './styles';

import GSTInput from '../gst-input';
import Yes from '../v2/btn/yes';
import No from '../v2/btn/no';
// import Location from '../v2/form/location';
import FileUpload from '../form/file-upload/FileUpload';
// import { Form } from 'antd';
import Checkbox from '../v2/checkbox';

class BranchPopover extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			isGSTRegistered: true,
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
				contact_no: address.address_details.contact_no,
				selectedPin: [
					{
						display_name: address.address_details.line_two,
						postal_code: address.address_details.pin_code,
						country_code: address.address_details.country_code,
					},
				],
				state_name: address.address_details.state,
				line_one: address.address_details.line_one,
				gstinObj: {
					stateCode: address.gst_no && address.gst_no.substring(0, 2),
					pan: address.gst_no && address.gst_no.substring(2, 12),
					entity: address.gst_no && address.gst_no.substring(12, 13),
					alpha: address.gst_no && address.gst_no.substring(13, 14),
					checkSum: address.gst_no && address.gst_no.substring(14, 15),
				},
				vat_no: address.vat_no,
				isGSTRegistered: address.unregistered,
				unregistered_proof: address.unregistered_proof,
			});
		}
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.validateFields((err, vals) => {
			if (!err) {
				this.props.onSubmit(vals);
			}
		});
	};

	validateFields = (cb) => {
		const { isGSTRegistered, unregistered_proof } = this.state;
		const address = pick(this.state, ['name', 'contact_no', 'line_one']);
		address.pin_code =			this.state.selectedPin && this.state.selectedPin.length
			? this.state.selectedPin[0].postal_code
			: '';
		address.state = this.state.state_name;
		const country_code =			this.state.selectedPin && this.state.selectedPin.length
			? this.state.selectedPin[0].country_code
			: '';

		if (country_code === 'IN') {
			address.gst_no = values(this.state.gstinObj).join('');
		} else {
			address.vat_no = this.state.vat_no;
		}
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

		address.unregistered = !isGSTRegistered;
		address.unregistered_proof = unregistered_proof;

		return cb(null, address);
	};

	onChangeField = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	onChangeGSTRegistered = () => {
		this.setState(prevState => ({ isGSTRegistered: !prevState.isGSTRegistered }));
	}

	handleDelete = () => {
		this.setState({
			unregistered_proof: null,
		});
	};

	handleSave = (file) => {
		UploadActions.getSignature({ filename: file.name }).then((res) => {
			return UploadActions.uploadDocument(file, res);
		}).then((response) => {
			this.setState({
				unregistered_proof: response.s3_presigned_url.split('?')[0],
			});
		});
	};

	checkCountry = (v) => {
		this.setState({ country: v });
	};

	render() {
		const { target, isOpen, error = [] } = this.props;
		const { selectedPin, isGSTRegistered } = this.state;

		return (
			<CogoPopover isOpen={isOpen} target={target} preferPlace="left" tipSize={18}>
				<Container>
					<form onSubmit={this.onSubmit}>
						<FormItem>
							<FormLabel>Branch Name</FormLabel>
							<FormControl>
								<Input
									style={{ width: 400 }}
									placeholder="eg Demo Technologies pvt ltd"
									name="name"
									onChange={this.onChangeField}
									value={this.state.name}
									required
								/>
								{this.props.error ? (
									!isEmpty(this.state.name) ? null : (
										<ServerError>Name cannot be blank!</ServerError>
									)
								) : null}
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
						{/* <FormItem>
							<FormLabel>Country</FormLabel>
							<FormControl>
								<ControlContainer width={177}>
									<Location
										types={['country']}
										name="country"
										value={country}
										handler={v => this.checkCountry(v)}
										placeholder="Country"
										bsStyle="grey"
									/>
								</ControlContainer>
							</FormControl>
						</FormItem> */}
						<FormItem>
							<FormLabel>State details</FormLabel>
							<FormControl>
								<ControlContainer width={111}>
									<Pincode
										placeholder="zipcode"
										handler={(val) => {
											this.setState({ selectedPin: val });
										}}
										value={this.state.selectedPin}
									/>
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
							<FormLabel>State</FormLabel>
							<FormControl>
								<Input
									placeholder="eg Maharashtra"
									name="state_name"
									onChange={this.onChangeField}
									value={this.state.state_name}
									required
								/>
							</FormControl>
						</FormItem>
						<FormItem>
							<FormLabel>Address</FormLabel>
							<FormControl>
								<Textarea
									placeholder="eg Demo Technologies pvt ltd"
									name="line_one"
									onChange={this.onChangeField}
									value={this.state.line_one}
									required
								/>
							</FormControl>
						</FormItem>
						{selectedPin ? (
							((selectedPin[0] || {}).country_code || {}) === 'IN' ? (
								<>
									<FormLabel />
									<FormItem>
										<Checkbox handler={this.onChangeGSTRegistered} checked={isGSTRegistered} />
										<Text>GST Registered?</Text>
									</FormItem>
								{(isGSTRegistered ? (
									<>
										<FormItem>
											<FormLabel>GSTIN no.</FormLabel>
											<FormControl>
												<GSTInput
													disabled={this.props.isEdit}
													onChange={(val) => {
														this.setState({ gstinObj: val });
													}}
													value={this.state.gstinObj}
												/>
											</FormControl>
										</FormItem>
									</>
								) : (
									<FormItem>
										<FormLabel>Proof</FormLabel>
										<FormControl>
											<FileUploadWrap>
												{
													<div>
														{/* {this.state.unregistered_proof && (
															<div
																style={{
																	fontFamily: 'GreycliffCF-DemiBold',
																}}>
																Uploaded File:{' '}
																<a href={this.state.unregistered_proof} target="_blank" rel="noopener noreferrer">
																	File
																</a>
															</div>
														)} */}
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
								))}
								</>
							) : (
								<FormItem>
									<FormLabel>VAT No.</FormLabel>
									<FormControl>
										<Input
											name="vat_no"
											disabled={this.props.isEdit}
											onChange={this.onChangeField}
											value={this.state.vat_no}
											placeholder="Please Enter VAT No."
										/>
									</FormControl>
								</FormItem>
							)
						) : null}
							
						{/* this.props.showUpload ? (
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
														<a href={this.state.url} target="_blank" rel="noopener noreferrer">
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
									) : null */}
						{(error || []).map((item, i) => (
							<ServerError key={i}>{item}</ServerError>
						))}
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

BranchPopover.propTypes = {
	onClose: PropTypes.func.isRequired,
	showUpload: PropTypes.bool,
	isEdit: PropTypes.bool,
	target: PropTypes.node,
	error: PropTypes.arrayOf,
	isOpen: PropTypes.bool,
	onSubmit: PropTypes.func.isRequired,
	address: PropTypes.arrayOf.isRequired,
};

BranchPopover.defaultProps = {
	showUpload: false,
	isEdit: false,
	target: undefined,
	error: undefined,
	isOpen: false,
};

export default BranchPopover;
