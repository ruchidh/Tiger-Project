import { Container, Message, Icon } from './styles';

const Tips = ({ type, children }) => {
	var image = null;
	if (type === 'success') {
		image = '/static/app/images/confirm.svg';
	} else if (type === 'warning') {
		image = '/static/app/images/warning.svg';
	}
	return (
		<Container>
			{image && <Icon src={image} />}
			<Message>{children}</Message>
		</Container>
	);
};

export default Tips;
