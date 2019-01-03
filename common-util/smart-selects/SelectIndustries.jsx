import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ControlSelect from '../form/ControlSelect';
import industries from 'constants/industries.json';

class SelectIndustries extends Component {
  componentDidMount() {}

  render() {
    const { value, ...rest } = this.props;
    return (
      <ControlSelect
        placeholder="Select Industries"
        {...rest}
        value={value || undefined}
        options={industries}
      />
    );
  }
}

SelectIndustries.propTypes = {

};

export default SelectIndustries;
