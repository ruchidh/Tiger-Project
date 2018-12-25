import PropTypes from 'prop-types';

import { Ul } from './styles';

const Options = ({ name, list, onSelect, align, labelKey, position, size }) => {
	return (
		<Ul align={align} position={position} size={size}>
			{list && list.length ? (
				list.map((item, i) => {
					return (
						<li
							key={'option_' + name + '_' + i}
							onClick={() => onSelect(item)}
							className="results">
							{labelKey ? item[labelKey] : item.name ? item.name : item}
						</li>
					);
				})
			) : (
				<li className="no-result">Select...</li>
			)}
		</Ul>
	);
};

Options.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object),
	onSelect: PropTypes.func.isRequired,
};

export default Options;
