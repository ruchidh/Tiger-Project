import Link from 'next/link';

import Row from '../v2/row';
import Col from '../v2/col';

import {
	CustomGrid, Button, Image, FrontText, InsideText,
} from './styles';

const MESSAGE_404 = 'Do-oh! We can’t seem to find the page you’re looking for.';

export default ({
	title = 'Oops!!!',
	description = MESSAGE_404,
	action = true,
	children,
	url = '/app',
	actionTitle = 'Go to Dashboard',
	className,
}) => (
	<CustomGrid className={className}>
		<Row>
			<Col xs={12} sm={12} md={5}>
				<Image src="/static/app/images/v2/Illustration-error.svg" alt="Sorry!" />
			</Col>
			<Col xs={12} sm={12} md={7}>
				<FrontText>{title}</FrontText>
				<InsideText>{description}</InsideText>
				{children || (action ? (
					<Link href={url} passHref>
						<Button>{actionTitle}</Button>
					</Link>
				) : null)}
			</Col>
		</Row>
	</CustomGrid>
);
