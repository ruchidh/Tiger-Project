import styled from 'styled-components';

const Group = styled.div`
	position: relative;
	display: table;
	border-collapse: separate;

	* {
		display: inline-block;
		border-radius: 0;
	}

	& *:first-child {
		border-top-left-radius: ${({ borderTopLeftRadius = '4px' }) => borderTopLeftRadius};
		border-top-right-radius: ${({ borderTopRightRadius = '4px' }) => borderTopRightRadius};
	}

	& *:last-child {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	select {
		width: initial;
	}

	input {
		width: auto;
		display: inline-block;
	}
`;

export default Group;
