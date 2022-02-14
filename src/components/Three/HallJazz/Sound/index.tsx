import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import jazzmusic from '../../../../assets/audio/jazzpiano.mp3';

function Sound() {
  const sound: any = useRef();
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());

  const buffer = useLoader(THREE.AudioLoader, jazzmusic);
  useEffect(() => {
    const music = sound.current;
    music.setBuffer(buffer);
    music.setRefDistance(1);
    music.setLoop(true);
    music.play();
    camera.add(listener);

    return function soundOff() {
      music.stop();
    };
  }, [buffer, camera, listener]);

  return <positionalAudio ref={sound} args={[listener]} />;
}

export default Sound;
