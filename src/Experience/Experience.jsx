import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene.jsx";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <Canvas style={{ background: '#000' }}>
      <OrbitControls />
      <Scene />
    </Canvas>
  );
};

export default Experience;
