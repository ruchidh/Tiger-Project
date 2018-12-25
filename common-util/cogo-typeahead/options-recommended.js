import PropTypes from 'prop-types';

import Port from '../v2/port';
import { Ul, Item } from './styles';

const OptionsRecommended = ({ locations, onSelect, align, size, labelKey, recommendedPortPairs }) => {
	const recommended = recommendedPortPairs.length && recommendedPortPairs.map((item, i) => {
		return (
			<li
				key={(item._id || {}).$oid || i}
				onClick={() => onSelect(item, true)}
				className="results"
			>
				<Port
					origin={item.origin_port_detail}
					destination={item.destination_port_detail}
				/>
			</li>
        )});

	return (
		<Ul align={align} size={size}>  
            { recommended || null }
			{ locations && (locations || []).length > 0 && locations.map((item, i) => {
				return (
					<li
						key={(item._id || {}).$oid || i}
						onClick={() => onSelect(item)}
                        className="results"
					> 
                    <Item>
						{item[labelKey || 'display_name'] ||
                                (typeof item === 'string' ? item : '')}
                    </Item>
					</li>
				);
			})
		}
		{
		 locations && locations.length > 0 ? 
				 null
				 :
				 recommended && recommended.length >0 
				 ?
				 null
				 :
				<li className="no-result">No Results Found</li>
			}
		</Ul>
	);
};

OptionsRecommended.propTypes = {
	locations: PropTypes.arrayOf(PropTypes.object),
	recommendedPortPairs: PropTypes.arrayOf(PropTypes.object),
	onSelect: PropTypes.func.isRequired,
};

export default OptionsRecommended;
