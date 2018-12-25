import { Container } from './styles';

const Radio = ({ name, checked, value, label, handler, size, style }) => (
	<Container
		label={`${!!label}`}
		onClick={() => {
			handler ? handler(value, name) : null;
		}}
		size={size || 'md'}
		style={style || {}}>
		<input
			type="radio"
			name={name}
			value={value}
			checked={checked || false}
			onChange={() => {}}
		/>
		<label className={checked ? 'active' : ''}>
			<span className="radio" />
			{label || ''}
		</label>
	</Container>
);

export default Radio;
