import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RATINGS = [
	{ title: 'Very Poor', value: 1 },
	{ title: 'Poor', value: 2 },
	{ title: 'Satisfactory', value: 3 },
	{ title: 'Very Good', value: 4 },
	{ title: 'Excellent!', value: 5 },
];

class Rating extends Component {
	constructor(props) {
		super(props);
		const { value } = props;
		this.state = { hoverRating: value };
	}

	handleMouseOver = newHoverRating => this.setState({ hoverRating: newHoverRating });

	handleMouseOut = () => {
		const { value } = this.props;
		this.setState({ hoverRating: value });
	};

	handleChange = newRating => {
		const { onChange } = this.props;
		onChange(newRating);
	};

	render() {
		const { hoverRating } = this.state;
		const { title: label, size, layoutType } = this.props;

		return (
			<Container className={layoutType}>
				<Label className={[size, layoutType].join(' ')}>{label}</Label>
				<Stars className={size}>
					{RATINGS.map(({ value, title }) => {
						const className = [value <= hoverRating ? 'selected' : '', size].join(' ');

						return (
							<Star
								key={value}
								className={className}
								onClick={() => this.handleChange(value)}
								onMouseOver={() => this.handleMouseOver(value)}
								onMouseOut={this.handleMouseOut}
								onFocus={() => {}}
								onBlur={() => {}}
								title={title}>
								★
							</Star>
						);
					})}
				</Stars>
			</Container>
		);
	}
}

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&.vertical {
		flex-direction: column;
	}
`;

const Label = styled.div`
	display: flex;
	flex: 1;
	font-family: GreyCliffCF-Bold;
	color: #606060;

	&.sm {
		font-size: 16px;
	}

	&.md {
		font-size: 16px;
	}

	&.lg {
		font-size: 18px;
	}

	&.vertical {
		margin-bottom: 15px;
	}
`;

const Stars = styled.div`
	flex: 2;
	display: flex;
	justify-content: space-between;
	width: 100%;

	& > * {
		flex: 1;
		text-align: center;
	}

	&.sm {
		min-width: 100px;
		max-width: 250px;
	}

	&.md {
		min-width: 200px;
		max-width: 450px;
	}

	&.lg {
		min-width: 300px;
		max-width: 650px;
	}
`;

const Star = styled.label`
	display: inline-block;
	padding: 3px;
	vertical-align: middle;
	line-height: 1;
	font-size: 1.5em;
	color: #ababab;
	transition: color 0.2s ease-out;

	&:hover {
		cursor: pointer;
	}

	&.selected {
		color: #f89838;
	}

	&.disabled {
		&:hover {
			cursor: default;
		}
	}

	&.sm {
		font-size: 1.5em;
	}

	&.md {
		font-size: 2.2em;
	}

	&.lg {
		font-size: 2.8em;
	}
`;

Rating.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.string.isRequired,
	size: PropTypes.string,
	title: PropTypes.string,
	layoutType: PropTypes.string,
};

Rating.defaultProps = {
	size: 'sm',
	title: '',
	layoutType: 'horizontal',
};

export default Rating;
