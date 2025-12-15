import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import RotatingPlanet from './RotatingPlanet';
import OrbitRing from './OrbitRing';

const CelestialBackground = () => {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

                {/* Stars */}
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                {/* Main Planet */}
                <RotatingPlanet position={[0, 0, 0]} scale={2.5} color="#6366f1" />

                {/* Orbit Rings */}
                <OrbitRing radius={3.5} color="#8b5cf6" speed={1} />
                <OrbitRing radius={4.2} color="#ec4899" speed={0.7} />
                <OrbitRing radius={5} color="#6366f1" speed={0.5} />

                {/* Smaller Planets */}
                <RotatingPlanet position={[5, 2, -3]} scale={0.8} color="#ec4899" />
                <RotatingPlanet position={[-6, -2, -5]} scale={1.2} color="#8b5cf6" />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
            </Canvas>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space/50 to-deep-space pointer-events-none" />
        </div>
    );
};

export default CelestialBackground;
