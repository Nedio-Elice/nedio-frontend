import React from 'react';

import styled from 'styled-components';
import { inputArea } from '../../styles/mixins';
import { InputProps } from '../../types/GalleryEdit';

function Date({
  onChange,
  startDate,
  endDate,
}: Pick<InputProps, 'onChange' | 'startDate' | 'endDate'>) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onChange({ value, name });
  };
  return (
    <Container>
      <label htmlFor="date">기간</label>
      <input
        type="date"
        id="date"
        name="startDate"
        value={startDate}
        onChange={handleChange}
      />
      -
      <input
        type="date"
        id="date"
        name="endDate"
        value={endDate}
        onChange={handleChange}
      />
    </Container>
  );
}

export default Date;

const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    ${inputArea}
    opacity: 0.7;
    cursor: pointer;
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }
`;
