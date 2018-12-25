import {} from './styles';

const Price = ({ currency, price }) => (
	<span style={{ lineHeight: 2, fontFamily: 'GreycliffCF-Bold' }}>
		{currency} {' ' + price ? price : 0}
	</span>
);

export default Price;
