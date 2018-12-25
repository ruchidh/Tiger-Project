import { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Typeahead from '../../../cogo-typeahead';
import { request, getPath, CancelToken } from '../../../../helpers/api';
import Error from '../../error-popover';

import { city } from '../../../../util/display';

class RecommendedLocation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: null,
			isLoading: false,
			recommendedPortPairs: this.props.portPairs,
		};
		this.getLocations = this.getLocations.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	componentDidMount() {
		this.setState({ recommendedPortPairs: this.props.portPairs });
	}

	onSearch(q) {
		if (q) {
			this.setState({ isLoading: true, q });
			let selectedRecommended = [];
			const keyType = this.props.searchType === 'origin' ? 'origin_port_detail' : 'destination_port_detail';
			const newTypes = this.props.types || ['port'];
			const params = {
				q,
				'types[]': newTypes,
				is_airport: (newTypes || []).indexOf('port') > -1 ? false : null,
				...this.props.params,
			};
     		selectedRecommended = this.state.recommendedPortPairs.filter(item => (item[keyType].name.toLowerCase()).indexOf(q) === -1 ? false : true );
			this.setState({ recommendedPortPairs: selectedRecommended }, this.getLocations(params));
		} else {
    		this.setState({ isLoading: false, recommendedPortPairs: this.props.portPairs, locations : []}, this.props.handler([], this.props.name));
		}
	}

	onBlur() {}

	getLocations(params) {
		const that = this;
		if (this.cancel != undefined) {
			this.cancel();
		}
		request
			.get(getPath('v1/locations', params), {
				cancelToken: new CancelToken(function executor(c) {
					that.cancel = c;
				}),
			})
			.then(response => {
				if (response.data.success) {
					this.setState({
						locations: response.data.locations.map(location => ({
							...location,
							display_value: city(location),
						})),
						isLoading: false,
					});
				} else {
					this.setState({ error: response.data.messages[0], isLoading: false });
				}
			})
			.catch(error => {
				const err = error.response;
				this.setState({ error: err, isLoading: false });
			});
	}

    handleTest= value => {
    	this.props.handlePortPairSelect(value);
    }

    handleClear = () => {
        this.setState({ recommendedPortPairs: this.props.portPairs, locations: null })
    }

    render() {
    	const {
    		name,
    		value,
    		handler,
    		placeholder,
    		disabled,
    		searchType,
    		styleType,
    		errorStyles,
    		bsStyle,
    		extError,
    		labelKey,
    		size,
    		hideClear,
    		autofocus,
        } = this.props;
    	let { error, isLoading } = this.state;
    	let locations = [...(this.state.locations || [])];
    	const newValue = (value || []).map(location => ({
    		...location,
    		display_value: city(location),
    	}));
    	const portsList = this.state.recommendedPortPairs || [];

    	return (
    		<Fragment>
    			<Typeahead
    		        name={name}
    				isLoading={isLoading}
    				onSearch={this.onSearch}
    				options={locations}
    				selected={value}
    				autoFocus={autofocus}
    				onChange={handler}
    				align="justify"
    				size={size}
    				labelKey={labelKey ? labelKey : 'display_value'}
    				placeholder={placeholder}
    				disabled={disabled}
    				styleType={styleType}
    				onBlur={this.onBlur}
    				errorStyles={errorStyles}
    				value={newValue}
    				bsStyle={bsStyle}
    				searchType={searchType}
    				hideClear={hideClear}
					recommendedPortPairs={(locations || []).length ? [] : portsList}
                    handleSelect={this.handleTest}
                    handleClear={this.handleClear}
                    recommended
    			/>
    			{error ? <Error message={error} /> : ''}
    			{extError ? <Error message={extError} /> : ''}
    		</Fragment>
    	);
    }
}

RecommendedLocation.propTypes = {
	handler: PropTypes.func.isRequired,
	value: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	handlePortPairSelect: PropTypes.func,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	isIcd: PropTypes.bool,
	isLoading: PropTypes.bool,
	searchType: PropTypes.string,
};

RecommendedLocation.defaultProps = {
	value: [],
	disabled: false,
	multiple: false,
	isLoading: false,
	placeholder: 'Type here...',
};

const mapStateToProps = ({ app }) => {
	return { portPairs: app.recommendedPortPairs || [] };
};

export default connect(mapStateToProps)(RecommendedLocation);
