import React from 'react';
import PropTypes from 'prop-types';

import {
	Input, InputNumber, Icon, Slider,
} from 'antd';
import InputFinancialAmount from './InputFinancialAmount';

function ControlInput(props) {
	const { inputType, ...rest } = props;
	switch (inputType) {
		case 'financial-amount':
			return <InputFinancialAmount {...rest} />;
		case 'number':
			return <InputNumber {...rest} />;
		case 'email':
			return <Input {...rest} prefix={<Icon type="mail" />} />;
		case 'textarea':
			return <Input.TextArea {...rest} />;
		case 'slider':
			return <Slider {...rest} />;
		case 'text':
		default:
			return <Input {...rest} />;
	}
}

ControlInput.propTypes = {
	inputType: PropTypes.string,
};

export default ControlInput;
