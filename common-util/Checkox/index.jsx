import { Label, Input } from './styles';

const Checkbox = ({ name, children, checked, handler, defaultChecked }) => (
	<Label className={checked ? 'checked' : ''}>
		<Input name={name} checked={checked || false} onClick={() => handler(name)} defaultChecked={defaultChecked || false} />{' '}
		{children}
	</Label>
);

export default Checkbox;
