import React, { memo } from 'react';

import styled from 'styled-components';
import { inputArea, transparentLabel } from '../../styles/mixins';

import categories from '../../constants/categories';
import { InputProps } from '../../types/GalleryEdit';

function Categories({
  onChange,
  category,
}: Pick<InputProps, 'category' | 'onChange'>) {
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = e.currentTarget;

    onChange({ value, name });
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
        {categories.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default memo(Categories);

const Container = styled.div`
  display: flex;
  align-items: center;
  select {
    ${inputArea}
    width: auto;
    opacity: 0.5;
    cursor: pointer;
  }
  ${transparentLabel}
`;
