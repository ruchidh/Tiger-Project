import React from 'react';
import PropTypes from 'prop-types';

import { Li } from './styles';

const Tab = (props) => {
	const {
		isActive, type, onClick, _id, title, className,
	} = props;

	const panelClass = `
		${isActive ? 'active' : ''} 
		${type || ''} 
		${className}
	`;

	return (
		<Li id={`${_id}-link`} className={panelClass} role="presentation">
			{/* eslint-disable */}
			<a
			/* eslint-enable */
				role="tab"
				onClick={(e) => {
					e.preventDefault();
					onClick(_id);
				}}
			>
				{title}
			</a>
		</Li>
	);
};

Tab.propTypes = {
	isActive: PropTypes.bool,
	type: PropTypes.string,
	onClick: PropTypes.func,
	_id: PropTypes.string,
	title: PropTypes.string,
	className: PropTypes.string,
};

Tab.defaultProps = {
	isActive: false,
	type: '',
	onClick: () => {},
	_id: '',
	title: '',
	className: '',
};

export default Tab;
