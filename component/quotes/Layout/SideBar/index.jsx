import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import { Container } from './styles';

const { SubMenu } = Menu;

class SideBar extends Component {
	state = {
		mode: 'inline',
		theme: 'light',
	};

	changeMode = (value) => {
		this.setState({
			mode: value ? 'vertical' : 'inline',
		});
	};

	changeTheme = (value) => {
		this.setState({
			theme: value ? 'dark' : 'light',
		});
	};

	render() {
		return (
			<Container>
				<h2> NEW ENQUIRY</h2>
				<Menu
					style={{ background: 'transparent', textAlign: 'left' }}
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode={this.state.mode}
					theme={this.state.theme}
				>
					<Menu.Item key="1">
						<Icon type="mail" />
						Reference
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="calendar" />
						Mode
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="calendar" />

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
