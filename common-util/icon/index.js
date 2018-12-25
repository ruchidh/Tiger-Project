import styled from 'styled-components';

export default styled.img`
	width: ${props => (props.size ? props.size : 'auto')};
	height: ${props => (props.size ? props.size : 'auto')};
	margin-right: ${props => (props.noMargin ? '0px' : '10px')};
`;
