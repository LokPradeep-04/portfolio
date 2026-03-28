import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleCloud = () => {
  const pointsRef = useRef(null);
  const particlesData = useRef({
    positionArray: new Float32Array(),
  });

  useEffect(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const radius = Math.random() * 100;
      const angle = Math.random() * Math.PI * 2;
      const depth = (Math.random() - 0.5) * 150;

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = Math.sin(angle) * radius;
      positions[i3 + 2] = depth;
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
    }

    particlesData.current.positionArray = positions;
  }, []);

  useFrame(({ camera }) => {
    if (!pointsRef.current) return;

    const positions = particlesData.current.positionArray;
    const count = positions.length / 3;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      positions[i3 + 1] += Math.sin(Date.now() * 0.0001 + i) * 0.002;
      positions[i3] += Math.cos(Date.now() * 0.00008 + i) * 0.001;

      positions[i3 + 2] += Math.sin(Date.now() * 0.00012 + i) * 0.15;

      if (positions[i3 + 1] > 100) positions[i3 + 1] = -100;
      if (positions[i3] > 100) positions[i3] = -100;
    }

    if (pointsRef.current.geometry) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.7}
        sizeAttenuation={true}
        depthWrite={false}
        toneMapped={false}
      />
    </Points>
  );
};

const OrbitalParticles = () => {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = clock.getElapsedTime() * 0.05;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Points>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={1.2}
          sizeAttenuation={true}
          depthWrite={false}
          toneMapped={false}
        />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={200}
            array={new Float32Array(
              Array.from({ length: 200 }, (_, i) => {
                const angle = (i / 200) * Math.PI * 2;
                const radius = 40;
                return [
                  Math.cos(angle) * radius,
                  Math.sin(angle) * radius,
                  Math.sin(angle * 2) * 20,
                ];
              }).flat()
            )}
            itemSize={3}
          />
        </bufferGeometry>
      </Points>
    </group>
  );
};

const AnimatedLights = () => {
  const lightRef = useRef(null);

  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    const time = clock.getElapsedTime();
    lightRef.current.position.x = Math.cos(time * 0.3) * 80;
    lightRef.current.position.y = Math.sin(time * 0.4) * 60;
    lightRef.current.position.z = 50 + Math.sin(time * 0.2) * 30;
  });

  return (
    <>
      <pointLight ref={lightRef} intensity={2} color="#8b5cf6" distance={200} />
      <pointLight intensity={1.5} position={[50, -50, 0]} color="#3b82f6" />
      <pointLight intensity={1.5} position={[-50, 50, 0]} color="#06b6d4" />
      <ambientLight intensity={0.3} color="#ffffff" />
    </>
  );
};

export const ParticleBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 80], fov: 75 }}
      className="absolute inset-0 -z-10"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]}
    >
      <AnimatedLights />
      <ParticleCloud />
      <OrbitalParticles />
    </Canvas>
  );
};

export default ParticleBackground;
