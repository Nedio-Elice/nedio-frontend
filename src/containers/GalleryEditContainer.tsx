import { useState } from 'react';
import styled from 'styled-components';

import GalleryEdit from '../components/GalleryEdit';
import HallAddForm from '../components/GalleryEdit/HallAddForm';

const State = styled.div`
  position: absolute;
  top: 30%;
  right: 30%;
  display: flex;
  flex-direction: column;
  ul {
    margin-left: 10%;
  }
`;

interface WorksProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface HallProps {
  id: string;
  name: string;
  works: WorksProps[];
}

interface GalleryProps {
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  description: string;
  posterUrl: string;
  halls: HallProps[];
}

function GalleryEditContainer() {
  const initialValue = {
    title: '',
    category: '',
    startDate: '',
    endDate: '',
    description: '',
    posterUrl: '',
    halls: [],
  };
  // TODO: 리덕스 추가
  const [gallery, setGallery] = useState<GalleryProps>(initialValue);

  const { halls, title, category, startDate, endDate, description, posterUrl } =
    gallery;

  const handleClickAddHallButton = () => {
    const id = new Date().valueOf().toString();

    setGallery((current) => {
      return {
        ...current,
        halls: [
          ...current.halls,
          {
            id,
            name: '',
            works: [],
          },
        ],
      };
    });
  };

  const handleChangeHallName = (id: string, value: string) => {
    const newHalls = halls.map((hall) =>
      hall.id === id ? { ...hall, name: value } : hall,
    );

    setGallery((current) => {
      return {
        ...current,
        halls: newHalls,
      };
    });
  };

  const handleClickDeleteHallButton = (id: string) => {
    const newHalls = halls.filter((hall) => hall.id !== id);

    setGallery((current) => {
      return {
        ...current,
        halls: newHalls,
      };
    });
  };

  const sortByIndex = (works: WorksProps[]) => {
    const newWorks = works.sort(
      (a, b) =>
        parseInt(a.id.split('-')[1], 10) - parseInt(b.id.split('-')[1], 10),
    );
    return newWorks;
  };

  const handleClickAddPieceButton = (piece: WorksProps) => {
    const { id } = piece;

    const hallId = id.split('-')[0];

    const newHalls = halls.map((hall) =>
      hall.id === hallId
        ? {
            ...hall,
            works: sortByIndex([...hall.works, piece]),
          }
        : hall,
    );

    setGallery((current) => {
      return {
        ...current,
        halls: newHalls,
      };
    });
  };

  const handleChangeGalleryInputField = (value: string, name: string) => {
    setGallery((current) => {
      return {
        ...current,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <GalleryEdit
        onClickAddHallButton={handleClickAddHallButton}
        onClickDeleteHallButton={handleClickDeleteHallButton}
        onChangeHallName={handleChangeHallName}
        onClickAddPieceButton={handleClickAddPieceButton}
        onChangeGalleryInputField={handleChangeGalleryInputField}
        gallery={gallery}
      />
      <State>
        <span>{title}</span>
        <span>{category}</span>
        <span>{`${startDate}-${endDate}`}</span>
        <span>{description}</span>
        <div>
          {halls &&
            halls.map((hall) => {
              return (
                <div>
                  <span>{hall.name}</span>
                  {hall.works &&
                    hall.works.map((work) => {
                      return (
                        <ul>
                          <li>{work.id}</li>
                          <li>{work.title}</li>
                          <li>{work.description}</li>
                        </ul>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </State>
    </div>
  );
}

export default GalleryEditContainer;
