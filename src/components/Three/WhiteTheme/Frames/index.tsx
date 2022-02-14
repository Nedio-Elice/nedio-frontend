import { Fragment } from 'react';
import {
  FAR_FROM_DEFAULT_POSITION,
  WALL_HEIGHT,
  WALL_WIDTH,
} from '../Constants';
import Picture from '../Picture';
import Frame from '../Frame';

const fixedFrame = [
  {
    frame_id: 0,
    framePosition: [
      -WALL_WIDTH / 4 + FAR_FROM_DEFAULT_POSITION,
      WALL_HEIGHT / 3,
      -10 - FAR_FROM_DEFAULT_POSITION + 0.8,
    ],
    picturePosition: [
      -WALL_WIDTH / 4 + FAR_FROM_DEFAULT_POSITION,
      WALL_HEIGHT / 3,
      -10 - FAR_FROM_DEFAULT_POSITION + 0.5,
    ],
    spotPos: [-2.5, 35, -20],
  },
  {
    frame_id: 1,
    framePosition: [
      WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.8,
      WALL_HEIGHT / 3,
      5,
    ],
    picturePosition: [
      WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.5,
      WALL_HEIGHT / 3,
      5,
    ],
    rotation: [0, -Math.PI / 2, 0],
    spotPos: [45, 35, 5],
  },
  {
    frame_id: 2,
    framePosition: [
      WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.8,
      WALL_HEIGHT / 3,
      -22,
    ],
    picturePosition: [
      WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.5,
      WALL_HEIGHT / 3,
      -22,
    ],
    rotation: [0, -Math.PI / 2, 0],
    spotPos: [45, 35, -22],
  },
  {
    frame_id: 3,
    framePosition: [
      WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.8,
      WALL_HEIGHT / 3,
      -49,
    ],
    picturePosition: [
      WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.5,
      WALL_HEIGHT / 3,
      -49,
    ],
    rotation: [0, -Math.PI / 2, 0],
    spotPos: [45, 35, -49],
  },
  {
    frame_id: 4,
    framePosition: [
      -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION + 0.4,
      WALL_HEIGHT / 3,
      -WALL_WIDTH + 24.5,
    ],
    picturePosition: [
      -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION,
      WALL_HEIGHT / 3,
      -WALL_WIDTH + 24.5,
    ],
    rotation: [0, Math.PI / 2, 0],
    spotPos: [-45, 35, -WALL_WIDTH + 24.5],
  },
  {
    frame_id: 5,
    framePosition: [
      -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION + 0.4,
      WALL_HEIGHT / 3,
      -WALL_WIDTH - 3.5,
    ],
    picturePosition: [
      -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION,
      WALL_HEIGHT / 3,
      -WALL_WIDTH - 3.5,
    ],
    rotation: [0, Math.PI / 2, 0],
    spotPos: [-45, 35, -WALL_WIDTH - 3.5],
  },
  {
    frame_id: 6,
    framePosition: [
      -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION + 0.4,
      WALL_HEIGHT / 3,
      -WALL_WIDTH - 29.5,
    ],
    picturePosition: [
      -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION,
      WALL_HEIGHT / 3,
      -WALL_WIDTH - 29.5,
    ],
    rotation: [0, Math.PI / 2, 0],
    spotPos: [-45, 35, -WALL_WIDTH - 29.5],
  },
  {
    frame_id: 7,
    framePosition: [
      FAR_FROM_DEFAULT_POSITION - 47.75,
      WALL_HEIGHT / 3,
      FAR_FROM_DEFAULT_POSITION - 134,
    ],
    picturePosition: [
      FAR_FROM_DEFAULT_POSITION - 47.75,
      WALL_HEIGHT / 3,
      FAR_FROM_DEFAULT_POSITION - 134.5,
    ],
    spotPos: [FAR_FROM_DEFAULT_POSITION - 47.75, 35, -110],
  },
  {
    frame_id: 8,
    framePosition: [
      FAR_FROM_DEFAULT_POSITION - 18.25,
      WALL_HEIGHT / 3,
      FAR_FROM_DEFAULT_POSITION - 134,
    ],
    picturePosition: [
      FAR_FROM_DEFAULT_POSITION - 18.25,
      WALL_HEIGHT / 3,
      FAR_FROM_DEFAULT_POSITION - 134.5,
    ],
    spotPos: [FAR_FROM_DEFAULT_POSITION - 18.25, 35, -110],
  },
  {
    frame_id: 9,
    framePosition: [
      FAR_FROM_DEFAULT_POSITION + 12.25,
      WALL_HEIGHT / 3,
      FAR_FROM_DEFAULT_POSITION - 134,
    ],
    picturePosition: [
      FAR_FROM_DEFAULT_POSITION + 12.25,
      WALL_HEIGHT / 3,
      FAR_FROM_DEFAULT_POSITION - 134.5,
    ],
    spotPos: [FAR_FROM_DEFAULT_POSITION + 12.25, 35, -110],
  },
];

const tempData = {
  galleryId: '61ff83405afcfe9f8f668358',
  hallName: '고양이관',
  imagesData: [
    {
      imageUrl:
        'https://media.istockphoto.com/photos/funny-black-cat-looks-through-ripped-hole-in-yellow-paper-peekaboo-picture-id1150719858?b=1&k=20&m=1150719858&s=170667a&w=0&h=W-DqOjF0KPH0kilyBhbVwJBeK9teyKjma4diNgOyafw=',
      imageDescription: '설명1',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1501743029101-21a00d6a3fb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTA3fHxjYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      imageDescription: '설명2',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1602519362498-a57e90340bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY0fHxjYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      imageDescription: '설명3',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      imageDescription: '설명4',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1578258775864-4d2a10c74688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
      imageDescription: '설명5',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1601230202587-1b3f0286c1b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU2fHxjYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      imageDescription: '설명6',
    },
    {
      imageUrl:
        'https://media.istockphoto.com/photos/british-shorthair-cat-on-red-desk-picture-id1308939962?b=1&k=20&m=1308939962&s=170667a&w=0&h=Kc_m38jPHF6ahmVA4J2mDUvmRHiG3bpt5TvvhI29aQM=',
      imageDescription: '설명7',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
      imageDescription: '설명8',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1585937250791-efc81fc76e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
      imageDescription: '설명9',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      imageDescription: '설명10',
    },
  ],
};

function Frames({ imgURL, content, pickItem }: any) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {tempData &&
        tempData.imagesData.map((item, idx) => (
          <Frame
            position={fixedFrame[idx].framePosition}
            rotation={fixedFrame[idx].rotation}
            key={fixedFrame[idx].frame_id}
          >
            <Picture
              position={fixedFrame[idx].picturePosition}
              rotation={fixedFrame[idx].rotation}
              spotPos={fixedFrame[idx].spotPos}
              pickItem={pickItem}
              data={item}
            />
          </Frame>
        ))}
    </>
  );
}

export default Frames;
