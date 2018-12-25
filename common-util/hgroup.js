import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex: ${({ flex }) => (flex ? flex : 1)} !important;

	& > * {
		flex: 1;
		margin: 0px ${({ spacing }) => (spacing ? spacing : '5px')};

		&:first-child {
			margin-left: 0px;
		}

		&:last-child {
			margin-right: 0px;
		}
	}
`;
