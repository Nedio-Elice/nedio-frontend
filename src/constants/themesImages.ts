import { domeTheme, jazzTheme, modernTheme } from './images';

interface ThemesImages {
  [key: string]: string;
}

const themesImages = {
  Jazz: jazzTheme,
  Modern: modernTheme,
  Dome: domeTheme,
} as ThemesImages;

export default themesImages;
