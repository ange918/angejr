"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function LaptopModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Rotating the laptop base
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.mouse.x * 0.5;
      meshRef.current.rotation.x = -state.mouse.y * 0.2;
    }
  });

  return (
    <group ref={meshRef as any}>
      {/* Laptop Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[4, 0.1, 3]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 1.4, -1.5]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[4, 2.8, 0.1]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
        
        {/* Screen Display */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[3.8, 2.6]} />
          <MeshDistortMaterial
            color="#06b6d4"
            speed={2}
            distort={0.1}
            radius={1}
            emissive="#06b6d4"
            emissiveIntensity={0.5}
          />
        </mesh>
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <LaptopModel />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
