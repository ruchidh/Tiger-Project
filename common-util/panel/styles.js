import styled from 'styled-components';

const Panel = styled.div`
	padding: 16px;
	margin-bottom: 10px;
	background-color: ${({ bg }) => bg};
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	display: ${({ display }) => display};
	box-shadow: 0 2px 4px 0 rgba(217, 217, 217, 0.5);
`;

Panel.defaultProps = {
	bg: 'white',
	display: 'block',
};

export default Panel;
