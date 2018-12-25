import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../../util/color';
import { Container, Title, ValueSection, Value, Unit, Content, Section, Image } from './styles';

const Count = ({ title, count, unit, bgIcon, icon, handler, isActive, colorID }) => {
	var style = {
		cursor: handler ? ' pointer' : 'auto',
		boxShadow: isActive
			? '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
			: '1px 2px 3px 0 rgba(0,0,0,0.10)',
	};
	return (
		<Container
			style={isActive ? style : {}}
			onClick={() => (handler ? handler() : null)}
			backgroundColor={colors[`ANALYTICS_COLOR_${colorID}`]}>
			<Title>{title}</Title>
			<ValueSection>
				<Value>{count || 0}</Value>
				<Unit>{unit}</Unit>
			</ValueSection>
			{/* {
					icon ? <Section>
						<Image bg={bgIcon}>
							<img src={icon} />
						</Image>
					</Section> : null
				} */}
		</Container>
	);
};

Count.propTypes = {
	count: PropTypes.number,
	colorId: PropTypes.number,
	title: PropTypes.string,
	unit: PropTypes.string,
};

export default Count;
