import { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search';
import DashboardAnalytics from '../../../util/analytics/v2/dashboard/regular';

import { OuterContainer, Container, Tab } from './styles';

import Tooltip from '../tooltip';

const TABS = [
	{ key: 'spot_rates', name: 'SPOT SEARCH' },
	{ key: 'contracted_rates', name: 'CONTRACT SEARCH' },
];

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'spot_rates',
		};
	}

	componentDidMount() {
		if (this.props.searchTab === 'contracted_rates') {
			this.setState({ active: 'contracted_rates' });
		}
	}

	renderTabs() {
		const that = this,
			{ active } = this.state;
		const { orientation, userType } = this.props;
		return TABS.map((item, i) => (
			<Tab
				key={i}
				active={item.key === active}
				onClick={() => {
					that.setState({ active: item.key });
					DashboardAnalytics.search_tab_clicked({ tab: item.key, userType });
				}}>
				{this.props.showRatesTooltip && item.key === 'contracted_rates' ? (
					<Tooltip
						message="Looks like you haven't tried contracted rates yet! Now lock a rate for any port pair and avail the same for the entire month."
						place="right">
						{item.name}
					</Tooltip>
				) : (
					item.name
				)}
			</Tab>
		));
	}

	render() {
		const { orientation, userType, closeHidden } = this.props,
			{ active } = this.state;
		return (
			<OuterContainer>
				<Container>
					<div className="text-center">{this.renderTabs()}</div>
					{active === 'spot_rates' && (
						<Search
							orientation={orientation}
							searchType="spot_rates"
							userType={userType}
							closeHidden={closeHidden}
						/>
					)}
					{active === 'contracted_rates' && (
						<Search
							orientation={orientation}
							searchType="contracted_rates"
							userType={userType}
							closeHidden={closeHidden}
						/>
					)}
				</Container>
			</OuterContainer>
		);
	}
}
const mapStateToProps = ({
	v2: {
		dashboard: { searchTab },
	},
}) => ({ searchTab });

export default connect(mapStateToProps)(SearchPanel);
