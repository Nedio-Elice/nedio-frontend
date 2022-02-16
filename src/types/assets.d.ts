declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.mp3';
declare module '*.jpeg';
declare module '*.tiff';
declare module '*.obj';
declare module '*.gltf';
declare module '*.glb';
declare module '*.ttf' {
  const content: any;
  export default content;
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GOOGLE_API_KEY: string;
    REACT_APP_SERVER_URL: string;
  }
}
