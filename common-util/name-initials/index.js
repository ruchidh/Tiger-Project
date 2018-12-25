import { Container } from './styles';

const NameInitials = ({ name = '' }) => {
	const abbr = () => {
		var initials = name.split(' ') || [];
		initials =
			(initials[0] ? initials[0].charAt(0) : '') +
			'' +
			(initials[initials.length - 1] && initials.length > 1
				? initials[initials.length - 1].charAt(0)
				: '');
		return initials;
	};

	return <Container>{abbr()}</Container>;
};

export default NameInitials;
