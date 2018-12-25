import { port } from '../../../util/v2/display';

import { Pairs, Item, Image, Label, LabelICD } from './styles';

const Port = ({ origin, destination, size, originICD, destinationICD, withLabel }) => (
	<Pairs size={size}>
		{originICD && (
			<Item size={size} type="icd_origin" withLabel={withLabel}>
				{withLabel === true ? <LabelICD>ICD</LabelICD> : null}
				<span>{port(originICD)}</span>
			</Item>
		)}

		{withLabel === true ? <Label>POL</Label> : null}
		<Item size={size} type="origin" withLabel={withLabel}>
			<span>{port(origin)}</span>
		</Item>

		{size === 'lg' ? <Image /> : null}

		{withLabel === true ? <Label>POD</Label> : null}
		<Item size={size} type="destination" withLabel={withLabel}>
			<span>{port(destination)}</span>
		</Item>

		{destinationICD && (
			<Item size={size} type="icd_destination" withLabel={withLabel}>
				{withLabel === true ? <LabelICD>ICD</LabelICD> : null}
				<span>{port(destinationICD)}</span>
			</Item>
		)}
	</Pairs>
);

export default Port;
