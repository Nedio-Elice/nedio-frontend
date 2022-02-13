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
    sound.current.setBuffer(buffer);
    sound.current.setRefDistance(1);
    sound.current.setLoop(true);
    sound.current.play();
    camera.add(listener);
  }, [buffer, camera, listener]);
  return <positionalAudio ref={sound} args={[listener]} />;
}

export default Sound;
