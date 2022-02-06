import styled from 'styled-components';

import Poster from './Poster';
import Title from './Title';
import Categories from './Categories';
import Date from './Date';
import Description from './Description';
import Buttons from './Buttons';
import Halls from './Halls';

import { GalleryData, ImagesData } from '../../types/GalleryEdit';

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

  input {
    border: none;
    outline: none;
    border-radius: 0.3em;
    padding-left: 0.3em;
    height: 2em;
    box-shadow: rgb(204, 219, 232) 1px 1px 3px 0px inset,
      rgba(255, 255, 255, 0.5) -1px -1px 2px 0.5px inset;
    &::placeholder {
      font-family: 'Pretendard-Regular';
      opacity: 0.6;
    }
  }

  textarea {
    border: none;
    outline: none;
    padding-left: 0.3em;
    border-radius: 0.3em;
    box-shadow: rgb(204, 219, 232) 1px 1px 3px 0px inset,
      rgba(255, 255, 255, 0.5) -1px -1px 2px 0.5px inset;
    &::placeholder {
      font-family: 'Pretendard-Regular';
      opacity: 0.6;
    }
  }

  select {
    border: none;
    outline: none;
    border-radius: 0.3em;
    height: 2em;
    box-shadow: rgb(204, 219, 232) 1px 1px 3px 0px inset,
      rgba(255, 255, 255, 0.5) -1px -1px 2px 0.5px inset;
  }

  button {
    background-color: rgba(242, 243, 245, 0.79);
    padding: 0.3em;
    border: none;
    cursor: pointer;
  }

  & > div > button {
    border-radius: 0.3em;
    color: #ff6e00;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.75);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px,
      rgba(0, 0, 0, 0.1) 0px 2px 3px -1px, rgba(0, 0, 0, 0.1) 0px -1px 0px inset;
    background: rgba(242, 243, 245, 0.79);
    padding: 0.3em;
    border: none;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 680px;
  height: 20em;
  margin-bottom: 2em;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    height: 40em;
    & > div {
      display: flex;
      justify-content: center;
    }
    & > div + div {
      margin-top: 2em;
    }
  }
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

  @media only screen and (max-width: 720px) {
    width: 340px;
    margin-left: 0;
    textarea {
      height: 8em;
    }
  }
`;

interface Props {
  gallery: GalleryData;
  onClickAddHallButton: () => void;
  onClickDeleteHallButton: (id: string) => void;
  onChangeHallName: (id: string, value: string) => void;
  onChangePieceField: (piece: ImagesData) => void;
  onChangeGalleryInputField: (value: string, name: string) => void;
  onChangePosterUrl: (formData: FormData, piece?: ImagesData) => void;
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
          label="포스터 끌어서 놓기"
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
