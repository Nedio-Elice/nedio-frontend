export const WALL_WIDTH = 70;
export const WALL_HEIGHT = 40;
export const WALL_THICKNESS = 1;
export const FAR_FROM_DEFAULT_POSITION = 15;

export const WALL_SIZE: [number, number, number] = [
  WALL_WIDTH,
  WALL_HEIGHT,
  WALL_THICKNESS,
];

export const GROUND_SIZE: [number, number] = [250, 250];

export const WALL_REPEAT_SIZE = 5;
export const GROUND_REPEAT_SIZE = 10;
export const CEILING_REPEAT_SIZE = 25;

export const DETECT_FROM_DISTANCE = 25;

interface Ratio {
  [index: string]: number[];
  horizontal: number[];
  vertical: number[];
}

export type HallImage = {
  imageUrl: string;
  imageDescription: string;
  ratio: string;
};

export const PICTURE_RATIO = {
  horizontal: [12, 8, 0.1],
  vertical: [8, 12, 0.1],
} as Ratio;

export const FRAME_RATIO = {
  horizontal: [35, 35, 50],
  vertical: [25, 45, 50],
} as Ratio;

export const FIXED_FRAME = [
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
      -WALL_WIDTH - 3,
    ],
    picturePosition: [
      -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION,
      WALL_HEIGHT / 3,
      -WALL_WIDTH - 3,
    ],
    rotation: [0, Math.PI / 2, 0],
    spotPos: [-45, 35, -WALL_WIDTH - 3],
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
