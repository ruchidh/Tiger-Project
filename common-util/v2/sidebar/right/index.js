import { Fragment } from 'react';

import { Backdrop, Container } from './styles';

const Right = ({ show, children, onHide }) => (
	<Fragment>
		<Container className={show ? '' : 'notif-hidden'}>{children}</Container>
		<Backdrop onClick={onHide} className={show ? '' : 'notif-hidden'} />
	</Fragment>
);

export default Right;
