import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import LaptopModel from "./Laptop"; // Import LaptopModel

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <LaptopModel />
        <Environment preset="sunset" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
