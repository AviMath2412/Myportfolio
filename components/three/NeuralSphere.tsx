"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeuralSphereProps {
  position?: [number, number, number];
  scale?: number;
  learningRate?: number;
}

export default function NeuralSphere({
  position = [0, 0, 0],
  scale = 1,
  learningRate = 1,
}: NeuralSphereProps) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const elapsedRef = useRef(0);

  // Create neural network nodes (particles around the sphere)
  const { nodePositions, connections } = useMemo(() => {
    const pseudoRandom = (i: number, j: number) => {
      const seed = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
      return seed - Math.floor(seed);
    };

    const nodeCount = 50;
    const nodePositions = new Float32Array(nodeCount * 3);
    const connections = [];

    // Generate nodes on sphere surface
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const x = Math.cos(theta) * Math.sin(phi) * 1.2;
      const y = Math.sin(theta) * Math.sin(phi) * 1.2;
      const z = Math.cos(phi) * 1.2;

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      // Create connections to nearby nodes
      for (let j = i + 1; j < nodeCount; j++) {
        if (pseudoRandom(i, j) < 0.1) {
          connections.push(i, j);
        }
      }
    }

    return { nodePositions, connections };
  }, []);

  // Create connection lines geometry
  const connectionGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(connections.length * 3);

    for (let i = 0; i < connections.length; i += 2) {
      const nodeA = connections[i];
      const nodeB = connections[i + 1];

      positions[i * 3] = nodePositions[nodeA * 3];
      positions[i * 3 + 1] = nodePositions[nodeA * 3 + 1];
      positions[i * 3 + 2] = nodePositions[nodeA * 3 + 2];

      positions[(i + 1) * 3] = nodePositions[nodeB * 3];
      positions[(i + 1) * 3 + 1] = nodePositions[nodeB * 3 + 1];
      positions[(i + 1) * 3 + 2] = nodePositions[nodeB * 3 + 2];
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodePositions, connections]);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    const time = elapsedRef.current;

    // Rotate the entire neural sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.2 * learningRate;
      sphereRef.current.rotation.x = Math.sin(time * 0.1 * learningRate) * 0.1;
    }

    // Animate wireframe
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = time * 0.15 * learningRate;
      wireframeRef.current.rotation.z = time * 0.05 * learningRate;
    }

    // Pulse effect on particles
    if (particlesRef.current) {
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.6 + Math.sin(time * 2 * learningRate) * 0.2;
      particlesRef.current.rotation.y = -time * 0.1 * learningRate;
    }
  });

  return (
    <group position={position} scale={scale * (1 + (learningRate - 1) * 0.07)}>
      {/* Core sphere with holographic material */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color={0xffffff}
          transparent
          opacity={0.03}
          emissive={0x18181b}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Wireframe overlay */}
      <lineSegments ref={wireframeRef}>
        <sphereGeometry args={[1.05, 16, 16]} />
        <lineBasicMaterial
          color={0x52525b}
          transparent
          opacity={0.2}
        />
      </lineSegments>

      {/* Neural network nodes */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color={0xffffff}
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Neural connections */}
      <lineSegments>
        <primitive object={connectionGeometry} />
        <lineBasicMaterial
          color={0x71717a}
          transparent
          opacity={0.15}
        />
      </lineSegments>

      {/* Outer energy ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 1.81, 64]} />
        <meshBasicMaterial
          color={0x3f3f46}
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner energy core */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial
          color={0xffffff}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}