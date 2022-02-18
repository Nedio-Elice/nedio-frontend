import { memo } from 'react';

import styled from 'styled-components';
import {
  inputArea,
  inputPadding,
  placeholders,
  transparentLabel,
} from '../../styles/mixins';

import { InputProps } from '../../types/GalleryEdit';

function Description({
  label,
  description,
  placeholder,
  onChange,
}: Pick<InputProps, 'label' | 'description' | 'placeholder' | 'onChange'>) {
  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.currentTarget;

    onChange({ value, name });
  };

  return (
    <Container>
      <label htmlFor="description">{label}</label>
      <textarea
        wrap="virtual"
        name="description"
        id="description"
        value={description}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  );
}

export default memo(Description);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: start;
  textarea {
    ${inputArea}
    ${placeholders}
    width: 100%;
    height: 100%;
    padding: 0.5em;
    overflow: auto;
  }
  ${transparentLabel}
`;
