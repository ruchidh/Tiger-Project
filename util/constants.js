export const TimePeriodMap = [
	{ name: 'Current Month', key: 'current_month' },
	{ name: 'Last Month', key: 'last_month' },
	{ name: 'Last 3 Months', key: 'last_three_months' },
	{ name: 'Current Quarter', key: 'current_quarter' },
	{ name: 'Last Quarter', key: 'last_quarter' },
	{ name: 'Last 6 Months', key: 'last_six_months' },
	{ name: 'Current Year', key: 'current_year' },
	{ name: 'Last Year', key: 'last_year' },
	{ name: 'Current Financial Year', key: 'current_financial_year' },
];

export const roles = [
	{ key: 'analytics', name: 'Analytics' },
	{ key: 'ops_tech', name: 'Ops-tech' },
	{ key: 'procurement', name: 'Procurement' },
	{ key: 'operations', name: 'Operations' },
	{ key: 'marketing', name: 'Marketing' },
	{ key: 'sales', name: 'Sales' },
	{ key: 'engagement', name: 'Engagement' },
	{ key: 'verification', name: 'Verification' },
	{ key: 'superadmin', name: 'Super Admin' },
	{ key: 'crm_admin', name: 'CRM Admin' },
	{ key: 'finance', name: 'Finance' },
	{ key: 'operations_admin', name: 'Operations Admin' },
	{ key: 'hibo', name: 'Hibo' },
	{ key: 'finance_admin', name: 'Finance Admin' },
	{ key: 'tech', name: 'Tech' },
];

export const allRoles = [
	'analytics',
	'ops_tech',
	'procurement',
	'operations',
	'marketing',
	'sales',
	'engagement',
	'verification',
	'superadmin',
	'finance',
	'operations_admin',
	'hibo',
	'finance_admin',
];

export const techRoles = [
	'analytics',
	'ops_tech',
	'procurement',
	'operations',
	'marketing',
	'sales',
	'engagement',
	'verification',
	'hibo',
];

export const containerSize = ['20', '40', '40HC', '45HC'];

export const containerType = ['standard', 'open_top', 'reefer', 'flat_rack', 'iso_tank'];

export const commodities = [
	{ key: 'general', name: 'General' },
	{ key: 'white_goods', name: 'White Goods' },
	{ key: 'agro', name: 'Soya, Seeds, Gherkins, Pulses' },
	{ key: 'sugar_rice', name: 'Sugar, Rice' },
	{ key: 'fabric_and_textiles', name: 'Readymade Garments, Made ups, Clothing, Fabrics, Textiles' },
	{ key: 'pharma', name: 'Pharmaceuticals' },
	{ key: 'meat', name: 'meat' },
	{ key: 'sea_food', name: 'Fish, Shrimps, Other Sea Food Items' },
	{ key: 'cotton_and_yarn', name: 'Cotton and Yarn' },
	{ key: 'fruits_and_veg', name: 'Mix Fruits and Vegetables' },
	{ key: 'pta', name: 'Purified terephthalic acid' },
];

export const hazardousCommodities = [
	{ key: 'gases-2.1', name: 'Gases-2.1' },
	{ key: 'gases-2.2', name: 'Gases-2.2' },
	{ key: 'gases-2.3', name: 'Gases-2.3' },
	{ key: 'flammable_liquids-3', name: 'Flammable Liquids-3' },
	{ key: 'flammable_solids-4.1', name: 'Flammable Solids-4.1' },
	{ key: 'flammable_solids_self_heat-4.2', name: 'Flammable Solids Self Heat-4.2' },
	{ key: 'emit_flammable_gases_with_water-4.3', name: 'Emit Flammable Gases with Water-4.3' },
	{ key: 'toxic_substances-6.1', name: 'Toxic substances-6.1' },
	{ key: 'infectious_substances-6.2', name: 'Infectious substances-6.2' },
	{ key: 'radioactive_material-7', name: 'Radioactive material-7' },
	{ key: 'corrosives-8', name: 'Corrosives-8' },
	{ key: 'miscellaneous_dangerous_goods-9', name: 'Miscellaneous dangerous goods-9' },
];

// prettier-ignore
export const currenciesAll = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BOV', 'BRL', 'BSD', 'BTN', 'BWP', 'BYR', 'BZD', 'CAD', 'CDF', 'CFA', 'CHE', 'CHF', 'CHW', 'CLF', 'CLP', 'CNY', 'COP', 'COU', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MXV', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STD', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'USN', 'USS', 'UYI', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XBA', 'XBB', 'XBC', 'XBD', 'XCD', 'XDR', 'XFU', 'XOF', 'XPD', 'XPF', 'XPT', 'XTS', 'XXX', 'YER', 'ZAR', 'ZMW', 'CFP', 'ZMK'];

export const tiersMap = [
	{ name: '1', key: '1' },
	{ name: '2', key: '2' },
	{ name: '3', key: '3' },
	{ name: '4', key: '4' },
	{ name: '5', key: '5' },
];

export const shipmentStatusV2 = [
	{ key: 'draft', name: 'Draft' },
	{ key: 'booking_received', name: 'Booking Received' },
	{ key: 'confirmed_by_shipper', name: 'Confirmed By Shipper' },
	{ key: 'processing_booking_note', name: 'Processing Booking Note' },
	{ key: 'booking_confirmed', name: 'Booking Confirmed' },
	{ key: 'containers_picked_up', name: 'Containers Picked Up' },
	{ key: 'awaiting_container_gate_in', name: 'Awaiting Container Gate In' },
	{ key: 'containers_gated_in', name: 'Containers Gated In' },
	{ key: 'in_transit', name: 'In Transit' },
	{ key: 'completed', name: 'Completed' },
	{ key: 'canceled', name: 'Canceled' },
	{ key: 'aborted', name: 'Aborted' },
];

export const shipmentAssistedByV2 = [
	{ key: 'true', name: 'Only Assisted' },
	{ key: 'false', name: 'Only Unassisted' },
];

export const shipmentSourcesV2 = [
	{ key: 'search', name: 'Search' },
	{ key: 'enquiry', name: 'Enquiry' },
	{ key: 'locked_rate', name: 'Instant Contracts' },
	{ key: 'request_quote_quotation', name: 'RFQ' },
	{ key: 'offers', name: 'Offers' },
	{ key: 'fav_port_pair', name: 'Favourite Port Pair' },
	{ key: 'booking_party', name: 'Booking Party' },
];

export const callReasons = [
	{ key: 'verification_call', name: 'Verification Call' },
	{ key: 'kam_welcome_call', name: 'Welcome Call' },
	{ key: 'ask_to_first_time_login', name: 'Ask to Login first time' },
	{ key: 'platform_activity_down', name: 'Platform Activity Down' },
	{ key: 'improving_profile', name: 'Improve Profile' },
	{ key: 'asking_for_new_enquiry', name: 'Asking for new enquiry' },
	{ key: 'enquiry_followup', name: 'Enquiry Follow-up' },
	{ key: 'shipment_followup', name: 'Shipment Follow-up' },
	{ key: 'shipment_feedback', name: 'Shipment Feedback' },
	{ key: 'relationship_building', name: 'RelationShip building' },
];

export const callOutputs = [
	{ key: 'not_responding', name: 'Not Responding' },
	{ key: 'not_interested', name: 'Not Interested' },
	{ key: 'invalid_client', name: 'Invalid Client' },
	{ key: 'asked_to_call_later', name: 'Asked to Call later' },
	{ key: 'call_success', name: 'Call Success' },
];

export const responsilbeParties = [
	{ key: 'freight_forwarder', name: 'Freight Forwarder' },
	{ key: 'shipping_line', name: 'Shipping Line' },
	{ key: 'cogoport', name: 'Cogoport' },
	{ key: 'shipper', name: 'Shipper' },
	{ key: 'port', name: 'Port' },
];

export const stakeholder = [
	{ key: 'admin', name: 'Admin' },
	{ key: 'buyer', name: 'Buyer' },
	{ key: 'seller', name: 'Seller' },
];

export const BLTypes = [
	{ key: 'house', name: 'House' },
	{ key: 'master', name: 'Master' },
	{ key: 'express', name: 'Express' },
	{ key: 'rfs', name: 'RFS' },
	{ key: 'sob', name: 'SOB' },
	{ key: 'seaway', name: 'Seaway' },
];

export const demoRequestStatus = [
	{ key: 'scheduled', name: 'Scheduled' },
	{ key: 'completed', name: 'Completed' },
	{ key: 'canceled', name: 'Canceled' },
];

export const taxTypes = {
	IN: [
		{ key: 'standard', name: 'Standard' },
	],
	NL: [
		{ key: 'nl_customer', name: 'NL Customer' },
		{ key: 'reverse_charged', name: 'Reverse Charged' },
		{ key: 'out_of_scope', name: 'Out Of Scope' },
	],
};
