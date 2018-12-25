import PropTypes from 'prop-types';

import { Ul, Item } from './styles';

const Options = ({ locations, onSelect, align, size, labelKey, searchType }) => {
	return (
		<Ul align={align} size={size}>
			{locations && locations.length ? (
				locations.map((item, i) => {
					return (
						<li
							key={(item._id || {}).$oid || i}
							onClick={() => onSelect(item)}
							className="results">
					        <Item type={searchType} flag={item.type === 'country' && item.flag_icon_url ? item.flag_icon_url : null}>
							{item[labelKey || 'display_name'] ||
								(typeof item === 'string' ? item : '')}
							</Item>	
						</li>
					);
				})
			) : locations === null ? (
				<li className="no-result">Type...</li>
			) : (
				<li className="no-result">No Results Found</li>
			)}
		</Ul>
	);
};

Options.propTypes = {
	locations: PropTypes.arrayOf(PropTypes.object),
	onSelect: PropTypes.func.isRequired,
};

export default Options;
