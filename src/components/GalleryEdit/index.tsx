import styled from 'styled-components';

import Poster from './Poster';
import Title from './Title';
import Categories from './Categories';
import Date from './Date';
import Description from './Description';
import Buttons from './Buttons';
import Halls from './Halls';

const Container = styled.div`
  box-sizing: border-box;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  height: 20em;
  margin-bottom: 2em;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 1em;
  }

  div > label {
    min-width: fit-content;
    margin-right: 0.5em;
  }
`;

interface HallProps {
  id: number;
  name: string;
}

interface Props {
  halls: HallProps[];
  onClickAddHallButton: () => void;
  onClickDeleteHallButton: (id: number) => void;
  onChangeHallName: (parameter: HallProps) => void;
}

function GalleryEdit({
  halls,
  onClickAddHallButton,
  onClickDeleteHallButton,
  onChangeHallName,
}: Props) {
  return (
    <Container>
      <Wrapper>
        <Poster />
        <Inputs>
          <Title />
          <Categories />
          <Date />
          <Description />
        </Inputs>
      </Wrapper>
      <Buttons onClickAddHallButton={onClickAddHallButton} />
      <Halls
        halls={halls}
        onChangeHallName={onChangeHallName}
        onClickDeleteHallButton={onClickDeleteHallButton}
      />
    </Container>
  );
}

export default GalleryEdit;
