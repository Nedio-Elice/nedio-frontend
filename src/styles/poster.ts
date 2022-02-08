import styled from 'styled-components';
import { defaultPoster } from '../constants/images';
import { flexCenter, posterShadow } from './mixins';

interface PosterStyles {
  width: string;
  height: string;
  thumbnail: string | null;
  isDragging: boolean;
}

const Poster = styled.div<PosterStyles>`
  ${flexCenter}

  position: relative;
  border-radius: 1em;
  min-width: 230px;
  background-size: 100% 100%;
  ${posterShadow}
  cursor: pointer;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  opacity: ${(props) => (props.thumbnail ? 1 : 0.5)};
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : `url(${defaultPoster})`};

  img {
    position: absolute;
    display: ${(props) => (props.thumbnail ? 'none' : 'block')};
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 100px;
    height: 100px;
    opacity: 0.3;
  }

  label {
    display: ${(props) => (props.thumbnail ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 5em;
    z-index: 2;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export default Poster;
