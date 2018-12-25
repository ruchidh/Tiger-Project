import { Reset } from './styles';

const FilterReset = ({ handler, style }) => {
	return (
		<Reset onClick={handler} style={style}>
			<img src="/static/app/images/seller/refresh.svg" />
		</Reset>
	);
};

export default FilterReset;
