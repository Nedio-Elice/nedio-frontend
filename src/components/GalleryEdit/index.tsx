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
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  height: 20em;
  margin-bottom: 2em;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;

  div + div {
    margin-top: 1em;
  }

  div > label {
    min-width: fit-content;
    margin-right: 0.5em;
  }
`;

interface WorksProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface HallProps {
  id: number;
  name: string;
  works?: WorksProps[];
}

interface GalleryProps {
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  description: string;
  posterUrl: string;
  halls: HallProps[];
}

interface Props {
  gallery: GalleryProps;
  onClickAddHallButton: () => void;
  onClickDeleteHallButton: (id: number) => void;
  onChangeHallName: (parameter: HallProps) => void;
  onClickAddPieceButton: (piece: WorksProps) => void;
  onChangeGalleryInputField: (value: string, name: string) => void;
}

function GalleryEdit({
  gallery,
  onClickAddHallButton,
  onClickDeleteHallButton,
  onChangeHallName,
  onClickAddPieceButton,
  onChangeGalleryInputField,
}: Props) {
  const { title, category, startDate, endDate, description, halls } = gallery;

  return (
    <Container>
      <Wrapper>
        <Poster label="포스터 업로드" width="15em" height="20em" />
        <Inputs>
          <Title
            label="제목"
            title={title}
            placeholder="갤러리 제목을 입력해주세요"
            onChange={onChangeGalleryInputField}
          />
          <Categories
            onChange={onChangeGalleryInputField}
            category={category}
          />
          <Date
            onChange={onChangeGalleryInputField}
            startDate={startDate}
            endDate={endDate}
          />
          <Description
            label="설명"
            description={description}
            placeholder="갤러리에 대해 소개해주세요"
            onChange={onChangeGalleryInputField}
          />
        </Inputs>
      </Wrapper>
      <Buttons onClickAddHallButton={onClickAddHallButton} />
      <Halls
        halls={halls}
        onChangeHallName={onChangeHallName}
        onClickDeleteHallButton={onClickDeleteHallButton}
        onClickAddPieceButton={onClickAddPieceButton}
      />
    </Container>
  );
}

export default GalleryEdit;
