"use client";

import { forwardRef, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Baya weaver colouring, stylised toward "cute" over "accurate": bright
// golden-yellow crown and breast, small dark cheek patches instead of a full
// face mask, warm brown wings and tail.
const YELLOW = "#F7C948";
const YELLOW_SOFT = "#FDE28A";
const CHEEK = "#3A2A1E";
const WING = "#C4863F";
const BEAK = "#5B4632";

const clay = { roughness: 0.7, metalness: 0.02 } as const;

type WingProps = {
  side: 1 | -1;
  flapRef: React.RefObject<THREE.Group | null>;
};

function Wing({ side, flapRef }: WingProps) {
  return (
    <group ref={flapRef} position={[side * 0.4, 0.05, -0.02]}>
      <mesh position={[side * 0.1, -0.05, 0]} rotation={[0.1, 0, side * 0.35]} castShadow>
        <sphereGeometry args={[0.3, 20, 16]} />
        <meshStandardMaterial color={WING} {...clay} />
      </mesh>
    </group>
  );
}

const WeaverBird = forwardRef<THREE.Group>(function WeaverBird(_props, ref) {
  const leftWing = useRef<THREE.Group>(null);
  const rightWing = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyBobRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const flap = Math.sin(t * 5.5) * 0.18;
    if (leftWing.current) leftWing.current.rotation.z = 0.32 + flap;
    if (rightWing.current) rightWing.current.rotation.z = -0.32 - flap;

    if (bodyBobRef.current) {
      bodyBobRef.current.position.y = Math.sin(t * 2.2) * 0.03;
    }

    if (headRef.current) {
      const pointer = state.pointer;
      const targetY = THREE.MathUtils.clamp(pointer.x * 0.45, -0.5, 0.5);
      const targetX = THREE.MathUtils.clamp(-pointer.y * 0.25, -0.35, 0.35);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, 0.06);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, 0.06);
    }
  });

  return (
    <group ref={ref}>
      <group ref={bodyBobRef}>
        {/* Body: squashed, egg-shaped */}
        <mesh castShadow receiveShadow position={[0, -0.08, -0.05]} scale={[0.62, 0.56, 0.72]}>
          <sphereGeometry args={[0.5, 28, 22]} />
          <meshStandardMaterial color={YELLOW} {...clay} />
        </mesh>

        {/* Belly highlight */}
        <mesh position={[0, -0.2, 0.24]} scale={[0.4, 0.34, 0.4]}>
          <sphereGeometry args={[0.5, 20, 16]} />
          <meshStandardMaterial color={YELLOW_SOFT} {...clay} />
        </mesh>

        {/* Tail: small, rounded, tucked low and back */}
        <mesh position={[0, -0.12, -0.52]} rotation={[0.5, 0, 0]} castShadow>
          <coneGeometry args={[0.13, 0.3, 8]} />
          <meshStandardMaterial color={WING} {...clay} />
        </mesh>

        <Wing side={1} flapRef={rightWing} />
        <Wing side={-1} flapRef={leftWing} />

        {/* Head: big and chibi-proportioned, deeply overlapping the body */}
        <group ref={headRef} position={[0, 0.32, 0.28]}>
          <mesh castShadow>
            <sphereGeometry args={[0.4, 26, 22]} />
            <meshStandardMaterial color={YELLOW} {...clay} />
          </mesh>

          {/* Small cheek / eye-surround patches, not a full mask */}
          <mesh position={[0.19, -0.02, 0.28]} scale={[0.5, 0.4, 0.3]}>
            <sphereGeometry args={[0.22, 16, 14]} />
            <meshStandardMaterial color={CHEEK} {...clay} />
          </mesh>
          <mesh position={[-0.19, -0.02, 0.28]} scale={[0.5, 0.4, 0.3]}>
            <sphereGeometry args={[0.22, 16, 14]} />
            <meshStandardMaterial color={CHEEK} {...clay} />
          </mesh>

          {/* Big eyes */}
          <mesh position={[0.155, 0.03, 0.37]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#0c0805" roughness={0.25} />
          </mesh>
          <mesh position={[-0.155, 0.03, 0.37]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#0c0805" roughness={0.25} />
          </mesh>
          <mesh position={[0.185, 0.075, 0.4]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[-0.125, 0.075, 0.4]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>

          {/* Small blunt beak */}
          <mesh position={[0, -0.08, 0.45]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <coneGeometry args={[0.07, 0.14, 12]} />
            <meshStandardMaterial color={BEAK} roughness={0.5} />
          </mesh>
        </group>
      </group>
    </group>
  );
});

export default WeaverBird;
