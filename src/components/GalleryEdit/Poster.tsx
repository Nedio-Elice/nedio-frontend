import { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import axios from 'axios';
import { url } from '../../api/api';

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
  border-radius: 1em;
  min-width: 230px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) =>
    props.thumbnail
      ? `url(${props.thumbnail})`
      : `url('https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2FsbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60')`};
  background-size: 100% 100%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  opacity: ${(props) => (props.thumbnail ? 1 : 0.5)};
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
  onChangePosterUrl: (formData: FormData, piece?: Piece) => void;
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

      formData.append('upload', selectFile);

      if (piece && onChangePieceImageUrl) {
        onChangePosterUrl(formData, piece);

        (async () => {
          await axios({
            method: 'POST',
            url: `${url}api/uploadImage`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
          })
            .then((res) => {
              const { url: imageUrl } = res.data;
              onChangePieceImageUrl(imageUrl, 'imageUrl');
            })
            .catch((err) => {
              // handle error
              console.log(err);
            });
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
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer?.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

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
