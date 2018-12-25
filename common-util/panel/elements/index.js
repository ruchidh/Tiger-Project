import { Header, Right } from './styles';

const PanelHeader = ({ children, className, style, right }) => {
	return (
		<Header className={className} style={style || {}}>
			{children}
			{right ? <Right>{right()}</Right> : null}
		</Header>
	);
};

export default PanelHeader;
