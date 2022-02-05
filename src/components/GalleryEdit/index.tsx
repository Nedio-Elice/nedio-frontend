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
  align-items: center;
  padding: 5%;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
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
  onClickUpdateGallery: () => void;
}

function GalleryEdit({
  gallery,
  onClickAddHallButton,
  onClickDeleteHallButton,
  onChangeHallName,
  onChangePieceField,
  onChangeGalleryInputField,
  onChangePosterUrl,
  onClickUpdateGallery,
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
      <Buttons
        onClickAddHallButton={onClickAddHallButton}
        onClickUpdateGallery={onClickUpdateGallery}
      />
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
