import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../../../common-util/panel';

import { Value, Title, Content, Image, Section } from './styles';

const Count = ({ title, value, icon, bg, bgIcon, handler, isActive }) => {
	var style = {
		cursor: handler ? ' pointer' : 'auto',
		boxShadow: isActive
			? '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
			: '1px 2px 3px 0 rgba(0,0,0,0.10)',
	};
	return (
		<Panel bg={bg} handler={handler} style={style}>
			<Content>
				<Title>{title}</Title>
				<Value>{value}</Value>
			</Content>
			{icon ? (
				<Section>
					<Image bg={bgIcon}>
						<img src={icon} />
					</Image>
				</Section>
			) : null}
		</Panel>
	);
};

Count.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	icon: PropTypes.string,
	bg: PropTypes.string.isRequired,
	bgIcon: PropTypes.string,
};

export default Count;
