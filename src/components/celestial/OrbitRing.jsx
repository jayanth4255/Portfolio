import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const OrbitRing = ({ radius = 3, color = "#8b5cf6", speed = 1 }) => {
    const ringRef = useRef();

    useFrame(() => {
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.001 * speed;
        }
    });

    return (
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
    );
};

export default OrbitRing;
