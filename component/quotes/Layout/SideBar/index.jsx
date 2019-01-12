import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import { Container } from './styles';

const { SubMenu } = Menu;

class SideBar extends Component {
	state = {
	};


	render() {
		return (
			<Container>
				<h3> NEW ENQUIRY</h3>
				<Menu
					className="menu"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="light"
				>
					<Menu.Item key="1" className="active">
						<Icon type="mail" />
						Reference
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="calendar" />
						Mode
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="calendar" />
                      Mode
					</Menu.Item>
					<Menu.Item key="4">
						<Icon type="calendar" />
						Mode
					</Menu.Item>
					<Menu.Item key="5">
						<Icon type="calendar" />
						Mode
					</Menu.Item>
					<Menu.Item key="6">
						<Icon type="calendar" />
						Mode
					</Menu.Item>
				</Menu>
			</Container>
		);
	}
}

export default SideBar;
