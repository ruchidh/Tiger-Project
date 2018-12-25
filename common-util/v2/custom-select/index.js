import { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { SelectWrap, ShortName, Image } from './styles';

const COLOR = ['#7E57C2', '#4D9FE3', '#66BB6A', '#EF7545', '#F3C879', '#E94C4C'];

class CustomeSelect extends Component {
	constructor(props) {
		super(props);
		const { defaultValue = {}, list = [] } = props;
		const firstOption = list.length ? list[0] : {};
		this.state = {
			showList: 'hide',
			selectedValue: defaultValue.value || firstOption.value,
			selectedName: defaultValue.name || firstOption.name,
			selectedIcon: defaultValue.icon || firstOption.icon,
		};
	}

	handleClickOutside = () => {
		const { showList } = this.state;
		if (showList === 'show') {
			this.setState({ showList: 'hide' });
		}
	};

	render() {
		const { list, reset, className, defaultValue } = this.props;
		const { selectedName } = this.state;
		const that = this;
		const shortNotaion = ((selectedName || {}).name || '')
			.split(' ')
			.map((x, i) => (i < 2 ? x[0] : ''))
			.join('');
		return (
			<SelectWrap className={className}>
				<div style={{ border: '1px solid #ddd' }}>
					{className === 'organisation' ? (
						<ShortName
							style={{
								background:
									COLOR[(defaultValue || {}).value ? defaultValue.value : 0],
							}}>
							{shortNotaion}
						</ShortName>
					) : (
						<span className="img-icon">
							<Image
								src={
									reset
										? this.props.defaultValue.icon || this.props.list[0].icon
										: this.state.selectedIcon
								}
							/>
						</span>
					)}
					<span>
						<input
							type="text"
							id={
								reset
									? this.props.defaultValue.value || this.props.list[0].value
									: this.state.selectedValue
							}
							name={this.props.name}
							value={
								reset
									? this.props.defaultValue.name || this.props.list[0].name
									: this.state.selectedName
							}
							onFocus={() => {
								if (this.state.showList === 'hide') {
									this.setState({ showList: 'show' });
								}
							}}
							onChange={e => e.preventDefault()}
						/>
					</span>
					<div className="dropDownIcon" />
				</div>
				{this.state.showList === 'show' && (
					<ul>
						{list.map((item, i) => {
							const sn = ((item || {}).name || '')
								.split(' ')
								.map((x, i) => (i < 2 ? x[0] : ''))
								.join('');
							return (
								<li
									key={i}
									onClick={() => {
										this.setState(
											{
												selectedValue: item.value,
												selectedName: item.name,
												selectedIcon: item.icon,
												showList: 'hide',
											},
											that.props.onChange(item, this.props.name),
										);
									}}>
									{className === 'organisation' ? (
										<ShortName
											style={{
												background: COLOR[i],
											}}>
											{sn}
										</ShortName>
									) : (
										<span>
											<Image src={item.icon} />
										</span>
									)}
									{item.name}
								</li>
							);
						})}
					</ul>
				)}
			</SelectWrap>
		);
	}
}

CustomeSelect.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
	defaultValue: PropTypes.objectOf,
	reset: PropTypes.bool.isRequired,
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
};

CustomeSelect.defaultProps = {
	defaultValue: {},
	className: '',
};

export default onClickOutside(CustomeSelect);
