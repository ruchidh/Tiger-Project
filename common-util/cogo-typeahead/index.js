import { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../v2/loader-to-fro';
import { Input, BtnClear } from './styles';
import Options from './options';
import OptionsRecommended from './options-recommended';

class CogoTypeahead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showResults: false,
			value: [],
			q: '',
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleRecommendSelect = this.handleRecommendSelect.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleRecommendClear = this.handleRecommendClear.bind(this);
	}

	componentDidMount() {
		const v = this.props.value;
		const key = this.props.labelKey;
		if (v && v.length) {
			this.setState({
				value: v,
				q: (v[0] || {})[key],
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		const nextID = (((nextProps.value || [])[0] || {})._id || {}).$oid;
		const currentID = (((this.props.value || [])[0] || {})._id || {}).$oid;

		if (nextID !== currentID) {
			const v = nextProps.value;
			const key = nextProps.labelKey;
			if (v && v.length) {
				this.setState({
					value: v,
					q: (v[0] || {})[key],
				});
			}
		}
	}

	handleSearch(e) {
		var value = e.target.value;
		const onSearch = this.props.onSearch ? this.props.onSearch : () => '';
		this.setState(
			{
				q: value,
				showResults: true,
			},
			onSearch(value),
		);
	}

	handleBlur(value, name) {
		this.setState(
			{
				showResults: false,
			},
			() => this.props.onChange(value, name),
		);
	}

	handleSelect(v) {
		var n = this.props.name;
		var q = v[this.props.labelKey];
		this.setState(
			{
				value: [v],
				q: q,
			},
			() => this.handleBlur([v], n),
		);
	}

	handleRecommendSelect(v, double) {
		if (double) {
			this.setState(
				{
					showResults: false,
				},
				() => this.props.handleSelect(v)
			)
		}
		else {
			const n = this.props.name;
			let q = v[this.props.labelKey];
			this.setState(
				{
					value: [v],
					q: q,
				},
				() => this.handleBlur([v], n),
			);
		}
	}

	handleClear() {
		var n = this.props.name;
		this.setState(
			{
				q: '',
				value: [],
			},
			this.props.onChange([], n),
		);
	}

	handleRecommendClear() {
		var n = this.props.name;
		this.setState(
			{
				q: '',
				value: [],
			},
			this.props.handleClear,
			this.props.onChange([], n),
		);
	}

	handleClick() {
		document.addEventListener('click', this.handleOutsideClick, false);
		this.setState({
			showResults: true,
		});
	}

	handleOutsideClick(e) {
		try {
			if ((this.node || {}).contains(e.target)) {
				return;
			} else {
				this.setState({
					showResults: false,
				});
			}
		} catch (err) {
			return;
		}
	}

	render() {
		const item = {};
		var errorStyles = this.props.errorStyles;
		const { size } = this.props;
		if (this.props.hasOwnProperty('value')) {
			item.value = this.props.value || '';
		}
		return (
			<div
				ref={node => {
					this.node = node;
				}}
				style={{ position: 'relative', display: 'flex' }}>
				{this.state.q && !this.props.hideClear ? (
					<BtnClear onClick={this.props.recommended ? this.handleRecommendClear : this.handleClear} bsStyle={this.props.bsStyle}>
						X
					</BtnClear>
				) : null}
				{this.props.isLoading ? <Loader position="bottom" margin="4px" /> : null}
				<Input
					placeholder="Type here..."
					{...this.props}
					{...item}
					onChange={this.handleSearch}
					value={this.state.q || (this.props.selected||{}).name || ''}
					autoFocus={this.props.autofocus}
					onFocus={this.handleClick}
					style={{ ...errorStyles }}
					className={!this.props.onSearch ? 'disable-text' : ''}
					autoComplete="off"
					name={null}
				/>
				{this.state.showResults ?
					this.props.recommended ?
						<OptionsRecommended
							size={size}
							locations={this.props.options}
							recommendedPortPairs={this.props.recommendedPortPairs}
							onSelect={this.handleRecommendSelect}
							align={this.props.align}
							labelKey={this.props.labelKey}
						/>
						:
						<Options
							size={size}
							locations={this.props.options}
							onSelect={this.handleSelect}
							align={this.props.align}
							labelKey={this.props.labelKey}
							searchType={this.props.searchType}
						/>
					: null}
			</div>
		);
	}
}

CogoTypeahead.propTypes = {
	handleSelect: PropTypes.func,
	onSearch: PropTypes.func,
	handleBlur: PropTypes.func,
	align: PropTypes.string,
	hideClear: PropTypes.bool,
};

CogoTypeahead.defaultProps = {
	handleBlur: () => '',
};

export default CogoTypeahead;
