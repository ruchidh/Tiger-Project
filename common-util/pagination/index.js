import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Btn } from './styles';

const Pagination = ({
	page,
	total,
	handler = () => {},
	float,
	marginLeft,
	marginBottom,
	marginTop,
}) => {
	const list = [];
	list.push(
		<Btn key="previous" onClick={handler.bind(null, page - 1)} disabled={page === 1}>
			<Image src="/static/app/images/Back-Icon.svg" />
		</Btn>,
	);

	if (total <= 7) {
		for (var i = 0; i < total; i++) {
			list.push(
				<Btn
					className={page === i + 1 ? 'active' : ''}
					onClick={handler.bind(null, i + 1)}
					key={i}>
					{i + 1}
				</Btn>,
			);
		}
	} else {
		for (var j = 0; j < 3; j++) {
			list.push(
				<Btn
					key={j}
					onClick={handler.bind(null, j + 1)}
					className={page === j + 1 ? 'active' : ''}>
					{j + 1}
				</Btn>,
			);
		}
		if (page <= 5) {
			[4, 5].forEach(item =>
				list.push(
					<Btn
						key={item}
						onClick={handler.bind(null, item)}
						className={page === item ? 'active' : ''}>
						{item}
					</Btn>,
				),
			);
		} else {
			list.push(
				<Btn key="dot_1" disabled>
					...
				</Btn>,
			);
			list.push(
				<Btn key={page} onClick={handler.bind(null, page)} className="active">
					{page}
				</Btn>,
			);
		}
		if (page < total - 1) {
			list.push(
				<Btn key="dot_2" disabled>
					...
				</Btn>,
			);
		}
		if (page !== total) {
			list.push(
				<Btn key={total} onClick={handler.bind(null, total)}>
					{total}
				</Btn>,
			);
		}
	}
	list.push(
		<Btn key="next" onClick={handler.bind(null, page + 1)} disabled={page === total}>
			<Image src="/static/app/images/Front-Icon.svg" />
		</Btn>,
	);
	return total && total > 1 ? (
		<Container
			float={float}
			marginLeft={marginLeft}
			marginBottom={marginBottom}
			marginTop={marginTop}>
			{list}
		</Container>
	) : null;
};

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	handler: PropTypes.func.isRequired,
	float: PropTypes.string,
	marginLeft: PropTypes.string,
	marginBottom: PropTypes.string,
	marginTop: PropTypes.string,
};

Pagination.defaultProps = {
	float: 'left',
	marginBottom: 0,
	marginLeft: 0,
	marginTop: 0,
};

export default Pagination;
