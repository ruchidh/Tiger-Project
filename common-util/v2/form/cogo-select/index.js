import { Component } from 'react';

import { SelectBox, Placeholder } from './styles';
import Options from './options';
import ErrorPopover from '../../error-popover';

class CogoSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showResults: false,
			value: '',
			q: '',
		};
		this.handleBlur = this.handleBlur.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const v = this.props.value;
		const labelKey = this.props.labelKey ? this.props.labelKey : 'name';
		const options = this.props.options || [];
		var state = this.state;
		if (v) {
			if ( options && options.length && typeof options[0] === 'object') {
				if (typeof v === 'string') {
					options.map((element, i) => {
						if (v === element.key) {
							state.value = element;
							state.q = element[labelKey];
							return;
						}
					});
				} else {
					state.value = v;
					state.q = state.value[labelKey];
				}
			} else if (options && options.length && (typeof options[0] === 'string' || typeof options[0] === 'number')) {
				state.q = v;
				state.value = v;
			}
			this.setState(state);
		}
	}

	componentWillReceiveProps(nextProps) {
		const v = nextProps.value;
		const labelKey = nextProps.labelKey ? nextProps.labelKey : 'name';
		const options = nextProps.options;
		var state = this.state;
		if (v) {
			if (options && options.length && typeof options[0] === 'object') {
				if (typeof v === 'string') {
					options.map((element, i) => {
						if (v === element.key) {
							state.value = element;
							state.q = element[labelKey];
							return;
						}
					});
				} else {
					state.value = v;
					state.q = state.value[labelKey];
				}
			} else if (options && options.length && (typeof options[0] === 'string' || typeof options[0] === 'number')) {
				state.q = v;
				state.value = v;
			}
			this.setState(state);
		}
	}

	render() {
		const {
			name,
			placeholder,
			align,
			options,
			bsStyle,
			error,
			labelKey,
			position,
			hideArrow,
			size,
			className,
			label,
		} = this.props;
		var { q, showResults } = this.state;
		var errorStyles = this.props.errorStyles;
		var style = this.props.style;
		return (
			<div
				ref={node => {
					this.node = node;
				}}
				style={{ position: 'relative', display: 'flex', width: '100%' }}>
				<SelectBox
					onClick={this.handleClick}
					active={showResults}
					size={size}
					bsStyle={bsStyle}
					hideArrow={hideArrow}
					style={{ ...style, ...errorStyles }}
					className={className}>
					{q ? q : <Placeholder>{placeholder}</Placeholder>}
				</SelectBox>
				{showResults && (
					<Options
						list={options}
						size={size}
						onSelect={this.handleSelect}
						align={align}
						name={name}
						labelKey={labelKey}
						position={position}
					/>
				)}
				{error ? <ErrorPopover position="bottom" message={error} /> : null}
			</div>
		);
	}

	handleBlur(value, name) {
		this.setState(
			{
				showResults: false,
			},
			() => this.props.onChange(value, name),
		);
	}

	handleSelect(v) {
		const options = this.props.options || [];
		var n = this.props.name;
		var labelKey = this.props.labelKey ? this.props.labelKey : 'name';
		var q = '';
		if (options && options.length && typeof options[0] === 'object') {
			q = v[labelKey];
			this.setState(
				{
					value: v,
					q: q,
				},
				() => this.handleBlur(v, n),
			);
		} else if (
			options && options.length && (typeof options[0] === 'string' ||
			typeof options[0] === 'number')
		) {
			q = v;
			this.setState(
				{
					value: v,
					q: q,
				},
				() => this.handleBlur(v, n),
			);
		}
	}

	handleClick(e) {
		e.preventDefault();
		document.addEventListener('click', this.handleOutsideClick, false);
		this.setState({
			showResults: true,
		});
	}

	handleOutsideClick(e) {
		try {
			if ((this.node || {}).contains(e.target)) {
				return;
			} else {
				this.setState({
					showResults: false,
				});
			}
		} catch (err) {
			return;
		}
	}
}

export default CogoSelect;
