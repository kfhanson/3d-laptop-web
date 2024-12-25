import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

function Model() {
    const gltf = useLoader(GLTFLoader, './public/laptop.glb')
    const modelRef = useRef()
    // useFrame((state, delta) => {
    //     if (modelRef.current) {
    //         modelRef.current.rotation.y += delta * 0.5
    //     }
    // })
    return <primitive object={gltf.scene} ref={modelRef} scale={[1, 1, 1]} />
}

export default function LaptopModel() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls />
        </Canvas>
    )
}
