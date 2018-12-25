const Form = ({ name, onSubmit, autoComplete, children }) => (
	<form id={name} name={name} onSubmit={onSubmit} autoComplete={autoComplete}>
		{children}
	</form>
);

export default Form;
