import { Component, Fragment } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import Spinner from '../../../common-util/spinner';
import { UploadActions } from '../../form/file-upload/UploadActions';

import { Button, Input, FileName } from './styles';

class UploadButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	render() {
		return (
			<Fragment>
				<Button htmlFor={this.props.id}>Upload</Button>
				<Input
					type="file"
					uniqueKey={this.props.uniqueKey}
					name={this.props.name}
					id={this.props.id}
					onChange={this.handleChange.bind(this)}
					required={this.props.required}
				/>
				{this.state.isLoading ? (
					<Spinner
						type="small"
						style={{ margin: '0px', marginTop: '8px', marginLeft: '20px' }}
					/>
				) : (
					<FileName>{this.state.fileName ? this.state.fileName : ''}</FileName>
				)}
			</Fragment>
		);
	}

	handleChange(e) {
		const name = e.target.name,
			files = e.target.files || [];
		if (files.length > 0) {
			const value = files[0];
			this.setState(
				{
					fileName: value.name,
				},
				this.handleUpload.bind(this, name, value),
			);
		}
	}

	handleUpload(name, file) {
		const that = this;
		this.setState(
			{
				isLoading: true,
			},
			this.props.isUploading(true),
		);
		if (isEmpty(file)) {
			UploadActions.getSignature({ filename: file.name })
				.then(response => {
					return UploadActions.uploadDocument(file, response);
				})
				.then(response => {
					this.setState({ isLoading: false }, this.props.isUploading(false));
					that.props.updateDocuments(name, {
						url: response.s3_presigned_url.split('?')[0],
						file_name: file.name,
						file_type: this.props.uniqueKey,
					});
				})
				.catch(err => that.props.setError(err.errors, false));
		}
	}
}

UploadButton.propTypes = {
	updateDocumets: PropTypes.func,
	isLoading: PropTypes.func,
};

export default UploadButton;
