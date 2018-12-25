import ReactDOMServer from 'react-dom/server';

import { Container, Row, Group, Toast, ToastGroup, Heading, Text, Icon } from './styles';
import Spinner from '../../spinner';

const getDOMNodeFromReact = reactNode => {
	const htmlString = ReactDOMServer.renderToString(reactNode);
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();

	return div.firstChild;
};

const removeToast = (parentNode, childNode) => {
	childNode.className = [childNode.className, 'close-toast'].join(' ');
	setTimeout(() => parentNode.removeChild(childNode), 200);
};

const createToast = (text, options) => {
	if (!process.browser) {
		return;
	}

	const { type, hideAfter, heading, position = 'top-right' } = options;
	let parentNode = document.getElementById('cogo-toast-container');

	if (!parentNode) {
		const body = document.getElementsByTagName('BODY')[0];
		parentNode = getDOMNodeFromReact(
			<Container id="cogo-toast-container">
				<Row>
					<Group id="cogo-toast-group-top-left" className="top-left" />
					<Group id="cogo-toast-group-top-center" className="top-center" />
					<Group id="cogo-toast-group-top-right" className="top-right" />
				</Row>
				<Row>
					<Group id="cogo-toast-group-bottom-left" className="bottom-left" />
					<Group id="cogo-toast-group-bottom-center" className="bottom-center" />
					<Group id="cogo-toast-group-bottom-right" className="bottom-right" />
				</Row>
			</Container>,
		);
		body.appendChild(parentNode);
	}

	parentNode = document.getElementById(`cogo-toast-group-${position}`);

	const toastNode = getDOMNodeFromReact(
		<Toast className={position} type={type}>
			{type === 'loading' ? (
				<Spinner style={{ margin: 0, marginRight: 15 }} />
			) : (
				<Icon src={`/static/app/images/cogo-toast/${type}.svg`} />
			)}
			<ToastGroup>
				{heading ? <Heading>{heading}</Heading> : null}
				<Text>{text}</Text>
			</ToastGroup>
		</Toast>,
	);

	parentNode.appendChild(toastNode);
	const time = hideAfter && hideAfter > 0 ? hideAfter * 1000 : 2500;

	setTimeout(() => removeToast(parentNode, toastNode), time);
};

const success = (text, options) => createToast(text, { ...options, type: 'success' });
const warn = (text, options) => createToast(text, { ...options, type: 'warn' });
const info = (text, options) => createToast(text, { ...options, type: 'info' });
const loading = (text, options) => createToast(text, { ...options, type: 'loading' });
const error = (text, options) => createToast(text, { ...options, type: 'error' });

export default { success, warn, info, loading, error };
