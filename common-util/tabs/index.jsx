import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';

import { Ul, Content, TabPanel } from './styles';

const Tabs = (props) => {
	const children = [];
	const ids = [];
	const {
		children: propChildren, id, activeKey, type, className,
	} = props;
	const list = React.Children.map(propChildren || [], (item, i) => {
		const eventId = `${id}-${item.props.eventKey}`;
		const isActive = activeKey && item.props.eventKey === activeKey ? 'active' : '';
		ids.push(eventId);

		const panelClass = [isActive, type || ''].join(' ');

		children.push(
			<TabPanel key={i} className={panelClass} id={eventId}>
				{item.props.children}
			</TabPanel>,
		);

		return React.cloneElement(item, {
			_id: eventId,
			key: i,
			isActive,
			onClick: (clickId) => {
				const { onSelect } = props;
				let activeElement = null;
				let activeLinkElement = null;
				ids.forEach((elementId) => {
					const element = document.getElementById(elementId);
					const linkElement = document.getElementById(`${elementId}-link`);
					element.classList.remove('active');
					linkElement.classList.remove('active');
					if (elementId === clickId) {
						activeElement = element;
						activeLinkElement = linkElement;
					}
				});
				if (activeElement) {
					activeElement.classList.add('active');
				}
				if (activeLinkElement) {
					activeLinkElement.classList.add('active');
				}
				onSelect(item.props.eventKey);
			},
		});
	});

	if (list.length < 1) {
		return null;
	}

	return (
		<div id={id} className={`m-b-10 ${className}`}>
			<div>
				<Ul className={`${type || ''} tab-list`} role="tablist">
					{list}
				</Ul>
			</div>
			<Content className={type || ''}>{children}</Content>
		</div>
	);
};

Tabs.propTypes = {
	children: PropTypes.node,
	id: PropTypes.string.isRequired,
	activeKey: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	/* eslint-disable */
	onSelect: PropTypes.func,
	/* eslint-enable */
};

Tabs.defaultProps = {
	children: null,
	activeKey: null,
	type: '',
	className: '',
	onSelect: () => {},
};

Tabs.Tab = Tab;

export default Tabs;
