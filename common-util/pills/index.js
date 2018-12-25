import PropTypes from 'prop-types';

import { Container, Pill } from './styles';

const Pills = props => {
	if (props.list.length < 1) {
		return null;
	}

	return (
		<Container
			id={props.id}
			type={props.type}
			tabPill={props.tabPill}
			transparent={props.transparent}
			width={props.width}>
			{props.list.map(item => (
				<Pill
					type={props.type}
					tabPill={props.tabPill}
					past={props.past}
					key={props.id + item.id}
					className={item.id === props.active ? 'active' : ''}
					onClick={() => props.onChange(item.id)}>
					{item.text}
				</Pill>
			))}
		</Container>
	);
};

Pills.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
	active: PropTypes.string.isRequired,
	type: PropTypes.string,
	tabPill: PropTypes.bool,
	past: PropTypes.bool,
	transparent: PropTypes.bool,
	width: PropTypes.string,
};

export default Pills;
