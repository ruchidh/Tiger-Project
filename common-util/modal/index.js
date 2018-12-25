import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
	Container, Dialog, Content, Backdrop, Close, Span, Span2, transitionTime,
} from './styles';
import {
	ModalBody, ModalHeader, ModalTitle, ModalDialog, ModalFooter,
} from './elements';

// prettier-ignore
const animatePositions = {
	top:    { x: 0, y: -300 },
	bottom: { x: 0, y: 300 },
	left:   { x: -600, y: 0 },
	right:  { x: 600, y: 0 },
};

class Modal extends Component {
	state = {
		hideStarted: false,
		isServer: true,
		clickPosition: { ...animatePositions[this.props.animateFrom] },
	};

	componentDidMount() {
		this.setState({ isServer: false });
	}

	closeModal = fromBackdrop => {
		this.setState({ hideStarted: true }, () => {
			setTimeout(() => {
				this.setState({ hideStarted: false }, () => {
					if (fromBackdrop && this.props.onBackdropClick) {
						this.props.onBackdropClick();
					} else {
						this.props.onHide();
					}
				});
			}, transitionTime * 1000);
		});
	};

	render() {
		const {
			show,
			size,
			showCloseButton = true,
			animateFrom,
			className,
			style,
			darkModeEnabled,
			children,
			closeSize,
			modalContainerStyle,
			contentStyle,
            onbackclose,
            id
		} = this.props;

		const modeClass = darkModeEnabled ? 'dark' : '';
		const showModalClass = this.state.hideStarted || !show ? '' : 'show-modal';

		const dialogClasses = [modeClass, className, showModalClass].join(' ');
		const { x, y } = this.state.clickPosition;

		return (
			<Container className={showModalClass} style={modalContainerStyle}>
				{onbackclose ? (
					<Backdrop className={showModalClass} />
				) : (
					<Backdrop onClick={() => this.closeModal(true)} className={showModalClass} />
				)}
				<Dialog
					size={size}
					className={dialogClasses}
					style={style}
					animateFrom={animateFrom}
					x={x}
					y={y}>
					{showCloseButton && (
						<Close
							onClick={() => this.closeModal()}
							className={modeClass}
							closeSize={closeSize}>
							{darkModeEnabled ? null : closeSize === 'bg' ? null : 'Close'}
							{closeSize === 'bg' ? (
								<Span2>X</Span2>
							) : (
								<Span className={modeClass}>x</Span>
							)}
						</Close>
					)}
					<Content size={size} id={id} style={contentStyle}>{children}</Content>
				</Dialog>
			</Container>
		);
	}
}

Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Dialog = ModalDialog;
Modal.Footer = ModalFooter;

Modal.propTypes = {
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func,
	size: PropTypes.string,
	animateFrom: PropTypes.string,
	showCloseButton: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.objectOf,
	onBackdropClick: PropTypes.func,
	darkModeEnabled: PropTypes.bool,
	children: PropTypes.any,
	modalContainerStyle: PropTypes.objectOf,
	closeSize: PropTypes.any,
	onbackclose: PropTypes.bool,
	contentStyle: PropTypes.objectOf,
};

Modal.defaultProps = {
	size: 'md',
	showCloseButton: true,
	className: '',
	animateFrom: 'top',
	modalContainerStyle: {},
	contentStyle: {},
	style: {},
};

export default Modal;
