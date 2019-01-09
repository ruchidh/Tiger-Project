import axios from 'axios';
import qs from 'querystring';
import toaster from 'reactjs-toastr';
import { start, stop } from 'util/progress';
import { getCookie } from 'util/app-helpers/cookies';

const rootUrl = process.env.API;
const request = axios.create({
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

const { CancelToken } = axios;

request.interceptors.request.use(
	(response) => {
		if (process.browser) {
			start();
		}
		return request;
	},
	(error) => {
		if (process.browser) {
			toaster.error('Please try again, after some time', 'Some issue occurred!', {
				displayDuration: 10000,
			});
		}
		return Promise.reject(error);
	},
);

request.interceptors.response.use(
	(response) => {
		if (process.browser) {
			stop();
		}
		return response;
	},
	(error) => {
		if (process.browser) {
			stop();
			if (error instanceof axios.Cancel) {
				// Request cancelled
			} else {
				const response = error.response || {};
				if (response.status === 401 && !window.location.href.includes('login')) {
					window.location = '/login';
				} else {
					toaster.error('Some error occurred, please try after some time', {
						displayDuration: 5000,
					});
				}
			}
		}
		return Promise.reject(error);
	},
);

export const getParams = (params = {}) => {
	const queryParams = { ...(params || {}) };
	if (!process.browser) {
		return qs.stringify(queryParams);
	}

	queryParams.cookie = getCookie('cogo-sess');
	return qs.stringify(queryParams);
};

const getPath = (path, params, isAbsolute) => {
	let string = path;
	if (string.includes('/seller/') || string.includes('/buyer/')) {
		string = string.replace('/seller/', '/registered/');
		string = string.replace('/buyer/', '/registered/');
	}
	return `${isAbsolute ? '' : rootUrl}${string}?${getParams(params || {})}`;
};

export const getRequest = async (path, params, isAbsolute = false) => request.get(getPath(path, params, isAbsolute));

export const postRequest = async (path, payload, isAbsolute = false) => request.post(getPath(path, null, isAbsolute), payload);

export const putRequest = async (path, payload, isAbsolute = false) => request.put(getPath(path, null, isAbsolute), payload);

export const patchRequest = async (path, payload, isAbsolute = false) => request.patch(getPath(path, null, isAbsolute), payload);

export const deleteRequest = async (path, payload, isAbsolute = false) => request.delete(getPath(path, null, isAbsolute), payload);


export { request, getPath, CancelToken };
