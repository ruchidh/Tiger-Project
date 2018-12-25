import { Component } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import Col from '../../col';
import Row from '../../row';
import BtnLink from '../../btn-link';

import {
	UploadZone,
	ChangeText,
	DeleteText,
	ChangeBtn,
	DeleteBtn,
	Actions,
	DocumentId,
	InputId,
	Progress,
	Bar,
	InnerBar,
	FileName,
	Pdf,
	FileDetails,
	State,
} from './styles';

class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
		};
	}
	render() {
		return this.renderForm();
	}

	renderForm() {
		return this.state.file ? (
			this.renderFileUpload()
		) : (
			<Dropzone
				accept="application/pdf, image/*"
				className="m-b-20"
				onDrop={f => this.setState({ file: f && f.length ? f[0] : null }, this.handleSave)}
				multiple={false}>
				<UploadZone>
					<h4 style={{ padding: '12px' }}>
						Drag &amp; Drop Draft, or{' '}
						<BtnLink onClick={e => e.preventDefault()}> Click </BtnLink>{' '}
						{this.props.text}
					</h4>
				</UploadZone>
			</Dropzone>
		);
	}

	renderFileUpload() {
		const name = this.state.file ? this.state.file.name : '';

		return (
			<div>
				{this.props.label ? (
					<DocumentId>
						<span>{this.props.label} </span>
						<InputId type="text" name="unique_number" onChange={this.handleChange} />
					</DocumentId>
				) : null}
				<UploadZone style={{ height: '100px', border: '0px' }}>
					<Row>
						<Col md={6} style={{ margin: '10px 0px', display: 'flex' }}>
							<Pdf src="/static/app/images/pdf.svg" />
							<div style={{ width: '100%' }}>
								<FileDetails>
									<FileName> {name} </FileName> <State> complete </State>
								</FileDetails>
								<Progress>
									<Bar>
										<InnerBar />
									</Bar>
								</Progress>
							</div>
						</Col>
						<Col md={6}>
							<Actions>
								<ChangeBtn onClick={() => this.setState({ file: null })}>
									<img src="/static/app/images/refresh.svg" />
									<ChangeText> Change this file</ChangeText>
								</ChangeBtn>

								<DeleteBtn
									btnStyle="link"
									onClick={() =>
										this.setState({ file: null }, this.props.handleDelete)
									}>
									<img src="/static/app/images/garbage_1.svg" />
									<DeleteText> Delete this file</DeleteText>
								</DeleteBtn>
							</Actions>
						</Col>
					</Row>
				</UploadZone>
			</div>
		);
	}
	handleChange = e => {
		console.log(e)
		const value = e.target.value || '';
		this.setState({ value1: value });
	};

	handleSave = () => {
		const file = this.state.file;
		this.props.handleSave(file);
	};
}

FileUpload.propTypes = {
	handleSave: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
	label: PropTypes.string,
	file: PropTypes.string,
	text: PropTypes.string,
};

FileUpload.defaultProps = {
	text: 'here to upload file',
};

export default FileUpload;
