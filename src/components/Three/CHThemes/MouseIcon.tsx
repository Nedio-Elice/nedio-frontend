import styled from 'styled-components';

function MouseIcon() {
  return <Mouse />;
}

export default MouseIcon;

const Mouse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  cursor: pointer;
  border: 2px solid white;
`;
