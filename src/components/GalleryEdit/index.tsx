import styled from 'styled-components';

import PosterField from './PosterField';
import TitleField from './TitleField';
import CategoriesField from './CategoriesField';
import DateField from './DateField';
import DescriptionField from './DescriptionField';
import ButtonsField from './ButtonsField';
import HallField from './HallField';

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
  onChangeHallName: (parameter: HallProps) => void;
}

function GalleryEdit({ halls, onClickAddHallButton, onChangeHallName }: Props) {
  return (
    <Container>
      <Wrapper>
        <PosterField />
        <Inputs>
          <TitleField />
          <CategoriesField />
          <DateField />
          <DescriptionField />
        </Inputs>
      </Wrapper>
      <ButtonsField onClickAddHallButton={onClickAddHallButton} />
      <HallField halls={halls} onChangeHallName={onChangeHallName} />
    </Container>
  );
}

export default GalleryEdit;
