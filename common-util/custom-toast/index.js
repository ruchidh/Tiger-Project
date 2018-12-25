import PropTypes from 'prop-types';

import { Backdrop, ContentWrap, Header, Close } from './styles';

const CustomToast = ({
	show,
	position,
	title,
	offset,
	backdropBgColor,
	toastBgColor,
	headerColor,
	headerTextAlign,
	children,
	className,
	handleClose,
}) => {
	return [
		<Backdrop
			backdropBgColor={backdropBgColor}
			key={0}
			style={{ display: show ? 'block' : 'none' }}
			onClick={() => handleClose()}
		/>,
		<ContentWrap
			style={{ display: show ? 'block' : 'none' }}
			position={position}
			offset={offset}
			toastBgColor={toastBgColor}
			className={className}
			key={1}>
			<Header headerColor={headerColor} headerTextAlign={headerTextAlign}>
				{title}
			</Header>
			<Close onClick={() => handleClose()}>
				<img src="/static/app/images/thin-close.svg" />
			</Close>
			<div>{children}</div>
		</ContentWrap>,
	];
};

CustomToast.propTypes = {
	position: PropTypes.oneOf(['top', 'bottom']),
	offset: PropTypes.number,
	backdropBgColor: PropTypes.string,
	toastBgColor: PropTypes.string,
	headerColor: PropTypes.string,
	headerTextAlign: PropTypes.oneOf(['center', 'left', 'right']),
	childerenColor: PropTypes.string,
	handleClose: PropTypes.func,
};

CustomToast.defaultProps = {
	position: 'bottom',
	offset: 0,
	backdropBgColor: 'rgba(246, 246, 246, 0.6)',
	toastBgColor: '#FFFFFF',
	headerColor: '#1B8BE8',
	headerTextAlign: 'center',
	childerenColor: '#000',
};

export default CustomToast;
