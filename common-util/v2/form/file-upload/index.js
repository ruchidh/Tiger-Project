import { Fragment, Component } from 'react';
import cogoToast from 'cogo-toast';
import PropTypes from 'prop-types';
import { Container, Label, Input, Span } from './styles';
import { getRequest } from '../../../../helpers/api';

class ImageUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fileName: props.file_name ? props.file_name : null,
		};
	}

	getSignature = async params => {
		try {
			const response = getRequest('v1/signed_url', params);
			return response.success ? response.data : response;
		} catch (error) {
			return error;
		}
	};

	uploadDocument = (file, documentData) => new Promise(((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('PUT', documentData.data.s3_presigned_url);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(documentData.data);
				} else {
					reject(new Error('There as an issue uploading the document'));
				}
			}
		};
		xhr.send(file);
	}));

	handleChange = event => {
		const file = (event.target.files || [])[0];

		if (file) {
			this.getSignature({ filename: file.name })
				.then(response => {
					this.uploadDocument(file, response)
						.then(data => {
							cogoToast.success('File Uploaded Successfully!', {
								hideAfter: 5,
							});
							this.setState({ fileName: file.name }, () => this.props.onUpload(
								(data.s3_presigned_url.split('?') || [])[0],
								file.name,
							));
						})
						.catch(e => cogoToast.error('Some error has orrured!', {
							hideAfter: 5,
						}));
				})
				.catch(e => cogoToast.error('Some error has orrured!', {
					hideAfter: 5,
				}));
		}
	};

	handleDelete = () => {
		this.setState({ fileName: null }, this.props.onDelete);
	};

	render() {
		const { fileName } = this.state;
		const { text, required } = this.props;
		return (
			<Container active={!!fileName}>
				{fileName ? (
					<Fragment>
						<Span style={{ maxWidth: 170, float: 'left', color: '#1b8be8' }}>
							{fileName}
						</Span>
						<Span onClick={this.handleDelete}> x</Span>
					</Fragment>
				) : (
					[
						<Label key={0} htmlFor="image-upload">
							{text}
						</Label>,
						<Input
							key={1}
							id="image-upload"
							type="file"
							name="fileUploader"
							onChange={this.handleChange}
						/>,
					]
				)}
			</Container>
		);
	}
}

ImageUpload.propTypes = {
	onUpload: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	text: PropTypes.string,
	required: PropTypes.bool,
	file_name: PropTypes.string,
};

ImageUpload.defaultProps = {
	text: '',
	required: false,
	file_name: null,
};

export default ImageUpload;
