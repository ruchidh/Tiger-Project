import PropTypes from 'prop-types';
import cogoToast from 'cogo-toast';

import { Component } from 'react';
import MultiSelectV2 from '../v2/multi-select';
import { getRequest } from '../../helpers/api';
// import { Select } from './styles';

class AccessRolesSelect extends Component {
	state = { res: null, loading: false }

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		this.setState({ loading: true });
		try {
			const res = await getRequest('/v2/registered/organization/roles');
			if (res.data.success) {
				this.setState({ loading: false, res: res.data });
			} else {
				throw new Error('error fetching roles');
			}
		} catch (err) {
			this.setState({ loading: false });
			cogoToast.error('Error while fetching roles');
		}
	}

	render() {
		const { res, loading } = this.state;
		const { value, onChange } = this.props;
		return (
			<MultiSelectV2
				options={
					loading || !res ? [] : (
						res.roles
							.map(b => ({ name: b.user_assigned_name, value: ((b || {})._id || {}).$oid }))
					)
				}
				value={value}
				onChange={onChange}
				placeholder="Select access roles"
				labelKey="name"
				bsStyle="grey"
			/>
		);
	}
}

AccessRolesSelect.propTypes = {
	value: PropTypes.shape({}),
	onChange: PropTypes.func,
};

AccessRolesSelect.defaultProps = {
	value: undefined,
	onChange: () => {},
};

export default AccessRolesSelect;
