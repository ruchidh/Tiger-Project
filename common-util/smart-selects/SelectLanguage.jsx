import React from 'react';

import ControlSelect from '../form/ControlSelect';
import languages from 'constants/languages';

const SelectLanguage = ({ value, ...rest }) => (
  <ControlSelect
    placeholder="Select Language"
    {...rest}
    value={value || undefined}
    options={languages}
  />
);

export default SelectLanguage;
