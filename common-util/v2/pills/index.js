import Link from 'next/link';
import PropTypes from 'prop-types';

import { Container, Pill } from './styles';

const Pills = ({ active, list, id }) => {
	if (list.length < 1) {
		return null;
	}

	return (
		<Container id={id}>
			{list.map((item, i) => (
				<Link key={i} href={item.url}>
					<Pill className={item.name === active ? 'active' : ''}>{item.name}</Pill>
				</Link>
			))}
		</Container>
	);
};

Pills.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
	active: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Pills;
