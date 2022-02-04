import { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { fetchMockImageUrl } from '../../api/mockApi';

import { Piece } from '../../types/GalleryEdit';

interface ContainerProps {
  width: string;
  height: string;
  thumbnail: string | null;
  isDragging: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 1em;
  min-width: 230px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : 'none'};
  background-size: 100% 100%;
  cursor: pointer;

  label {
    display: ${(props) => (props.thumbnail ? 'none' : 'block')};
  }

  input {
    display: none;
  }
`;

interface Props {
  label: string;
  width: string;
  height: string;
  thumbnail: string;
  onChangePosterUrl: (formData: any, piece?: Piece) => void;
  onChangePieceImageUrl: ((value: string, name: string) => void) | null;
  piece: Piece | null;
}

function Poster({
  label,
  thumbnail,
  width,
  height,
  onChangePosterUrl,
  onChangePieceImageUrl = null,
  piece = null,
}: Props) {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragRef = useRef<HTMLDivElement | null>(null);

  const onChangeFiles = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement> | any): Promise<void> => {
      const selectFile: File = e.dataTransfer.files[0];

      const isValid = selectFile.type.indexOf('image') >= 0;

      if (!isValid) return;

      const formData = new FormData();

      formData.append('image', selectFile);

      // console.log(formData.values().next());

      if (piece && onChangePieceImageUrl) {
        onChangePosterUrl(formData, piece);

        (async () => {
          const imageUrl = await fetchMockImageUrl(formData);
          onChangePieceImageUrl(imageUrl, 'imageUrl');
        })();

        return;
      }

      onChangePosterUrl(formData);
    },
    [piece, onChangePosterUrl, onChangePieceImageUrl],
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('drag in')
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('drag out')
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    // console.log('drag over')

    if (e.dataTransfer?.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      // console.log('drop')

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <Container
      width={width}
      height={height}
      ref={dragRef}
      isDragging={isDragging}
      thumbnail={thumbnail}
    >
      <label htmlFor="posterUpload">{label}</label>
      <input type="file" accept=".png, .jpg, .jpeg" id="posterUpload" />
    </Container>
  );
}

export default Poster;
