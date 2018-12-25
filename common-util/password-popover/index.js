import React, { Component } from 'react';

import CogoPopover from '../v2/popover';
import {
	Container,
	FormItem,
	FormLabel,
	FormControl,
	Input,
	ActionContainer,
	Pincode,
	FileUploadWrap,
	Textarea,
	ControlContainer,
	Error,
} from './styles';
import pick from 'lodash/pick';
import Yes from '../v2/btn/yes';
import No from '../v2/btn/no';
import CheckitPassword from '../../util/checkit/change-password';

class PasswordPopover extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			error: {},
			errorPosition: 'right',
		};
	}

	componentDidMount() {
		if (window.innerWidth <= 622) {
			this.setState({ errorPosition: 'bottom' });
		}
	}

	onSubmit = () => {
		this.validateFields((err, vals) => {
			if (!err) {
				this.props.onSubmit(vals);
			}
		});
	};

	validateFields = cb => {
		const data = pick(this.state, ['old', 'new', 'confirm']);
		CheckitPassword.run(data)
			.then(() => {
				delete data.confirm;
				this.setState({ error: {} });
				return cb(null, data);
			})
			.catch(err => {
				this.setState({ error: err.errors });
			});
	};

	onChangeField = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { target, isOpen, errors } = this.props;
		return (
			<CogoPopover isOpen={isOpen} target={target} preferPlace="left" tipSize={18}>
				<Container>
					<form>
						<FormItem>
							<FormLabel>Old Password</FormLabel>
							<FormControl>
								<Input
									style={{ width: 250 }}
									type="password"
									placeholder="Enter Old Password..."
									name="old"
									bsStyle="grey"
									onChange={this.onChangeField}
									value={this.state.name}
									error={this.state.error}
									errorPosition={this.state.errorPosition}
								/>
							</FormControl>
						</FormItem>
						<FormItem>
							<FormLabel>New Password</FormLabel>
							<FormControl>
								<Input
									style={{ width: 250 }}
									type="password"
									placeholder="Enter New Password..."
									name="new"
									bsStyle="grey"
									onChange={this.onChangeField}
									value={this.state.new_password}
									error={this.state.error}
									errorPosition={this.state.errorPosition}
								/>
							</FormControl>
						</FormItem>
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									style={{ width: 250 }}
									type="password"
									bsStyle="grey"
									placeholder="Repeat New Password"
									name="confirm"
									onChange={this.onChangeField}
									value={this.state.repeat_password}
									error={this.state.error}
									errorPosition={this.state.errorPosition}
								/>
							</FormControl>
						</FormItem>
						{
							errors && errors.length ? errors.map(item => {
								return (
									<Error>{item}</Error>
								);
							}) : null
						}
						<ActionContainer>
							<Yes style={{ width: 100 }} type="button" onClick={this.onSubmit} />
							<No
								style={{ width: 100, marginLeft: 11 }}
								type="button"
								onClick={() => {
									this.props.onClose(false);
								}}
							/>
						</ActionContainer>
					</form>
				</Container>
			</CogoPopover>
		);
	}
}

export default PasswordPopover;
