import { Fragment, Component } from 'react';

import Select from '../cogo-select';
import { request, getPath, CancelToken } from '../../../../helpers/api';

class ShippingLines extends Component {
	state = { shipping_lines: null, isLoading: false };

	componentDidMount() {
		this.getShippingLines();
	}

	getShippingLines = params => {
		const that = this;
		if (this.cancel != undefined) {
			this.cancel();
		}
		request
			.get(getPath('v2/registered/tracking/shipping_lines', params), {
				cancelToken: new CancelToken(function executor(c) {
					that.cancel = c;
				}),
			})
			.then(response => {
				const { success, shipping_lines, messages } = response.data;
				if (success) {
					this.setState({ shipping_lines: shipping_lines, isLoading: false });
				} else {
					this.setState({ error: messages[0], isLoading: false });
				}
			})
			.catch(error => {
				const err = error.response;
				this.setState({ error: err, isLoading: false });
			});
	};

	onSearch = q => {
		if (q) {
			this.setState({ isLoading: true, q });
			this.getShippingLines({ q });
		} else {
			this.setState({ isLoading: false }, this.props.handler([], this.props.name));
		}
	};

	render() {
		const {
			name,
			value,
			handler,
			placeholder,
			disabled,
			styleType,
			errorStyles,
			bsStyle,
			extError,
			labelKey,
			size,
			hideClear,
		} = this.props;

		let { error, isLoading } = this.state;

		return (
			<Fragment>
				<Select
					name={name}
					isLoading={isLoading}
					onSearch={this.onSearch}
					options={this.state.shipping_lines}
					selected={value}
					onChange={handler}
					align="justify"
					size={size}
					labelKey="shipping_line_name"
					placeholder={placeholder}
					disabled={disabled}
					styleType={styleType}
					onBlur={this.onBlur}
					errorStyles={errorStyles}
					value={value}
					bsStyle={bsStyle}
					hideClear={hideClear}
					// error={}
				/>
			</Fragment>
		);
	}
}

export default ShippingLines;
