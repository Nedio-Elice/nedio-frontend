import React, { memo } from 'react';

import styled from 'styled-components';
import { inputArea, transparentLabel } from '../../styles/mixins';

import { HallThemeSelect } from '../../types/GalleryEdit';

function Themes({
  onChangeHallTheme,
  hallIndex,
  label,
  theme,
}: HallThemeSelect) {
  const handleChangeThemes = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    onChangeHallTheme({ index: hallIndex, value });
  };

  return (
    <Container>
      <label htmlFor="hallTheme">{label}</label>
      <select
        id="hallTheme"
        name="hallTheme"
        value={theme}
        onChange={handleChangeThemes}
      >
        <option value="">테마 선택</option>
        <option value="Modern">Modern</option>
        <option value="Jazz">Jazz</option>
        <option value="Dome">Dome</option>
      </select>
    </Container>
  );
}

export default memo(Themes);

const Container = styled.div`
  display: flex;
  align-items: center;
  select {
    ${inputArea}
    width: auto;
    height: 2.3em;
    opacity: 0.5;
    cursor: pointer;
  }
  ${transparentLabel}
`;
