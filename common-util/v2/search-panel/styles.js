import styled from 'styled-components';
import { connect } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

import { COLOR, FONT } from '../../../util/v2/theme';
import breakpoints from '../../../util/v2/breakpoint';

export const OuterContainer = styled.div`
	width: 100%;
	height: auto;
	z-index: 1064;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	@media (max-width: ${breakpoints.LG}px) {
		position: relative;
		margin-bottom: 32px;
		z-index: 1;
	}
`;

const mapStateToProps = ({
	profile: {
		announcementStripHidden,
		profile,
		profile: { assisted_by_detail },
	},
}) => ({
	isVisible:
		(!isEmpty((profile || {}).announcement_strip) || 'christmas')
		&& isEmpty(assisted_by_detail)
		&& !announcementStripHidden,
});

export const Container = connect(mapStateToProps)(styled.div`
	background-color: ${COLOR.BLUE};
	width: 100%;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
	border-radius: 4px;
	max-height: ${({ canShow, isVisible }) => (canShow && isVisible ? 'calc(100vh - 100px)' : 'calc(100vh - 150px)')};
	overflow-y: auto;
	overflow-x: hidden;

	@media (max-width: ${breakpoints.LG}px) {
		position: relative;
		margin-bottom: 32px;
		z-index: 140;
		width: 100%;
		max-height: 5000px;
		overflow: hidden;
	}
`);

export const Tab = styled.div`
	font-size: 14px;
	letter-spacing: 0;
	color: ${({ active }) => (active ? COLOR.WHITE : COLOR.DULL_BLUE)};
	font-family: ${FONT.EXTRA_BOLD};
	border-bottom: 4px solid ${({ active }) => (active ? COLOR.WHITE : 'none')};
	padding: 16px 16px 10px;
	display: inline-block;
	cursor: pointer;
	transition: 0.1s all linear;

	&:hover {
		color: ${({ active }) => (active ? COLOR.WHITE : '#d6ecff')};
	}
`;
