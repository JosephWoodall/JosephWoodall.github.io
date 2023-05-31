import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import pepeImage from "../assets/png-transparent-pepe-the-frog-know-your-meme-youtube-4chan-youtube-vertebrate-video-game-meme.png";

export default function PepePlanetSpin() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    // Rotate the sphere
    ref.current.rotation.y = elapsed * 1;
  });

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(pepeImage); // Replace with the path to your image

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

// client/assets/png-transparent-pepe-the-frog-know-your-meme-youtube-4chan-youtube-vertebrate-video-game-meme.png
