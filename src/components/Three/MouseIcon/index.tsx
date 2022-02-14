import styled from 'styled-components';

function MouseIcon() {
  return <Icon />;
}

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.7);
  z-index: 1;
`;

export default MouseIcon;
