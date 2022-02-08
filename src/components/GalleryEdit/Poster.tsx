import React, { useCallback, useEffect, useRef, useState } from 'react';
import { dragNdrop } from '../../constants/images';
import { MESSAGE } from '../../constants/messages';

import Container from '../../styles/poster';

import { PosterProps } from '../../types/GalleryEdit';

function Poster({
  label,
  width,
  height,
  thumbnail,
  onChangePosterUrl,
  onChangeNotification,
}: PosterProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragRef = useRef<HTMLDivElement | null>(null);

  const imageHandler = useCallback(
    async (selectFile: File): Promise<void> => {
      const isImage = selectFile.type.indexOf('image') >= 0;

      if (!isImage) {
        onChangeNotification(MESSAGE.NOT_IMAGE);
        return;
      }

      const formData = new FormData();

      formData.append('upload', selectFile);

      onChangePosterUrl(formData);
    },
    [onChangePosterUrl, onChangeNotification],
  );

  const handleChangeFiles = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement> | any): Promise<void> => {
      const selectFile: File = e.target.files[0];
      await imageHandler(selectFile);
    },
    [imageHandler],
  );

  const onChangeDropFiles = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement> | any): Promise<void> => {
      const selectFile: File = e.dataTransfer.files[0];
      await imageHandler(selectFile);
    },
    [imageHandler],
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

      onChangeDropFiles(e);
      setIsDragging(false);
    },
    [onChangeDropFiles],
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
      <img src={dragNdrop} alt="drag-drop" />
      <label htmlFor="posterUpload">{label}</label>
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id="posterUpload"
        onChange={handleChangeFiles}
      />
    </Container>
  );
}

export default Poster;
