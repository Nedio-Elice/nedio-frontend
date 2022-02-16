import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import deepblue from '../../../../assets/audio/deepblue.mp3';

function Sound() {
  const sound: any = useRef();
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());

  const buffer = useLoader(THREE.AudioLoader, deepblue);
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
