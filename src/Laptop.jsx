import React from "react";
import { useGLTF } from "@react-three/drei";

function LaptopModel() {
  const { scene } = useGLTF("/laptop.glb"); // Make sure the file path matches
  return <primitive object={scene} scale={2} />;
}
export default LaptopModel;
