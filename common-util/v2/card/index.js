import React from 'react';
import PropTypes from 'prop-types';

import { Container, TitleContainer, BodyContainer, FooterContainer } from './styles';

function CogoCard(props) {
	const { title, footer, children, ...rest } = props;
	return (
		<Container {...rest}>
			{!title ? null : <TitleContainer>{title}</TitleContainer>}
			<BodyContainer>{children}</BodyContainer>

			{!footer ? null : <FooterContainer>{footer}</FooterContainer>}
		</Container>
	);
}

CogoCard.propTypes = {
	title: PropTypes.node,
	footer: PropTypes.node,
	subtitle: PropTypes.string,
	children: PropTypes.node,
};

CogoCard.defaultProps = {
	title: null,
	footer: null,
	subtitle: null,
	children: null,
};

export default CogoCard;
