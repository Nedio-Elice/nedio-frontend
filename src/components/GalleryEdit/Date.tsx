import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    cursor: pointer;
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }
`;

interface Props {
  onChange: (value: string, name: string) => void;
  startDate: string;
  endDate: string;
}

function Date({ onChange, startDate, endDate }: Props) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onChange(value, name);
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
