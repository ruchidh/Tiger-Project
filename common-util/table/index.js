import PropTypes from 'prop-types';

import Row from './tr';
import { Container, Table, Th, ThGroup, NoData } from './styles';
import Spinner from '../spinner';

const GROUP_BG_COLOR = 'rgba(249, 249, 249, .5)';

const CogoTable = ({
	bg,
	fields,
	data,
	autoId,
	nested,
	nestedTitle,
	noBorder,
	nestedTitleStyle,
	className,
	tableStyle,
	style,
	bsStyle,
	group,
	multiRowKey,
	multiRowFields,
	noDataContent,
	isLoading,
}) => {
	const headers = fields.map((item, i) => {
		return !item.hidden ? (
			<Th
				key={i}
				className={item.thClassName || ''}
				bsStyle={bsStyle}
				style={item.group ? { backgroundColor: GROUP_BG_COLOR } : {}}>
				{item.name}
			</Th>
		) : null;
	});
	const groupHeaders = [],
		footer = [];

	if (group) {
		var count = 0,
			lastGroup = '';
		fields.forEach((item, i) => {
			if (item.group) {
				lastGroup = item.group;
				count += 1;
			} else {
				if (count > 0) {
					const style = {
							backgroundColor: GROUP_BG_COLOR,
						},
						footerStyle = {
							backgroundColor: GROUP_BG_COLOR,
							height: 20,
						};
					groupHeaders.push(
						<ThGroup key={`${i}-grouped`} colSpan={count} style={style}>
							{lastGroup}
						</ThGroup>,
					);
					footer.push(<td key={`${i}-grouped`} colSpan={count} style={footerStyle} />);
				}
				count = 0;
				lastGroup = '';
				groupHeaders.push(<ThGroup key={i} />);
				footer.push(<td key={i} style={{ height: 20 }} />);
			}
		});
	}

	if (autoId) {
		headers.unshift(
			<Th key="autoId-th" bsStyle={bsStyle}>
				Id
			</Th>,
		);
	}
	const body = data.map((item, i) => {
		return [
			<Row
				key={i}
				bg={bg}
				index={i}
				bsStyle={bsStyle}
				autoId={autoId}
				fields={fields}
				data={item}
				nested={nested}
				nestedTitle={nestedTitle}
				nestedTitleStyle={nestedTitleStyle}
				multiRowKey={multiRowKey}
				multiRowFields={multiRowFields}
			/>,
		];
	});

	if (group) {
		tableStyle.marginBottom = 10;
	}

	return isLoading ? (
		<Spinner fullWidth />
	) : (
		<Container className={className} style={style} bsStyle={bsStyle}>
			<Table style={tableStyle} bsStyle={bsStyle}>
				{group ? (
					<thead>
						<tr>{groupHeaders}</tr>
					</thead>
				) : null}
				<thead>
					<tr>{headers}</tr>
				</thead>
				<tbody>
					{data.length === 0 ? (
						<tr>
							<td colSpan="100">
								<NoData bsStyle={bsStyle}>{noDataContent || 'No Data'}</NoData>
							</td>
						</tr>
					) : (
						body
					)}
					{group ? <tr>{footer}</tr> : null}
				</tbody>
			</Table>
		</Container>
	);
};

CogoTable.propTypes = {
	fields: PropTypes.arrayOf(PropTypes.object).isRequired,
	data: PropTypes.arrayOf(PropTypes.object),
	autoId: PropTypes.bool,
	nested: PropTypes.any,
	nestedTitle: PropTypes.string,
	nestedTitleStyle: PropTypes.shape,
	className: PropTypes.string,
	style: PropTypes.shape,
	tableStyle: PropTypes.shape,
	bsStyle: PropTypes.string,
	group: PropTypes.bool,
	multiRowKey: PropTypes.string,
	noDataContent: PropTypes.string,
	noBorder: PropTypes.bool,
	thClassName: PropTypes.string,
};

CogoTable.defaultProps = {
	data: [],
	autoId: false,
	thClassName: '',
	className: '',
	style: {},
	tableStyle: {},
	bsStyle: 'default',
	group: false,
};

export default CogoTable;
