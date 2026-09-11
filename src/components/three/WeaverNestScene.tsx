"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { buildNestPoints, NEST_TOTAL_POINTS } from "@/lib/nestCurve";
import WeaverBird from "./WeaverBird";

const STRAW = "#C99A4B";
const STRAW_DARK = "#A97B36";

export default function WeaverNestScene({
  progressRef,
  targetRef,
}: {
  progressRef: React.RefObject<number>;
  targetRef?: React.RefObject<THREE.Vector3>;
}) {
  const points = useMemo(() => buildNestPoints(NEST_TOTAL_POINTS), []);
  const tubeMeshRef = useRef<THREE.Mesh>(null);
  const fiberMeshRef = useRef<THREE.Mesh>(null);
  const birdGroupRef = useRef<THREE.Group>(null);
  const lastVisibleCount = useRef(-1);
  const worldPos = useRef(new THREE.Vector3());

  const disposeGeometry = (mesh: THREE.Mesh | null) => {
    if (mesh?.geometry) mesh.geometry.dispose();
  };

  useEffect(() => {
    const tube = tubeMeshRef.current;
    const fiber = fiberMeshRef.current;
    return () => {
      disposeGeometry(tube);
      disposeGeometry(fiber);
    };
  }, []);

  useFrame(() => {
    const progress = THREE.MathUtils.clamp(progressRef.current ?? 0, 0, 1);
    const visibleCount = Math.max(2, Math.floor(progress * (points.length - 1)) + 2);

    if (visibleCount !== lastVisibleCount.current) {
      lastVisibleCount.current = visibleCount;
      const slice = points.slice(0, Math.min(visibleCount, points.length));
      const curve = new THREE.CatmullRomCurve3(slice, false, "catmullrom", 0.4);
      const tubularSegments = Math.max(4, Math.floor(slice.length * 2));

      if (tubeMeshRef.current) {
        disposeGeometry(tubeMeshRef.current);
        tubeMeshRef.current.geometry = new THREE.TubeGeometry(curve, tubularSegments, 0.09, 8, false);
      }
      if (fiberMeshRef.current) {
        disposeGeometry(fiberMeshRef.current);
        fiberMeshRef.current.geometry = new THREE.TubeGeometry(curve, tubularSegments, 0.1, 6, false);
      }

      // Place the bird at the tip of what's woven so far. It stays mostly
      // facing the viewer (cute > accurate) with just a light directional
      // lean toward the way it's weaving, and never rolls or pitches so it
      // can't flip upside down.
      if (birdGroupRef.current && slice.length >= 2) {
        const tip = curve.getPointAt(1);
        const tangent = curve.getTangentAt(1);
        birdGroupRef.current.position.copy(tip);
        const weaveYaw = Math.atan2(tangent.x, tangent.z);
        birdGroupRef.current.rotation.set(0, weaveYaw * 0.3, 0);
      }
    }

    if (targetRef?.current && birdGroupRef.current) {
      birdGroupRef.current.getWorldPosition(worldPos.current);
      targetRef.current.lerp(worldPos.current, 0.08);
    }
  });

  return (
    <group>
      <mesh ref={fiberMeshRef} castShadow receiveShadow>
        <bufferGeometry />
        <meshStandardMaterial color={STRAW_DARK} roughness={0.95} wireframe />
      </mesh>
      <mesh ref={tubeMeshRef} castShadow receiveShadow>
        <bufferGeometry />
        <meshStandardMaterial color={STRAW} roughness={0.9} metalness={0} />
      </mesh>
      <group ref={birdGroupRef} scale={0.85}>
        <WeaverBird />
      </group>
    </group>
  );
}
