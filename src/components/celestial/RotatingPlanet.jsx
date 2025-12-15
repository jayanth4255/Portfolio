import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const RotatingPlanet = ({ position = [0, 0, 0], scale = 2, color = "#6366f1" }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <group position={position}>
            <Sphere ref={meshRef} args={[1, 128, 128]} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
            {/* Glow effect */}
            <Sphere args={[1.1, 64, 64]} scale={scale}>
                <meshBasicMaterial color={color} transparent opacity={0.1} />
            </Sphere>
        </group>
    );
};

export default RotatingPlanet;
