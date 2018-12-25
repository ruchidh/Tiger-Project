import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import Router from 'next/router';

import Row from '../../row';
import Select from '../../form/cogo-select';
import RecommendedLocation from '../../form/recommended-location';
import Location from '../../form/location';
import getCommodityList from '../../../../util/v2/commodity';

import ValidatorSearch from '../../../../util/checkit/search';
import ValidatorInstant from '../../../../util/checkit/instant-contract';

import DashboardAnalytics from '../../../../util/analytics/v2/dashboard/regular';

import Tooltip from '../../tooltip';
import Datepicker from '../../datepicker';

import { CONTAINER_SIZE, CONTAINER_TYPE } from '../../../../util/constants';

import { portId, port } from '../../../../util/display';
import { date } from '../../../../util/moment';

import { getMonths } from '../../../../store/instant-contract/actions';
import { setStoreState } from '../../../../store/v2/search/actions';

import browserAgent from '../../../../util/app-helpers/browser';

import {
	Col,
	Label,
	ButtonParent,
	ButtonParentFull,
	DateContainer,
	Number,
	Container,
	Submit,
	Close,
} from './styles';

const MIN_DATE = 4;
const MAX_DATE = 45;

const LAYOUT = {
	vertical: {
		origin: { xs: 12 },
		destination: { xs: 12 },
		type: { xs: 12, sm: 6 },
		size: { xs: 12, sm: 6 },
		commodity: { xs: 12 },
		month: { xs: 12 },
		quantity: { xs: 12, sm: 6 },
		date: { xs: 12, sm: 6 },
		submit: { xs: 12 },
	},
	horizontal: {
		origin: { xs: 12, sm: 6, md: 6, lg: 3 },
		destination: { xs: 12, sm: 6, md: 6, lg: 3 },
		type: { xs: 12, sm: 6, md: 6, lg: 3 },
		size: { xs: 12, sm: 6, md: 6, lg: 3 },
		commodity: { xs: 12, sm: 6, md: 6, lg: 3 },
		month: { xs: 12, sm: 6, md: 6, lg: 3 },
		quantity: { xs: 12, sm: 6, md: 6, lg: 3 },
		date: { xs: 12, sm: 6, md: 6, lg: 3 },
		submit: { xs: 12, sm: 6, md: 6, lg: 3 },
	},
};

class Search extends Component {
	constructor(props) {
		super(props);

		const { data = {}, query = {} } = this.props;
		const type = data.container_type || CONTAINER_TYPE[0].key;
		this.state = {
			errors: {},
			isOpen: false,
			origin_port: data.origin_port_details ? [data.origin_port_details] : [],
			destination_port: data.destination_port_details ? [data.destination_port_details] : [],
			container_size: data.container_size || '20',
			quantity: data.quantity || '',
			expected_shipment_date: query && query.date
				? moment(query.date)
				: moment(Date.now()).add(MIN_DATE, 'days'),

			container_type: type,
			grouped_commodity: data.grouped_commodity || getCommodityList(type)[0],
			commodityList: getCommodityList(type),
			isSubmitting: false,
			month: data.expected_shipment_date
				? {
					key: date(data.expected_shipment_date, 'YYYY-MM-DD'),
					name: date(data.expected_shipment_date, 'MMMM'),
				}
				: null,
		};
		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
		const { months } = this.props;
		if (this.props.searchType === 'contracted_rates') {
			months.length
				? this.setState({ month: { key: months[0], name: date(months[0], 'MMMM') } })
				: this.props.getMonths();
		}

		if (this.props.searchType !== 'contracted_rates') {
			const datePicker = (document.getElementsByClassName(
				'react-datepicker__input-container',
			) || [])[0];
			const v = ((datePicker || {}).childNodes || [])[0] || {};
			if (v.setAttribute) {
				(((datePicker || {}).childNodes || [])[0] || {}).setAttribute('readOnly', true);
			}
		}

		if (this.props.searchType === 'contracted_rates') {
			if (this.props.userType !== 'seller') {
				Router.prefetch('/app/enquiries/instant-contract');
			}
		} else {
			Router.prefetch(`/app/enquiries`);
		}
	}

	showQuantityPopover = () => {
		this.setState({ quanityPopoverOpen: true });
	};

	handlePortPairSelect = v => {
		this.setState({
			origin_port: v && v.origin_port_detail ? [v.origin_port_detail] : [],
			destination_port: v && v.destination_port_detail ? [v.destination_port_detail] : [],
			errors: {},
		});
	};

	close() {
		return (
			!this.props.closeHidden &&
			this.props.closeHandler && (
				<Close type="button" onClick={this.props.closeHandler}>
					<img src="/static/app/images/cancel.svg" />
				</Close>
			)
		);
	}

	handleSelect(value, name) {
		const state = { [name]: value };
		if (name === 'container_type') {
			state.commodityList = getCommodityList(value.key);
			state.grouped_commodity = state.commodityList[0];
		}

		this.setState(state);
	}

	sailingDate() {
		const { expected_shipment_date } = this.state;
		return (
			<DateContainer>
				<Datepicker
					name="expected_shipment_date"
					placement="top-end"
					onChange={(v, n) => {
						this.setState({ [n]: v });
					}}
					value={expected_shipment_date && expected_shipment_date.isValid() ? expected_shipment_date : null}
					filter={v => v.isSameOrAfter(moment(Date.now()).add(MIN_DATE - 1, 'days')) &&
						v.isSameOrBefore(moment(Date.now()).add(MAX_DATE, 'days'))
					}
				/>
			</DateContainer>
		);
	}

	months() {
		return this.props.months.map(item => ({
			key: item,
			name: date(item, 'MMMM'),
		}));
	}

	submit(e) {
		e.preventDefault();
		const isInstant = this.props.searchType === 'contracted_rates';
		const Validator = isInstant ? ValidatorInstant : ValidatorSearch;
		const [err] = Validator.validateSync(this.state, this.state),
			state = {};
		let handler = () => {};
		// state.errors = checkitError(err);
		state.errors = err ? err.errors : {};
		state.isSubmitting = true;
		isEmpty(state.errors)
			? (handler = isInstant ? this.postInstant.bind(this) : this.postSearch.bind(this))
			: (state.isSubmitting = false);
		this.setState(state, handler);
	}

	postSearch() {
		const {
			origin_port = [],
			destination_port = [],
			container_size,
			container_type,
			grouped_commodity,
			quantity,
			expected_shipment_date,
		} = this.state;
		const { userType } = this.props;

		const payload = {
			origin_port: origin_port[0],
			destination_port: destination_port[0],
			container_size,
			container_type:
				typeof container_type === 'string' ? container_type : container_type.key,
			grouped_commodity:
				typeof grouped_commodity === 'string' ? grouped_commodity : grouped_commodity.key,
			quantity,
			expected_shipment_date: expected_shipment_date.format(),
			userType,
		};

		const origin_port_id = portId(origin_port),
			destination_port_id = portId(destination_port);
		DashboardAnalytics.search_spot_rates(payload);
		this.createSearch({
			origin_port_id,
			destination_port_id,
			origin_port_code: ((origin_port || [])[0] || {}).port_code || '',
			destination_port_code: ((destination_port || [])[0] || {}).port_code || '',
			origin_port_name: port((origin_port || [])[0] || {}),
			destination_port_name: port((destination_port || [])[0] || {}),
			container_type:
				typeof container_type === 'string' ? container_type : container_type.key,
			grouped_commodity:
				typeof grouped_commodity === 'string' ? grouped_commodity : grouped_commodity.key,
			container_size,
			quantity,
			source: this.props.isModify ? 'modified' : 'dashboard',
			expected_shipment_date: expected_shipment_date.format(),
			userType,
		});
	}

	createSearch(data) {
		const { userType } = this.props;
		const { source, ...params } = data;
		this.props.setStoreState({ source, search_data: { ...params } });

		let browserAgentMap = {};
		try {
			browserAgentMap = browserAgent();
		} catch (e) {
			console.log(e);
		}

		Router.push({
			pathname: '/app/enquiries',
			query: {
				origin: params.origin_port_code,
				destination: params.destination_port_code,
				type: params.container_type,
				size: params.container_size,
				commodity: params.grouped_commodity,
				quantity: params.quantity,
				date: params.expected_shipment_date,
				origin_id: params.origin_port_id,
				destination_id: params.destination_port_id,
				...browserAgentMap,
			},
		});

		if (this.props.closeHandler) {
			this.props.closeHandler();
		}
	}

	handler(response = {}) {
		const { id, success, messages = [] } = response.data || {};
		if (success) {
			if (this.props.isModify) {
				Router.push(`/app/enquiries/${id}`);
			} else {
				Router.push(
					{
						pathname: `/app/enquiries/results`,
						query: { id },
					},
					`/app/enquiries/${id}`,
				);
			}
		} else {
			this.setState({
				error: messages[0],
			});
		}
	}

	postInstant() {
		const {
			origin_port = [],
			destination_port = [],
			container_size,
			container_type,
			grouped_commodity,
			month,
		} = this.state;
		const { userType } = this.props;

		const payload = {
			origin_port: origin_port[0],
			destination_port: destination_port[0],
			container_size,
			container_type:
				typeof container_type === 'string' ? container_type : container_type.key,
			commodity:
				typeof grouped_commodity === 'string' ? grouped_commodity : grouped_commodity.key,
			instant_contract_date: (month || {}).key || (this.props.months[0] || {}).key,
			userType,
		};

		const origin_port_id = portId(origin_port),
			destination_port_id = portId(destination_port);

		DashboardAnalytics.search_contracted_rates(payload);
		this.createInstant({
			origin_port_id,
			destination_port_id,
			container_type:
				typeof container_type === 'string' ? container_type : container_type.key,
			origin_port_code: ((origin_port || [])[0] || {}).port_code || '',
			destination_port_code: ((destination_port || [])[0] || {}).port_code || '',
			origin_port_name: port((origin_port || [])[0] || {}),
			destination_port_name: port((destination_port || [])[0] || {}),
			commodity:
				typeof grouped_commodity === 'string' ? grouped_commodity : grouped_commodity.key,
			container_size,
			instant_contract_date: (month || {}).key || (this.props.months[0] || {}).key,
			source: this.props.isModify ? 'modified' : 'dashboard',
		});
	}

	createInstant(data) {
		const { source, ...params } = data;
		this.props.setStoreState({ source, instant_search_data: { ...params } });

		let browserAgentMap = {};
		try {
			browserAgentMap = browserAgent();
		} catch (e) {
			console.log(e);
		}

		Router.push({
			pathname: '/app/enquiries/instant-contract',
			query: {
				origin: params.origin_port_code,
				destination: params.destination_port_code,
				type: params.container_type,
				size: params.container_size,
				commodity: params.commodity,
				date: params.instant_contract_date,
				origin_id: params.origin_port_id,
				destination_id: params.destination_port_id,
				...browserAgentMap,
			},
		});

		if (this.props.closeHandler) {
			this.props.closeHandler();
		}
	}

	handlerInstant(response = {}) {
		const { id, success, messages = [] } = response.data || {};
		if (success) {
			if (this.props.isModify) {
				Router.push(`/app/instant-contract/${id}`);
			} else {
				Router.push(
					{
						pathname: '/app/enquiries/lock',
						query: { id },
					},
					`/app/instant-contract/${id}`,
				);
			}
		} else {
			this.setState({
				error: messages[0],
			});
		}
	}

	withErrorTooltip = node => {
		const { searchType } = this.props;
		const state = this.state,
			errors = state.errors;

		const isDisabled =
			searchType === 'contracted_rates'
				? !(
						state.origin_port.length &&
						state.destination_port.length &&
						state.container_type &&
						state.container_size &&
						state.month &&
						state.grouped_commodity
				  )
				: !(
						state.origin_port.length &&
						state.destination_port.length &&
						state.container_type &&
						state.container_size &&
						state.expected_shipment_date &&
						state.grouped_commodity &&
						state.quantity &&
						state.quantity > 0
				  );
		return isDisabled ? (
			<Tooltip
				message={isDisabled ? 'Please enter all fields before proceeding!' : ''}
				place="below">
				{node}
			</Tooltip>
		) : (
			node
		);
	};

	render() {
		const { orientation = 'horizontal', closeHandler, closeHidden, searchType } = this.props,
			months = this.months();
		const state = this.state,
			errors = state.errors,
			layout = LAYOUT[orientation];

		return (
			<Container
				orientation={orientation}
				closeBtn={closeHidden ? false : closeHandler ? true : false}>
				<form id={`${this.props.searchType}-search`} onSubmit={this.submit.bind(this)}>
					{this.close()}
					<Row style={{ padding: '16px 12px 0' }}>
						<Col {...layout.origin}>
							<Label>Origin</Label>
							<RecommendedLocation
								type={['port']}
								searchType="origin"
								styleType="search"
								name="origin_port"
								autoFocus
								value={state.origin_port}
								handler={v => {
									this.setState({ origin_port: v, errors: {} });
								}}
								placeholder="Search Origin"
								extError={(errors.origin_port || {}).message}
								bsStyle="blue"
								handlePortPairSelect={this.handlePortPairSelect}
							/>
						</Col>
						<Col {...layout.destination}>
							<Label>Destination</Label>
							<Location
								type={['port']}
								searchType="destination"
								styleType="search"
								name="destination_port"
								value={state.destination_port}
								handler={v => {
									this.setState({ destination_port: v, errors: {} });
								}}
								placeholder="Search Destination"
								extError={(errors.destination_port || {}).message}
								bsStyle="blue"
							/>
						</Col>
						<Col {...layout.type}>
							<Label>Container Type</Label>
							<Select
								name="container_type"
								onChange={this.handleSelect}
								value={state.container_type}
								options={CONTAINER_TYPE}
								bsStyle="blue"
								align="justify"
								error={(errors.container_type || {}).message}
							/>
						</Col>
						<Col {...layout.size}>
							<Label>Container Size</Label>
							<Select
								name="container_size"
								onChange={this.handleSelect}
								value={state.container_size}
								options={CONTAINER_SIZE}
								bsStyle="blue"
								align="justify"
								error={(errors.container_size || {}).message}
							/>
						</Col>
						<Col {...layout.commodity}>
							<Label>Commodity</Label>
							<Select
								name="grouped_commodity"
								onChange={this.handleSelect}
								value={state.grouped_commodity}
								options={state.commodityList}
								bsStyle="blue"
								align="justify"
								position={orientation === 'vertical' ? 'top' : 'bottom'}
								error={(errors.origin_port || {}).message}
							/>
						</Col>
						{searchType === 'contracted_rates' ? (
							<Col {...layout.month}>
								<Label>Sailing Month</Label>
								<Select
									name="month"
									onChange={this.handleSelect}
									value={state.month || months[0]}
									options={months}
									bsStyle="blue"
									align="justify"
									position="top"
									error={(errors.month || {}).message}
								/>
							</Col>
						) : (
							<Fragment>
								<Col {...layout.quantity}>
									<Label>No. of Containers</Label>
									<Tooltip
										message="Avail discounted rates for higher volume"
										place="right">
										<Number
											type="number"
											name="quantity"
											onFocus={this.showQuantityPopover}
											value={state.quantity}
											min={1}
											max={this.props.searchType === 'contracted_rates' ? 500 : 100}
											onChange={e => this.setState({
												quantity: e.target.value,
												errors: {},
												quanityPopoverOpen:
													!e.target.value || e.target.value === '',
											})}
											error={(errors.quantity || {}).message}
										/>
									</Tooltip>
								</Col>
								<Col {...layout.date}>
									<Label>Sailing Date</Label>
									{this.sailingDate()}
								</Col>
							</Fragment>
						)}
						{orientation === 'horizontal' ? (
							<Col {...layout.submit} className="button">
								<ButtonParent>
									<Submit
										type="submit"
										bsStyle="default"
										disabled={
											searchType === 'contracted_rates'
												? !(
													state.origin_port.length &&
													state.destination_port.length &&
													state.container_type &&
													state.container_size &&
													state.month &&
													state.grouped_commodity
												)
												: !(
													state.origin_port.length &&
													state.destination_port.length &&
													state.container_type &&
													state.container_size &&
													state.expected_shipment_date &&
													state.grouped_commodity &&
													state.quantity &&
													state.quantity > 0
												)
										}
										orientation={orientation}
										loading={state.isSubmitting}>
										{state.isSubmitting ? 'SEARCHING RATES...' : 'SEARCH RATES'}
									</Submit>
								</ButtonParent>
							</Col>
						) : (
							<Col className="button" {...layout.submit}>
								{this.withErrorTooltip(
									<ButtonParentFull>
										<Submit
											type="submit"
											bsStyle="default"
											onMouseEnter={() =>
												this.setState({ quanityTooltipOpen: true })
											}
											onMouseLeave={() =>
												this.setState({ quanityTooltipOpen: false })
											}
											disabled={
												searchType === 'contracted_rates'
													? !(
															state.origin_port.length &&
															state.destination_port.length &&
															state.container_type &&
															state.container_size &&
															state.month &&
															state.grouped_commodity
													  )
													: !(
															state.origin_port.length &&
															state.destination_port.length &&
															state.container_type &&
															state.container_size &&
															state.expected_shipment_date &&
															state.grouped_commodity &&
															state.quantity &&
															state.quantity > 0
													  )
											}
											orientation={orientation}
											loading={state.isSubmitting}>
											{state.isSubmitting
												? 'SEARCHING RATES...'
												: 'SEARCH RATES'}
										</Submit>
									</ButtonParentFull>,
								)}
							</Col>
						)}
					</Row>
				</form>
			</Container>
		);
	}
}

const mapStateToProps = ({ instantContract: { months }, profile: { type }, route: { query } }) => ({
	months,
	type,
	query,
});

export default connect(
	mapStateToProps,
	{ getMonths, setStoreState },
)(Search);
