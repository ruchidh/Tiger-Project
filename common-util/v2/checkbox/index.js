import { Container } from './styles';

const Checkbox = ({ name, checked, label, handler, size, style, theme }) => (
	<Container
    theme={theme}
		label={`${!!label}`}
		onClick={() => {
			handler ? handler(name) : null;
		}}
		size={size || 'md'}
		style={style || {}}>
		<input type="checkbox" name={name} checked={checked || false} onChange={() => {}} />
		<label className={checked ? 'active' : ''}>
			<span className="checkbox" />
			{label || ''}
		</label>
	</Container>
);

export default Checkbox;
