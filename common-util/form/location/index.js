import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { request, getPath, CancelToken } from '../../../helpers/api';
import { port, city, postalCode } from '../../../util/display';

import { Typeahead, Error } from './styles';

import { connect } from 'react-redux';

class Location extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
			isLoading: false,
		};
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.setState({
			bodyContainer: true,
		});
	}

	getPortsListFromPairs = portPairs => {
		const origin = [],
			destination = [];

		if (!portPairs) {
			return { origin, destination };
		}

		portPairs.map(({ origin_port_detail }) => {
			const existingOrigins = origin.filter(
				existing => existing._id.$oid === origin_port_detail._id.$oid,
			);

			if (existingOrigins.length === 0) {
				origin.push(origin_port_detail);
			}
		});

		portPairs.map(({ destination_port_detail }) => {
			const existingOrigins = destination.filter(
				existing => existing._id.$oid === destination_port_detail._id.$oid,
			);

			if (existingOrigins.length === 0) {
				destination.push(destination_port_detail);
			}
		});

		return { origin, destination };
	};

	render() {
		var {
			name,
			value,
			multiple,
			placeholder,
			disabled,
			types,
			error,
			styleType,
			inputProps,
			searchType,
			labelKey,
		} = this.props;

		const { isLoading, locations } = this.state;
		const Element = styleType === 'search' ? Typeahead : AsyncTypeahead;

		const portsList = this.getPortsListFromPairs(this.props.portPairs);

		let customLocations = [];
		if (!this.state.q) {
			customLocations = searchType
				? portsList[searchType] || []
				: [...portsList.origin, ...portsList.destination];
		}

		if (this.state.q) {
			customLocations = [...locations];
		}

		return (
			<Fragment>
				<Element
					name={name}
					inputProps={{ ...inputProps, autoComplete: 'off' }}
					onSearch={this.handleSearch.bind(this)}
					options={customLocations}
					selected={value}
					onChange={v => this.handleChange(v, name)}
					align="justify"
					labelKey={labelKey ? labelKey : 'name'}
					useCache={false}
					maxResults={20}
					minLength={0}
					isLoading={isLoading}
					caseSensitive={false}
					multiple={multiple}
					renderMenuItemChildren={
						types && types.includes('city')
							? city
							: types && types.includes('pincode')
								? postalCode
								: port
					}
					placeholder={placeholder}
					disabled={disabled}
					styleType={styleType}
					filterBy={['display_name']}
					autocomplete="off"
					highlightOnlyResult={true}
					emptyLabel="No Matches Found!"
					selectHintOnEnter={true}
					bodyContainer={this.state.bodyContainer}
				/>
				{error && <Error>{error}</Error>}
				{this.state.localError && <Error>{this.state.localError}</Error>}
			</Fragment>
		);
	}

	handleChange(v, name) {
		const { excludeItems } = this.props;
		if ((v || []).length > 0 && (excludeItems || []).length > 0) {
			var selectedId = v[0]._id.$oid;
			if (excludeItems || [].indexOf(selectedId) != -1) {
				this.setState({ localError: 'This entry already exists in the list' });
			} else {
				this.setState({ localError: null }, this.props.handler(v, name));
			}
		} else {
			this.setState({ localError: null }, this.props.handler(v, name));
		}
	}

	handleSearch(q) {
		this.setState({ q: q }, this.fetchData);
	}

	updateData(response) {
		this.setState({
			isLoading: false,
			locations: (response.data || {}).locations || [],
		});
	}

	fetchData() {
		this.cancel ? this.cancel() : null;
		this.setState({ isLoading: true }, this.getData.bind(this));
	}

	getData() {
		const that = this,
			newTypes = this.props.types || ['port'];
		request
			.get(
				getPath('v1/locations', {
					q: this.state.q,
					'types[]': newTypes,
					is_airport: newTypes.indexOf('port') > -1 ? false : null,
				}),
				{
					cancelToken: new CancelToken(c => {
						that.cancel = c;
					}),
				},
			)
			.then(this.updateData.bind(this))
			.catch(() => {});
	}
}

Location.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isIcd: PropTypes.bool,
	isLoading: PropTypes.bool,
	getLocations: PropTypes.func,
	locations: PropTypes.arrayOf(PropTypes.object),
	types: PropTypes.array,
	inputProps: PropTypes.object,
	excludeItems: PropTypes.arrayOf(PropTypes.string),
};

Location.defaultProps = {
	value: [],
	isIcd: false,
	disabled: false,
	multiple: false,
	locations: [],
	isLoading: false,
	placeholder: 'Search location...',
	excludeItems: [],
};

const mapStateToProps = ({ app }) => {
	return { portPairs: app.recommendedPortPairs || [] };
};

export default connect(mapStateToProps)(Location);
