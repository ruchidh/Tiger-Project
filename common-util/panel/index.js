/*<Panel header={() => 'MyTitle'}*/
import PropTypes from 'prop-types';

import Header from './elements/index';
import Panel from './styles';

const CogoPanel = ({
	children,
	bg,
	display,
	header,
	style,
	className,
	headerClassName,
	headerStyle,
	headerRight,
}) => {
	const list = [];
	if (header) {
		list.push(
			<Header className={headerClassName} style={headerStyle} key={0} right={headerRight}>
				{header()}
			</Header>,
		);
	}
	list.push(
		<Panel key={1} bg={bg} display={display} style={style} className={className}>
			{children}
		</Panel>,
	);
	return list;
};

CogoPanel.propTypes = {
	header: PropTypes.func,
	headerRight: PropTypes.func,
	bg: PropTypes.string,
	style: PropTypes.object,
	display: PropTypes.string,
	className: PropTypes.string,
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string,
};

CogoPanel.defaultProps = {
	headerStyle: {},
	style: {},
	className: '',
};

export default CogoPanel;
