import { Loader } from './styles';

const ToFroLoader = ({ color, position, margin }) => (
	<Loader color={color} position={position} margin={margin}>
		<div className="path">
			<span className="shape" />
		</div>
	</Loader>
);

export default ToFroLoader;
