"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import WeaverNestScene from "./WeaverNestScene";

const SCROLL_HEIGHT_VH = 320;

function CameraRig({
  progressRef,
  targetRef,
}: {
  progressRef: React.RefObject<number>;
  targetRef: React.RefObject<THREE.Vector3>;
}) {
  const { camera, size } = useThree();

  useFrame(() => {
    const progress = THREE.MathUtils.clamp(progressRef.current ?? 0, 0, 1);
    const target = targetRef.current;
    const aspect = size.width / size.height;
    // Narrower (more portrait) viewports need more distance to keep the
    // same vertical framing, since a fixed vertical FOV crops in hard on
    // tall/narrow screens otherwise.
    const aspectBoost = Math.max(1, 1.05 / aspect);
    const targetZ = (3.4 - progress * 0.3) * aspectBoost;
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, target.y + 0.4, 0.06);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, target.x * 0.4, 0.06);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.06);
    camera.lookAt(target.x * 0.6, target.y, target.z * 0.6);
  });

  return null;
}

export default function HeroScene() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const targetRef = useRef(new THREE.Vector3(0.4, 1.5, 0));
  const [promptOpacity, setPromptOpacity] = useState(1);

  useEffect(() => {
    let ticking = false;
    function update() {
      ticking = false;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? THREE.MathUtils.clamp(-rect.top / scrollable, 0, 1) : 0;
      progressRef.current = progress;
      setPromptOpacity(Math.max(0, 1 - progress * 6));
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: `${SCROLL_HEIGHT_VH}vh`, position: "relative" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[linear-gradient(180deg,#EAF6FF_0%,#FFF7E6_55%,#FFF1D6_100%)]">
        <Canvas
          shadows
          camera={{ position: [0.2, 1.9, 3.4], fov: 45 }}
          dpr={[1, 1.75]}
          className="!absolute inset-0"
        >
          <ambientLight intensity={0.75} />
          <directionalLight
            position={[3, 5, 4]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#cfe8ff" />
          <Suspense fallback={null}>
            <group scale={1.5}>
              <WeaverNestScene progressRef={progressRef} targetRef={targetRef} />
            </group>
          </Suspense>
          <CameraRig progressRef={progressRef} targetRef={targetRef} />
        </Canvas>

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 py-10 md:px-12 md:py-16">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ink/60">
              Senior Product Manager
            </p>
            <h1 className="text-ink">
              Weaving thoughts and ideas into products that people love.
            </h1>
          </div>
          <div
            className="flex items-center gap-2 text-sm font-medium text-ink/70 transition-opacity duration-300"
            style={{ opacity: promptOpacity }}
          >
            <span className="inline-block h-8 w-5 rounded-full border-2 border-ink/40">
              <span className="mx-auto mt-1.5 block h-1.5 w-1.5 animate-bounce rounded-full bg-ink/50" />
            </span>
            Scroll to watch it weave
          </div>
        </div>
      </div>
    </div>
  );
}
