import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Button, Avatar } from 'antd';
import axios from 'axios';

import { getSignedUrl } from 'apis/public-apis';

class ControlUploadButton extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		value: PropTypes.arrayOf(PropTypes.shape({})),
		preview: PropTypes.bool,
	};

	static defaultProps = {
		onChange: () => {},
		value: [],
		preview: false,
	};

	onUpload = async (obj) => {
		try {
			const { name, type } = (obj || {}).file || {};
			const signedUrl = await getSignedUrl({ filename: name });
			const formData = new FormData();
			formData.append('file', (obj || {}).file);
			const config = { headers: { 'Content-Type': type } };
			await axios.put(signedUrl, (obj || {}).file, type ? config : undefined);
			(obj || {}).onSuccess({ url: signedUrl.replace(/(\?.*)?/g, '') });
		} catch (err) {
			(obj || {}).onError(err);
		}
	};

	onChange = (info) => {
		const { onChange } = this.props;
		let { fileList } = info;

		if (fileList.length > 1) {
			fileList = fileList.slice(-1);
		}

		fileList = fileList.map((f) => {
			const f2 = f;
			if (f.response) {
				f2.url = f.response.url;
			}
			return f2;
		});

		onChange(fileList);
	};

	render() {
		const { value, preview } = this.props;
		return (
			<>
				{preview ? (
					<div>
						<Avatar
							style={{ height: 100, width: 100, marginBottom: 16 }}
							src={value && value[0] && value[0].url}
							size="large"
						/>
					</div>
				) : null}
				<Upload
					action={() => false}
					customRequest={this.onUpload}
					onChange={this.onChange}
					fileList={value}
				>
					<Button>Upload</Button>
				</Upload>
			</>
		);
	}
}

export default ControlUploadButton;
