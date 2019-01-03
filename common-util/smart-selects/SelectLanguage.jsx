import React from 'react';

import languages from 'util/constants/languages';
import ControlSelect from '../form/ControlSelect';

const SelectLanguage = ({ value, ...rest }) => (
	<ControlSelect
		placeholder="Select Language"
		{...rest}
		value={value || undefined}
		options={languages}
	/>
);

export default SelectLanguage;
