declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.tiff';
declare module '*.jpeg';
declare module '*.obj';
declare module '*.gltf';
declare module '*.glb';
declare module '*.mp3';
declare module '*.ttf' {
  const content: any;
  export default content;
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GOOGLE_API_KEY: string;
  }
}
