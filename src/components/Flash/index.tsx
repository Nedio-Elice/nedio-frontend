import styled, { keyframes } from 'styled-components';
import { flexCenter } from '../../styles/mixins';
import { GalleryProps } from '../../types/GalleryEdit';

function Flash({ notification }: Partial<GalleryProps>) {
  if (notification) {
    return <Container>{notification}</Container>;
  }

  return <div />;
}

export default Flash;

const popUp = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  ${flexCenter}
  width: 100%;
  height: 2em;
  background-color: #ee9047;
  color: white;
  animation: ${popUp} 5s ease-out backwards;
  opacity: 0;
`;
