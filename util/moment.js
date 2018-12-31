import moment from 'moment';

export const date = function (value) {
	if (!value) {
		return null;
	}
	const utcFormat = moment.utc(value).toDate();
	return moment(utcFormat).local().format('DD MMM YYYY');
};

export const difference = function (start, end) {
	if (date) {
		const first = moment(start); const
			second = moment(end);
		const duration = moment.duration(second.diff(first));
		return Math.ceil(duration.asDays());
	}
	return null;
};

export const view = function (value) {
	if (!value) {
		return null;
	}

	const utcFormat = moment.utc(value).toDate(); const
		date = moment(utcFormat).local();

	return {
		day: date.format('DD'),
		month: date.format('MMM'),
	};
};
