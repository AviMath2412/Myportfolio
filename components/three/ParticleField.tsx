"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 300;

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities[i * 3]     = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 2] = 0;
    }
    return { positions, velocities };
  }, []);

  // useFrame provides delta via R3F — no THREE.Clock needed
  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const speed = delta * 60; // normalize to ~60fps

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3]     += velocities[i * 3]     * speed;
      pos[i * 3 + 1] += velocities[i * 3 + 1] * speed;
      if (Math.abs(pos[i * 3])     > 10) velocities[i * 3]     *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={0x6366f1}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}
