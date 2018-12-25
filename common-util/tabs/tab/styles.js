import styled from 'styled-components';

export const Li = styled.li`
	position: relative;
	display: block;
	float: left;
	margin-bottom: -1px;

	> a {
		position: relative;
		display: block;
		padding: 10px 15px;
		cursor: pointer;
		color: black;
		padding-left: 20px;
		padding-right: 20px;
		margin-right: 2px;
		border: 1px solid transparent;
		border-radius: 4px 4px 0 0;
		font-family: GreycliffCF-Medium;

		> img {
			max-width: none;
		}

		&:hover,
		&:focus {
			text-decoration: none;
			background-color: #eee;
		}
	}

	&.disabled {
		> a {
			color: #777;
			&:hover,
			&:focus {
				color: #777;
				text-decoration: none;
				cursor: not-allowed;
				background-color: transparent;
			}
		}
	}

	&.active {
		> a {
			background-color: #e9e9e9;
			border-top: 1px solid #ddd;
			border-left: 1px solid #ddd;
			border-right: 1px solid #ddd;
			&:hover,
			&:focus {
				color: black;
				background-color: #e9e9e9;
			}
		}
	}

	&.light {
		background-color: #fff;
		border-radius: 5px;
		transition: 0.1s all linear;

		> a {
			color: #268de5;

			display: flex;
			justify-content: center;
			width: 100%;
			transition: 0.1s all linear;

			&:hover,
			&:focus {
				text-decoration: none;
				background-color: #f2f9ff;
			}
		}

		&.active {
			background-color: #268de5;

			> a {
				background-color: #268de5;
				border: none;
				color: #fff;

				&:hover,
				&:focus {
					background-color: #1f81d1;
				}
			}
		}
	}
`;

export default Li;
