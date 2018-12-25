import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
	Container,
	Backdrop,
	Modal,
	Row,
	Close,
	Context,
	Title,
	Subtitle,
	transitionTime,
} from './styles';

class ToastModal extends Component {
	state = { isClosing: false };

	backdropClick = () => this.closeModal(true);

	closeModal = fromBackdrop => {
		this.setState({ isClosing: true }, () => {
			setTimeout(() => {
				this.setState({ isClosing: false });
				if (fromBackdrop && this.props.onBackdropClick) {
					this.props.onBackdropClick();
				} else {
					this.props.closeHandler();
				}
			}, transitionTime * 1000);
		});
	};

	render() {
		const {
			showCloseButton,
			className,
			style,
			contextText,
			title,
			subtitle,
			children,
			size,
		} = this.props;
		const hideClass = this.state.isClosing ? 'close-modal' : '';
		const modalClasses = [className, hideClass].join(' ');
		return (
			<Container>
				<Backdrop onClick={this.props.closeHandler} className={hideClass} />
				<Modal className={modalClasses} style={style} size={size}>
					{showCloseButton && (
						<Close type="button" onClick={this.props.closeHandler}>
							<img src="/static/app/images/cancel.svg" />
						</Close>
					)}
					{contextText ? <Context>{contextText}</Context> : null}
					{title ? <Title>{title}</Title> : null}
					{subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
					<Row>{children}</Row>
				</Modal>
			</Container>
		);
	}
}

ToastModal.propTypes = {
	closeHandler: PropTypes.func,
	showCloseButton: PropTypes.bool,
	size: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	onBackdropClick: PropTypes.func,
	children: PropTypes.any,
};

ToastModal.defaultProps = {
	showCloseButton: true,
	className: '',
};

export default ToastModal;
