import { memo } from 'react';

import styled from 'styled-components';
import { inputArea, placeholders, transparentLabel } from '../../styles/mixins';
import { InputProps } from '../../types/GalleryEdit';

function Title({
  label,
  title,
  placeholder,
  onChange,
}: Pick<InputProps, 'label' | 'title' | 'placeholder' | 'onChange'>) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    onChange({ value, name });
  };

  return (
    <Container>
      <label htmlFor="title">{label}</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  );
}

export default memo(Title);

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    ${inputArea}
    ${placeholders}
  }
  ${transparentLabel}
`;
