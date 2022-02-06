import React from 'react';

import styled from 'styled-components';
import { inputArea } from '../../styles/mixins';

import categories from '../../constants/categories';

interface Props {
  onChange: (value: string, name: string) => void;
  category: string;
}

function Categories({ onChange, category }: Props) {
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = e.currentTarget;

    onChange(value, name);
  };
  return (
    <Container>
      <label htmlFor="category">분류</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={handleChange}
      >
        <option value="">select</option>
        {categories.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  display: flex;
  align-items: center;
  select {
    ${inputArea}
    width: auto;
    opacity: 0.7;
    cursor: pointer;
  }
`;
