export const getCookie = (name, ctx) => {
	try {
		const { req, isServer } = ctx || {};
		const token = isServer
			? (req.headers.cookie || '').match(new RegExp(`${name}=([^;]+)`)) || []
			: document.cookie.match(new RegExp(`${name}=([^;]+)`)) || [];
		return token[1];
	} catch (e) {
		console.log(e);
	}
};

export const setCookie = (name, value, days = 2000) => {
	try {
		let expires = 'expires=0';
		if (days === 0) {
			//
		} else {
			const d = new Date();
			d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
			expires = `expires=${d.toUTCString()}`;
		}
		document.cookie = `${name}=${value};${expires};path=/`;
	} catch (e) {
		console.log(e);
	}
};
