"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NeuralSphere from "./NeuralSphere";
import ParticleField from "./ParticleField";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <ParticleField />
          <NeuralSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}