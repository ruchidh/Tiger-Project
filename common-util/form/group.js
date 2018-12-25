import styled from 'styled-components';

const ERROR = '#a94442';

const Group = styled.div`
	margin-bottom: 15px;

	&:after {
		clear: both;
	}

	&:before {
		clear: both;
	}

	&.required label:after {
		color: #ea3f38;
		content: '*';
		position: absolute;
		margin-left: 2px;
	}

	&.error {
		label {
			color: ${ERROR};
		}

		input {
			border-color: ${ERROR};
		}
	}
`;

export default Group;
