import PropTypes from 'prop-types';
import { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

import { port } from '../../util/display';
import { date } from '../../util/moment';
import BtnLink from '../btn-link';
import Port from '../port';

import { Tr, Td, Commodity } from './styles';

const GROUP_BG_COLOR = 'rgba(249, 249, 249, .5)';

class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}
	render() {
		const props = this.props,
			list = [
				<Tr key={0}>
					{props.autoId ? (
						<Td key={-1} bsStyle={props.bsStyle}>
							{props.index + 1}
						</Td>
					) : null}
					{this.list()}
					{props.nested && (
						<Td key={-2} bsStyle={props.bsStyle}>
							<BtnLink
								className="font-DemiBold"
								onClick={() => this.setState({ open: !this.state.open })}
								style={this.props.nestedTitleStyle || { color: 'black' }}>
								{props.nestedTitle}
							</BtnLink>
						</Td>
					)}
				</Tr>,
			];

		if (props.nested && this.state.open) {
			const style = {
				padding: '8px 0',
				backgroundColor: 'white',
			};
			list.push(
				<Tr key={1} bsStyle={props.bsStyle}>
					<td colSpan={props.fields.length + 2} style={style}>
						<this.props.nested data={props.data} />
					</td>
				</Tr>,
			);
		}

		if (props.multiRowKey != null) {
			list.push(
				<Tr key={1} bsStyle={props.bsStyle}>
					{this.renderMultiRow(props)}
				</Tr>,
			);
		}

		return list;
	}

	renderMultiRow(props) {
		const that = this;
		return (props.multiRowFields || []).map((field, i) => {
			const style = field.style || {};

			return (
				<Td
					key={i}
					bsStyle={props.bsStyle}
					className={field.className || ''}
					style={style}
					borderTop="none">
					{field.dataFormat
						? field.dataFormat(props.data[this.props.multiRowKey][0], field.id, field)
						: that.renderTd(props.data[this.props.multiRowKey][0], field)}
				</Td>
			);
		});
	}

	list() {
		const that = this,
			props = this.props;
		return this.props.fields.map((field, i) => {
			const style = field.style || {};
			if (field.group) {
				style.backgroundColor = GROUP_BG_COLOR;
			}
			if (this.props.bg) {
				style.backgroundColor = this.props.bg;
			}
			return !field.hidden ? (
				<Td key={i} bsStyle={props.bsStyle} className={field.className || ''} style={style}>
					{field.dataFormat
						? field.dataFormat(props.data, field.id, field)
						: that.renderTd(props.data, field)}
				</Td>
			) : null;
		});
	}

	renderTd(item, field) {
		const value = item[field.id];
		const type = field.type;
		if (type) {
			if (type === 'port') {
				return port(value);
			} else if (type === 'port-vertical') {
				return <Port data={value} />;
			} else if (type === 'commodity') {
				return !isEmpty(value) ? (
					<Commodity>
						{value.is_haz && <img src="/static/app/images/HAZ_sign.svg" />}{' '}
						{value.commodity_name}
					</Commodity>
				) : null;
			} else if (type === 'organisation') {
				return (value || {}).name || (value || {}).business_name;
			} else if (type === 'date') {
				return date(value);
			} else if (type === 'price') {
				const price = value || {};
				return (price.currency || '') + ' ' + (price.amount || '');
			} else if (type === 'days') {
				return `${value || 0} ${value > 1 ? 'days' : 'day'}`;
			}
		} else {
			return item[field.id];
		}
	}
}

Row.propTypes = {
	fields: PropTypes.arrayOf(PropTypes.object).isRequired,
	index: PropTypes.number.isRequired,
	data: PropTypes.object.isRequired,
	autoId: PropTypes.bool,
	nested: PropTypes.any,
	nestedTitle: PropTypes.string,
	nestedTitleStyle: PropTypes.object,
	bsStyle: PropTypes.string.isRequired,
	multiRowKey: PropTypes.string,
};

export default Row;
