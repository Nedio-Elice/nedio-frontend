import { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { flexCenter, posterShadow } from '../../styles/mixins';

import { axiosInstanceFormData } from '../../api/api';

import { defaultPoster } from '../../constants/images';
import { ImagesData } from '../../types/GalleryEdit';

interface Props {
  label: string;
  width: string;
  height: string;
  thumbnail: string;
  piece: ImagesData | null;
  onChangePosterUrl: (formData: FormData, piece?: ImagesData) => void;
  onChangePieceImageUrl: ((value: string, name: string) => void) | null;
}

function Poster({
  label,
  thumbnail,
  width,
  height,
  piece = null,
  onChangePosterUrl,
  onChangePieceImageUrl = null,
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
          await axiosInstanceFormData
            .post('api/uploadImage', formData)
            .then((res) => {
              const { url: imageUrl } = res.data;
              onChangePieceImageUrl(imageUrl, 'url');
            })
            .catch((err) => {
              // error handling
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

interface ContainerStyles {
  width: string;
  height: string;
  thumbnail: string | null;
  isDragging: boolean;
}

const Container = styled.div<ContainerStyles>`
  ${flexCenter}

  border-radius: 1em;
  min-width: 230px;
  background-size: 100% 100%;
  ${posterShadow}
  cursor: pointer;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  opacity: ${(props) => (props.thumbnail ? 1 : 0.5)};
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : `url(${defaultPoster})`};

  label {
    display: ${(props) => (props.thumbnail ? 'none' : 'block')};
  }

  input {
    display: none;
  }
`;
