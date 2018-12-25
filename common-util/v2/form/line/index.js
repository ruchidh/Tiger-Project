import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Typeahead from '../../../cogo-typeahead';
import { request, getPath, CancelToken } from '../../../../helpers/api';
import Error from '../../error-popover';

class Lines extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lines: null,
			isLoading: false,
		};
		this.getLines = this.getLines.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

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
			size,
			labelKey,
		} = this.props;
		var { lines, error, isLoading } = this.state;
		return (
			<Fragment>
				<Typeahead
					name={name}
					size={size}
					isLoading={isLoading}
					onSearch={this.onSearch}
					options={lines}
					selected={value}
					onChange={handler}
					align="justify"
					labelKey={labelKey ? labelKey : 'short_name'}
					placeholder={placeholder}
					disabled={disabled}
					styleType={styleType}
					onBlur={this.onBlur}
					errorStyles={errorStyles}
					value={value}
					bsStyle={bsStyle}
				/>
				{error ? <Error message={extError}/> : null}
				{extError ? <Error message={extError}/> : null }
			</Fragment>
		);
	}

	getLines(params) {
		const that = this;
		if (this.cancel != undefined) {
			this.cancel();
		}
		request
			.get(
				getPath('v1/organizations/shipping_line', {
					...params,
					'status[]': [
						'active',
						'inactive',
						'email_verified',
						'shipper_marked',
						'seller_marked',
						'company_verified',
					],
				}),
				{
					cancelToken: new CancelToken(function executor(c) {
						that.cancel = c;
					}),
				},
			)
			.then(response => {
				if (response.data.success) {
					this.setState({
						lines: (response.data.information || []).map(item => {
							item.display_name = item.short_name;
							return item;
						}),
						isLoading: false,
					});
				} else {
					this.setState({
						error: response.data.messages[0],
						isLoading: false,
					});
				}
			})
			.catch(error => {
				const err = error.response;
				this.setState({
					error: err,
					isLoading: false,
				});
			});
	}

	onSearch(q) {
		if (q) {
			this.setState({ isLoading: true });
			const params = {
				q: q,
				'seller_type[]': ['shipping_line'],
				...this.props.params,
			};
			this.getLines(params);
		} else {
			this.setState({ isLoading: false }, this.props.handler([], this.props.name));
		}
	}

	onBlur() {}
}

Lines.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isLoading: PropTypes.bool,
};

Lines.defaultProps = {
	value: [],
	disabled: false,
	multiple: false,
	isLoading: false,
	placeholder: 'Type here...',
};

export default Lines;
