import React from 'react';

import { Place, Title, Description } from './styles';

const place = props => (
	<Place>
		{props.title ? (
			<Title light={props.light} medium={props.medium}>
				{props.title}
			</Title>
		) : null}
		{props.description ? (
			<Description>
				{props.description.length > 60
					? props.description.replace(/^(.{40}[^\s]*).*/, '$1') + '...'
					: props.description}
			</Description>
		) : null}
	</Place>
);

export default place;
