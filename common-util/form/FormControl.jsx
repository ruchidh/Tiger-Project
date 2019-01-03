import React, { Component } from 'react';
import {
	DatePicker, TimePicker, Checkbox, Radio, Switch,
} from 'antd';

import ControlInput from './ControlInput';
import ControlSelect from './ControlSelect';
import SelectLocation from '../smart-selects/SelectLocation';
import SelectAdmin from '../smart-selects/SelectAdmin';
import SelectSeller from '../smart-selects/SelectSeller';
import SelectOrganization from '../smart-selects/SelectOrganization';
import SelectIncoTerms from '../smart-selects/SelectIncoTerms';
import SelectContainerSize from '../smart-selects/SelectContainerSize';
import SelectContainerType from '../smart-selects/SelectContainerType';
import SelectCommodityType from '../smart-selects/SelectCommodityType';
import SelectCommodityMappingType from '../smart-selects/SelectCommodityMappingType';
import SelectShippingLines from '../smart-selects/SelectShippingLines';
import SelectCurrency from '../smart-selects/SelectCurrency';
import SelectMonthYear from '../smart-selects/SelectMonthYear';
import SelectIndustries from '../smart-selects/SelectIndustries';
import ControlUploadButton from './ControlUploadButton';
import ControlMultipleUploadButton from './ControlMultipleUploadButton';
import SelectLanguage from '../smart-selects/SelectLanguage';
import SelectCountryCode from '../smart-selects/SelectCountryCode';
import SelectTimePeriod from '../smart-selects/SelectTimePeriod';


const { RangePicker, MonthPicker } = DatePicker;

class FormControl extends Component {
	componentDidMount() {}

	render() {
		const { type, ...rest } = this.props;
		switch (type) {
			case 'date-picker':
				return <DatePicker {...rest} />;
			case 'month-picker':
				return <MonthPicker {...rest} />;
			case 'time-picker':
				return <TimePicker {...rest} />;
			case 'date-range-picker':
				return <RangePicker {...rest} />;
			case 'input':
				return <ControlInput {...rest} />;
			case 'select':
				return <ControlSelect {...rest} />;
			case 'checkbox': {
				const { description, ...rest2 } = rest;
				return <Checkbox {...rest2}>{description}</Checkbox>;
			}
			case 'checkbox-group':
				return <Checkbox.Group {...rest} />;
			case 'radio-group':
				return <Radio.Group {...rest} />;
			case 'location-select':
				return <SelectLocation {...rest} />;
			case 'admin-select':
				return <SelectAdmin {...rest} />;
			case 'seller-select':
				return <SelectSeller {...rest} />;
			case 'organization-select':
				return <SelectOrganization {...rest} />;
			case 'shipping-line-select':
				return <SelectShippingLines {...rest} />;
			case 'inco-terms-select':
				return <SelectIncoTerms {...rest} />;
			case 'container-size-select':
				return <SelectContainerSize {...rest} />;
			case 'container-type-select':
				return <SelectContainerType {...rest} />;
			case 'commodity-type-select':
				return <SelectCommodityType {...rest} />;
			case 'commodity-mapping-select':
				return <SelectCommodityMappingType {...rest} />;
			case 'currency-select':
				return <SelectCurrency {...rest} />;
			case 'language-select':
				return <SelectLanguage {...rest} />;
			case 'industries-select':
				return <SelectIndustries {...rest} />;
			case 'country-code-select':
				return <SelectCountryCode {...rest} />;
			case 'time-period-select':
				return <SelectTimePeriod {...rest} />;
			case 'switch':
				return <Switch {...rest} />;
			case 'file-upload':
				return <ControlUploadButton {...rest} />;
			case 'multiple-file-upload':
				return <ControlMultipleUploadButton {...rest} />;
			case 'month-year':
				return <SelectMonthYear {...rest} />;
			default:
				return <p>Type is not yet supported</p>;
		}
	}
}

export default FormControl;
