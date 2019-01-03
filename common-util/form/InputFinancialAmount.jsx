import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';

import { Input, InputNumber } from 'antd';
import SelectCurrency from '../smart-selects/SelectCurrency';

class InputFinancialAmount extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    onChange: () => {},
    value: [undefined, undefined],
  }

  onChangeAmount = (amount) => {
    const { onChange, value } = this.props;
    onChange([amount, value[1]]);
  }

  onChangeCurrency = (currency) => {
    const { onChange, value } = this.props;
    onChange([value[0], currency]);
  }

  render() {
    const { value } = this.props;
    return (
      <Input.Group compact>
        <InputNumber
          formatter={(v) => {
            const num = parseInt(v, 10);
            if (!isNaN(num)) {
              return num.toLocaleString('en-in');
            }
            return undefined;
          }}
          parser={v => v.replace(/[,]+/g, '').trim()}
          value={value[0]}
          onChange={this.onChangeAmount}
          style={{ width: '70%' }}
          min={0}
          placeholder="Enter Amount"
        />
        <SelectCurrency
          onChange={this.onChangeCurrency}
          value={value[1]}
          style={{ width: '30%' }}
          placeholder="Currency"
        />
      </Input.Group>
    );
  }
}

export default InputFinancialAmount;
