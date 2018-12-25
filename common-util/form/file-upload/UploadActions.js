import Promise from 'bluebird';

import { getRequest } from '../../../helpers/api';

const uploadDocument = (file, documentData) => {
	return new Promise(function(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open('PUT', documentData.data.s3_presigned_url);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(documentData.data);
				} else {
					reject(new Error('There as an issue uploading the document'));
				}
			}
		};
		xhr.send(file);
	});
};

const getSignature = params => {
	try {
		let response = getRequest('v1/signed_url', params);
		return response.success ? response.data : response;
	} catch (error) {
		return error;
	}
};

export const UploadActions = {
	uploadDocument,
	getSignature,
};
