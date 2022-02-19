import { memo } from 'react';

import styled, { keyframes } from 'styled-components';
import { flexCenter } from '../../styles/mixins';
import { GalleryProps } from '../../types/GalleryEdit';

function Flash({ notification }: Partial<GalleryProps>) {
  if (notification) {
    return <Container>{notification}</Container>;
  }

  return <div />;
}

export default memo(Flash);

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
  position: fixed;
  top: 10;
  left: 0;
  z-index: 2;
  ${flexCenter}
  width: 100%;
  height: 2.5em;
  background-image: linear-gradient(
    to right bottom,
    #bc854e,
    #cc8e4d,
    #db964c,
    #e3a056,
    #ebaa60,
    #f3b46a,
    #f6c282,
    #f9d09a,
    #fcdeb3
  );
  color: white;
  animation: ${popUp} 5s ease-out backwards;
  font-size: 1.2em;
  opacity: 0;
`;
