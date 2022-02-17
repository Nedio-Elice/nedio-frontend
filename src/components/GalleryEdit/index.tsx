import { memo } from 'react';

import styled from 'styled-components';
import {
  backgroundGradient,
  greyButton,
  hoverOrange,
  inputPadding,
  posterShadow,
} from '../../styles/mixins';

import { GalleryProps } from '../../types/GalleryEdit';

import Description from './Description';
import Categories from './Categories';
import Buttons from './Buttons';
import Poster from './Poster';
import Flash from '../Flash';
import Title from './Title';
import Halls from './Halls';
import Date from './Date';

function GalleryEdit({
  mode,
  halls,
  gallery,
  notification,
  onChangeHallName,
  onChangeHallTheme,
  onChangePosterUrl,
  onChangePieceField,
  onClickUpdateGallery,
  onChangeNotification,
  onClickAddHallButton,
  onClickDeleteHallButton,
  onChangeGalleryInputField,
}: GalleryProps) {
  const { title, category, startDate, endDate, description, posterUrl } =
    gallery;

  return (
    <Container>
      <Flash notification={notification} />
      <Wrapper>
        <Poster
          label="Drag&Drop your poster here"
          thumbnail={posterUrl}
          width="15em"
          height="20em"
          onChangePosterUrl={onChangePosterUrl}
          onChangeNotification={onChangeNotification}
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
        mode={mode}
        onClickAddHallButton={onClickAddHallButton}
        onClickUpdateGallery={onClickUpdateGallery}
      />
      <Halls
        halls={halls}
        onChangeHallName={onChangeHallName}
        onChangeHallTheme={onChangeHallTheme}
        onClickDeleteHallButton={onClickDeleteHallButton}
        onChangePieceField={onChangePieceField}
        onChangeNotification={onChangeNotification}
      />
    </Container>
  );
}

export default memo(GalleryEdit);

const Container = styled.div`
  position: relative;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  width: 100vw;
  min-width: 365px;
  min-height: 100vh;
  height: fit-content;

  ${backgroundGradient}

  & > div > button {
    font-size: 1em;
    padding: 1.2em 0.8em;
    ${greyButton}
    ${hoverOrange}
  }

  textarea {
    resize: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;
  width: 680px;
  height: 20em;

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
  width: 100%;
  padding: 1em;
  border-radius: 1em;

  ${posterShadow}

  input {
    ${inputPadding}
  }

  div + div {
    margin-top: 0.5em;
  }

  div > label {
    min-width: fit-content;
    margin-right: 0.5em;
  }

  @media only screen and (max-width: 720px) {
    width: 340px;
    margin-left: 0;
    textarea {
      height: 10em;
    }
  }
`;
