import { Triplet } from '@react-three/cannon';

export const positions: Triplet[] = [
  [-2.5, 3.2, -6.9],
  [2.5, 3.2, -6.9],
  [6.9, 3.2, -4],
  [6.9, 3.2, 0],
  [6.9, 3.2, 4],
  [2.5, 3.2, 6.9],
  [-2.5, 3.2, 6.9],
  [-6.9, 3.2, 4],
  [-6.9, 3.2, 0],
  [-6.9, 3.2, -4],
];
export const rotations: Triplet[] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, Math.PI / 2, 0],
  [0, Math.PI / 2, 0],
  [0, Math.PI / 2, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, -Math.PI / 2, 0],
  [0, -Math.PI / 2, 0],
  [0, -Math.PI / 2, 0],
];
