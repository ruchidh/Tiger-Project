import * as apiCalls from 'helpers/api';

export const API_STATUS = {
	INITIATED: 'INITIATED',
	SUCCESS: 'SUCCESS',
	FAILURE: 'FAILURE',
};

export const apiInitiate = async (type, dispatch, data = {}) => await dispatch({ type, apiStatus: API_STATUS.INITIATED, data: { ...data } });

export const apiSuccess = async (type, dispatch, data = {}) => await dispatch({ type, apiStatus: API_STATUS.SUCCESS, data: { ...data } });

export const apiFailure = async (type, dispatch, data = {}) => await dispatch({ type, apiStatus: API_STATUS.FAILURE, data: { ...data } });

export const apiMeta = (name, state, action) => {
	const requestStatus = { ...(state.requestStatus || {}) };
	const messages = { ...(state.messages || {}) };

	requestStatus[name] = action.apiStatus;
	messages[name] = (action.data.messages || []).join(', ');

	return { requestStatus, messages };
};

export const getMeta = (state, name) => ({
	isLoading:
		state.requestStatus[name] !== API_STATUS.SUCCESS
		&& state.requestStatus[name] !== API_STATUS.FAILURE,
	errors: state.messages[name],
});

export const apiRequest = async (config) => {
	const {
		path, apiType, params, actionType, dispatch, onInitiate, onSuccess, onFailure,
	} = config;

	try {
		await apiInitiate(actionType, dispatch, onInitiate ? onInitiate() : null);
		const response = await apiCalls[`${apiType}Request`](path, params);

		const { success, messages } = response.data;

		if (success) {
			apiSuccess(actionType, dispatch, onSuccess ? onSuccess(response.data, response) : null);
		} else {
			apiFailure(
				actionType,
				dispatch,
				onFailure ? onFailure(messages, response.data, response) : null,
			);
		}
	} catch (error) {
		apiFailure(actionType, dispatch, onFailure([error.toString()]));
	}
};
