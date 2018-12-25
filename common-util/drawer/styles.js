import styled from 'styled-components';
import posed from 'react-pose';

const extendedWidth = 100;

const AnimatedOverlay = posed.div({
	enter: { opacity: 1 },
	exit: { opacity: 0 },
});

export const Overlay = styled(AnimatedOverlay)`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255,255,255,0.6);
  z-index: 1000;
  background-image: ${p => (p.image ? `url(${p.image})` : 'none')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${p => (p.blur ? 'blur(3px)' : 'none')};
`;

const AnimatedContainer = posed.div({
	exit: { x: p => (p.placement === 'left' ? -300 : 0) },
	enter: { x: p => (p.placement === 'left' ? 0 : -300) },
});

export const Container = styled(AnimatedContainer)`
  width: ${p => `${p.width + extendedWidth}px`};
  background-color: #FFF;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  z-index: 1100;
  position: fixed;
  height: 100%;
  top: 0;
  left: ${p => (p.placement === 'left' ? `${-extendedWidth}px` : 'initial')};
  right: ${p => (p.placement === 'left' ? 'initial' : `-${p.width + extendedWidth}px`)};
  bottom: 0;
`;

export const Close = styled.button`
  padding: 16px;
  background-image: url('/static/app/images/drawer-close.svg');
  background-size: 16px 16px;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 16px;
  right: 16px;
  border: 0;
  cursor: pointer;
  height: 16px;
  width: 16px;
  box-sizing: content-box;

  &:focus, &:active {
    outline: none;
  }
`;

export const Title = styled.p`
  font-family: GreycliffCF-Bold;
  font-size: 16px;
  color: #404040;
  letter-spacing: 0.2px;
  margin: 0;
  padding: 24px;
  margin-top: 8px;
`;

export const InnerContainer = styled.div`
  display: block;
  position: relative;
  width: ${p => `${p.width}px`};
  margin-left: ${p => (p.placement === 'left' ? 'auto' : 'initial')};
`;

export const BodyContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;
