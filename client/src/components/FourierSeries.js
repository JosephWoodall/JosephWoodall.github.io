import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function FourierSeries() {
  const ref = useRef();
  const { viewport } = useThree();
  const { width, height } = viewport;

  const [coefficients, setCoefficients] = useState([]);

  useEffect(() => {
    // Generate random Fourier coefficients
    const numTerms = 100;
    const newCoefficients = [];
    for (let i = 0; i < numTerms; i++) {
      const magnitude = Math.random() * 0.5; // Adjust this value to change line thickness
      const frequency = i + 1;
      const phase = Math.random() * Math.PI * 2;
      newCoefficients.push({ magnitude, frequency, phase });
    }
    setCoefficients(newCoefficients);
  }, []);

  const curve = new THREE.Curve();
  curve.getPoint = function (t) {
    const x = Math.cos(t * Math.PI * 2) * 3; // Adjust the radius and motion of the circles
    const y = Math.sin(t * Math.PI * 2) * 3; // Adjust the radius and motion of the circles
    let z = 0;
    for (let i = 0; i < coefficients.length; i++) {
      const { magnitude, frequency, phase } = coefficients[i];
      z += magnitude * Math.sin(frequency * t + phase);
    }
    return new THREE.Vector3(x, y, z);
  };

  const geometry = new THREE.TubeGeometry(curve, 500, 0.001, 100, false); // Adjust the second argument (radius) to change line thickness
  const material = new THREE.MeshBasicMaterial({ color: "rgb(55, 255, 139)" }); // Neon green color
  const mesh = new THREE.Mesh(geometry, material);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    // Rotate the mesh
    mesh.rotation.x = elapsed * 0.1; // Adjust the rotation speed and axis as desired
    mesh.rotation.y = elapsed * 0.15; // Adjust the rotation speed and axis as desired
    mesh.rotation.z = elapsed * 0.05; // Adjust the rotation speed and axis as desired
  });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[1, 100, 100]} /> {/* Adjust the sphere size */}
      <meshBasicMaterial color={0xffffff} transparent opacity={0} />
      <group scale={[0.3, 0.3, 0.3]}>
        {" "}
        {/* Adjust the scale to control the size of the visualization */}
        <primitive object={mesh} />
      </group>
    </mesh>
  );
}
