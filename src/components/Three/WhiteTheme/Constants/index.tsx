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

export const DETECT_FROM_DISTANCE = 20;

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
