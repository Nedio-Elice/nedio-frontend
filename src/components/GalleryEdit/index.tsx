import styled from 'styled-components';

import Poster from './Poster';
import Title from './Title';
import Categories from './Categories';
import Date from './Date';
import Description from './Description';
import Buttons from './Buttons';
import Halls from './Halls';

import { Gallery, Piece } from '../../types/GalleryEdit';

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

interface Props {
  gallery: Gallery;
  onClickAddHallButton: () => void;
  onClickDeleteHallButton: (id: string) => void;
  onChangeHallName: (id: string, value: string) => void;
  onChangePieceField: (piece: Piece) => void;
  onChangeGalleryInputField: (value: string, name: string) => void;
  onChangePosterUrl: (formData: any) => void;
}

function GalleryEdit({
  gallery,
  onClickAddHallButton,
  onClickDeleteHallButton,
  onChangeHallName,
  onChangePieceField,
  onChangeGalleryInputField,
  onChangePosterUrl,
}: Props) {
  const { title, category, startDate, endDate, description, halls, posterUrl } =
    gallery;

  return (
    <Container>
      <Wrapper>
        <Poster
          label="포스터 업로드"
          thumbnail={posterUrl}
          width="15em"
          height="20em"
          onChangePosterUrl={onChangePosterUrl}
          onChangePieceImageUrl={null}
          piece={null}
        />
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
        onChangePieceField={onChangePieceField}
        onChangePosterUrl={onChangePosterUrl}
      />
    </Container>
  );
}

export default GalleryEdit;
