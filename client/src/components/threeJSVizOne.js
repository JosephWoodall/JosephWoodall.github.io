import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Box({ points }) {
  const ref = useRef();

  // Compute the bounding box for the points
  const box = new THREE.Box3().setFromPoints(points);

  useFrame(({ clock, camera }) => {
    // Get elapsed time in seconds
    const elapsed = clock.elapsedTime;

    // Move the points towards the camera and loop them back around
    points.forEach((point) => {
      point.z -= elapsed * 100; // Adjust this value to change the speed of the animation
      if (point.z < -camera.position.z) {
        point.z = box.max.z;
        point.x = Math.random() * (box.max.x - box.min.x) + box.min.x;
        point.y = Math.random() * (box.max.y - box.min.y) + box.min.y;
      }
    });

    // Update the bounding box for the points
    box.setFromPoints(points);

    // Scale the box to fit the points
    ref.current.scale.set(
      box.max.x - box.min.x,
      box.max.y - box.min.y,
      box.max.z - box.min.z * 0.5 // Shorten the box's Z axis
    );

    // Position the box at the center of the points
    ref.current.position.set(
      (box.max.x + box.min.x) / 2,
      (box.max.y + box.min.y) / 2,
      (box.max.z + box.min.z) / 2
    );
    // Rotate the box to simulate a galaxy
    ref.current.rotation.x = elapsed * 0.0;
    ref.current.rotation.y = elapsed * 0.0;
    ref.current.rotation.z = elapsed * 0.05;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[10, 10, 10]} />
      <meshBasicMaterial color={0xffffff} transparent opacity={0} />
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereBufferGeometry args={[0.005, 16, 16]} />
          <meshBasicMaterial color={"white"} />
        </mesh>
      ))}
    </mesh>
  );
}