import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Title,
	Subtitle,
	Group,
	Label,
	UploadParent,
	BtnParent,
	InfoButton,
	Input,
	Error,
} from './style';

import Btn from '../btn';
import Col from '../col';
import Row from '../row';
import Form from '../form';

import UploadButton from './UploadButton';

class UploadPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}
	render() {
		const fields = this.props.fields;
		return (
			<Container>
				<Title>{this.props.title}</Title>
				{this.props.showSubtitle ? (
					<Subtitle>
						Please upload files below 5 MB. We support .pdf .xlsx .jpg and .jpeg
						formats.
					</Subtitle>
				) : null}
				<Form name="upload_form" onSubmit={this.onSubmit}>
					{fields.map((item, index) => {
						return (
							<Row>
								<Col
									md={12}
									key={index}
									style={{ marginBottom: '10px', height: '60px' }}>
									<Group>
										<Label>{item.label}</Label>
										<UploadParent>
											{item.type === 'file' ? (
												<UploadButton
													id={item.name}
													name={item.name}
													uniqueKey={item.key}
													updateDocuments={this.updateDocuments}
													required={item.required ? true : false}
													isUploading={this.isUploading}>
													Upload
												</UploadButton>
											) : (
												<Input
													type={item.type}
													name={item.name}
													uniqueKey={item.key}
													value={this.state[item.name] || ''}
													onChange={this.handleChange}
													pattern={item.pattern ? item.pattern : null}
													required={item.required ? true : false}
												/>
											)}
										</UploadParent>
										<InfoButton
											src="/static/app/images/Info-gray.svg"
											title={item.info}
										/>
									</Group>

									{item.error ? (
										<div style={{ margin: 7, marginLeft: 25 }}>
											<Error>{item.error}</Error>
										</div>
									) : null}
								</Col>
							</Row>
						);
					})}
					<BtnParent>
						<Btn
							bsStyle="green"
							type="submit"
							disabled={this.state.isLoading ? true : false}>
							VERIFY NOW
						</Btn>
					</BtnParent>
				</Form>
				{this.props.error ? <Error>{this.props.error}</Error> : null}
			</Container>
		);
	}
	isUploading = isLoading => {
		this.setState({
			isLoading: isLoading,
		});
	};
	onSubmit = e => {
		e.preventDefault();
		this.setState(
			{
				isLoading: undefined,
			},
			this.props.handleSubmit({ ...this.state }),
		);
	};

	handleChange = e => {
		var name = e.target.name;
		var value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	updateDocuments = (name, data) => {
		this.setState({
			[name]: data,
		});
	};
}
UploadPanel.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.object),
	handleSubmit: PropTypes.func.isRequired,
	showSubtitle: PropTypes.bool,
};
UploadPanel.defaultProps = {
	fields: [],
	showSubtitle: true,
};
export default UploadPanel;
