import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import Typeahead from '../../../cogo-typeahead';
import { request, getPath, CancelToken } from '../../../../helpers/api';
import Error from '../../error-popover';

import { port, city } from '../../../../util/display';

class Location extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: null,
			isLoading: false,
		};
		this.getLocations = this.getLocations.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch = debounce((q) => {
		const {
			types, country_code, handler, name, params,
		} = this.props;
		if (q) {
			this.setState({ isLoading: true, q });
			const newTypes = types || ['port'];
			const newParams = {
				q,
				'types[]': newTypes,
				is_airport: (newTypes || []).indexOf('port') > -1 ? false : null,
				...params,
			};

			if (country_code) {
				(newParams.country_code = country_code);
			}
			this.getLocations(newParams);
		} else {
			this.setState({ isLoading: false }, handler([], name));
		}
	}, 300);

	onBlur = () => {}


	getPortsListFromPairs = (portPairs) => {
		const origin = [];
		const destination = [];

		if (!portPairs) {
			return { origin, destination };
		}

		portPairs.forEach(({ origin_port_detail }) => {
			const existingOrigins = origin.filter(
				existing => existing._id.$oid === origin_port_detail._id.$oid,
			);

			if (existingOrigins.length === 0) {
				origin.push(origin_port_detail);
			}
		});

		portPairs.forEach(({ destination_port_detail }) => {
			const existingOrigins = destination.filter(
				existing => existing._id.$oid === destination_port_detail._id.$oid,
			);

			if (existingOrigins.length === 0) {
				destination.push(destination_port_detail);
			}
		});
		return { origin, destination };
	};

	getLocations(params) {
		const { types, filterFunc } = this.props;
		const that = this;
		if (this.cancel !== undefined) {
			this.cancel();
		}
		request
			.get(getPath('v1/locations', params), {
				cancelToken: new CancelToken(((c) => {
					that.cancel = c;
				})),
			})
			.then((response) => {
				if (response.data.success) {
					this.setState({
						locations: response.data.locations.filter(filterFunc).map(location => ({
							...location,
							display_value: (types || ['port']).indexOf('city')
								? port(location)
								: city(location),
						})),
						isLoading: false,
					});
				} else {
					this.setState({ error: response.data.messages[0], isLoading: false });
				}
			})
			.catch((error) => {
				const err = error.response;
				this.setState({ error: err, isLoading: false });
			});
	}

	render() {
		const {
			name,
			value,
			searchType,
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
			autofocus,
			types,
			portPairs,
			filterFunc,
		} = this.props;

		const {
			error, isLoading, q, locations,
		} = this.state;
		let newLocations = [...(locations || [])];

		const newValue = (value || []).map(location => ({
			...location,
			display_value: (types || ['port']).indexOf('city')
				? port(location)
				: city(location),
		}));

		const portsList = this.getPortsListFromPairs(portPairs);

		if (!q && (types || ['port']).includes('port')) {
			newLocations = searchType
				? portsList[searchType] || []
				: [...portsList.origin, ...portsList.destination];
			newLocations = newLocations.filter(filterFunc).map(location => ({
				...location,
				display_value: (types || ['port']).indexOf('city')
					? port(location)
					: city(location),
			}));
		}

		return (
			<Fragment>
				<Typeahead
					name={name}
					isLoading={isLoading}
					onSearch={query => this.setState({ isLoading: true }, () => this.onSearch(query))}
					options={newLocations}
					selected={value}
					autoFocus={autofocus}
					onChange={handler}
					align="justify"
					size={size}
					labelKey={labelKey || 'display_value'}
					placeholder={placeholder}
					disabled={disabled}
					styleType={styleType}
					onBlur={this.onBlur}
					errorStyles={errorStyles}
					value={newValue}
					bsStyle={bsStyle}
					hideClear={hideClear}
					searchType={searchType}
				/>
				{error ? <Error message={error} /> : ''}
				{extError ? <Error message={extError} /> : ''}
			</Fragment>
		);
	}
}

Location.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.arrayOf(PropTypes.shape),
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	country_code: PropTypes.string,
	types: PropTypes.arrayOf(PropTypes.shape),
	params: PropTypes.shape,
	searchType: PropTypes.string,
	styleType: PropTypes.string,
	errorStyles: PropTypes.shape,
	bsStyle: PropTypes.string,
	extError: PropTypes.string,
	labelKey: PropTypes.string,
	size: PropTypes.string,
	hideClear: PropTypes.bool,
	autofocus: PropTypes.bool,
	portPairs: PropTypes.arrayOf(PropTypes.shape),
	filterFunc: PropTypes.func,
};

Location.defaultProps = {
	value: [],
	disabled: false,
	placeholder: 'Type here...',
	country_code: null,
	types: ['port'],
	params: {},
	searchType: null,
	styleType: null,
	errorStyles: null,
	extError: null,
	bsStyle: 'default',
	labelKey: 'display_value',
	size: 'md',
	hideClear: false,
	autofocus: false,
	portPairs: [],
	filterFunc: () => true,
};

const mapStateToProps = ({ app }) => ({ portPairs: app.recommendedPortPairs || [] });

export default connect(mapStateToProps)(Location);
