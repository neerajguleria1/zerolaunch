'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Stars, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Suspense, useRef, useMemo, useEffect, useState, useCallback, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import * as THREE from 'three';
import { GlassMesh, HolographicMesh } from './shaders';

// ═══════════════════════════════════════════════════════════════════════════
// SHARED SYSTEMS
// ═══════════════════════════════════════════════════════════════════════════

// ─── Scroll-aware Camera ────────────────────────────────────────────────────
function ScrollCamera() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const s = () => { scrollY.current = window.scrollY; };
    window.addEventListener('mousemove', h, { passive: true });
    window.addEventListener('scroll', s, { passive: true });
    return () => {
      window.removeEventListener('mousemove', h);
      window.removeEventListener('scroll', s);
    };
  }, []);

  useFrame(() => {
    const scrollFactor = scrollY.current * 0.0005;
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.012;
    camera.position.y += (mouse.current.y * 1 + 0.5 - camera.position.y - scrollFactor * 2) * 0.012;
    camera.position.z = 7 + scrollFactor * 0.5;
    camera.lookAt(0, -scrollFactor * 1.5, 0);
  });
  return null;
}

// ─── Flowing Particles (much better than before) ────────────────────────────
function FlowingParticles({ count = 120 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array>(null);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const vel = new Float32Array(count * 3);
    const palette = [
      [0.23, 0.51, 0.96], [0.55, 0.36, 0.96], [0.02, 0.71, 0.83],
      [0.93, 0.29, 0.6], [0.96, 0.62, 0.04],
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
      const c = palette[i % palette.length];
      col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
      sz[i] = 0.02 + Math.random() * 0.04;
    }
    velocities.current = vel;
    return [pos, col, sz];
  }, [count]);

  useFrame((state) => {
    if (!ref.current || !velocities.current) return;
    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    const arr = posAttr.array as Float32Array;
    const vel = velocities.current;

    for (let i = 0; i < count; i++) {
      arr[i * 3] += vel[i * 3] + Math.sin(t * 0.3 + i) * 0.0008;
      arr[i * 3 + 1] += vel[i * 3 + 1] + Math.cos(t * 0.2 + i * 0.5) * 0.0008;
      arr[i * 3 + 2] += vel[i * 3 + 2];

      if (arr[i * 3] > 12) arr[i * 3] = -12;
      if (arr[i * 3] < -12) arr[i * 3] = 12;
      if (arr[i * 3 + 1] > 9) arr[i * 3 + 1] = -9;
      if (arr[i * 3 + 1] < -9) arr[i * 3 + 1] = 9;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.y = t * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Ambient Fog ────────────────────────────────────────────────────────────
function AmbientFog() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -8]} scale={[30, 30, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="#0a0a1a" transparent opacity={0.15} />
    </mesh>
  );
}

// ─── Premium Lights ─────────────────────────────────────────────────────────
function PremiumLights() {
  const l1 = useRef<THREE.PointLight>(null);
  const l2 = useRef<THREE.PointLight>(null);
  const l3 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (l1.current) {
      l1.current.intensity = 1.2 + Math.sin(t * 0.6) * 0.4;
      l1.current.position.x = Math.sin(t * 0.2) * 6;
      l1.current.position.y = Math.cos(t * 0.15) * 3;
    }
    if (l2.current) {
      l2.current.intensity = 0.8 + Math.cos(t * 0.4) * 0.3;
      l2.current.position.z = Math.sin(t * 0.25) * 5;
      l2.current.position.x = Math.cos(t * 0.2) * 4;
    }
    if (l3.current) {
      l3.current.intensity = 0.5 + Math.sin(t * 0.5 + 1) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#e0e7ff" />
      <pointLight ref={l1} position={[4, 2, 3]} color="#3b82f6" intensity={1.2} distance={18} />
      <pointLight ref={l2} position={[-4, -2, 3]} color="#8b5cf6" intensity={0.8} distance={18} />
      <pointLight ref={l3} position={[0, 4, -2]} color="#06b6d4" intensity={0.5} distance={14} />
    </>
  );
}

// ─── Post-Processing ────────────────────────────────────────────────────────
function PostEffects() {
  const chromaticRef = useRef<any>(null);

  useFrame((state) => {
    if (chromaticRef.current) {
      const t = state.clock.elapsedTime;
      const offset = Math.sin(t * 0.3) * 0.0005 + 0.0008;
      chromaticRef.current.offset.x = offset;
      chromaticRef.current.offset.y = offset * 0.5;
    }
  });

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.3}
        luminanceSmoothing={0.9}
        mipmapBlur
        radius={0.6}
      />
      <ChromaticAberration
        ref={chromaticRef}
        offset={new THREE.Vector2(0.0008, 0.0004)}
        radialModulation={true}
        modulationOffset={0.5}
      />
      <Vignette eskil={false} offset={0.25} darkness={0.7} />
      <Noise
        premultiply
        blendFunction={BlendFunction.ADD}
        opacity={0.015}
      />
    </EffectComposer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// ANIMATED MESH HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function FloatingMesh({
  children,
  position = [0, 0, 0] as [number, number, number],
  rotSpeed = [0.2, 0.3, 0] as [number, number, number],
  floatSpeed = 1.5,
  floatAmp = 0.3,
}: {
  children: ReactNode;
  position?: [number, number, number];
  rotSpeed?: [number, number, number];
  floatSpeed?: number;
  floatAmp?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const initY = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x += rotSpeed[0] * 0.008;
    ref.current.rotation.y += rotSpeed[1] * 0.008;
    ref.current.rotation.z += rotSpeed[2] * 0.008;
    ref.current.position.y = initY + Math.sin(t * floatSpeed) * floatAmp;
  });

  return <group ref={ref} position={position}>{children}</group>;
}

function GlowRing({ radius = 2, color = '#3b82f6', speed = 0.5 }: { radius?: number; color?: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.01, 8, 64]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} transparent opacity={0.3} />
    </mesh>
  );
}

function EnergyLine({ points, color = '#3b82f6' }: { points: THREE.Vector3[]; color?: string }) {
  const lineObj = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.15 });
    return new THREE.Line(geo, mat);
  }, [points, color]);

  useFrame((state) => {
    lineObj.material.opacity = 0.12 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
  });

  return <primitive object={lineObj} />;
}

// ═══════════════════════════════════════════════════════════════════════════
// SCENES — Premium quality for each route
// ═══════════════════════════════════════════════════════════════════════════

// ─── Hero: Cinematic showcase ───────────────────────────────────────────────
function HeroScene() {
  const linePoints = useMemo(() => [
    [new THREE.Vector3(0, 0, 0), new THREE.Vector3(3.5, 1.2, -2)],
    [new THREE.Vector3(0, 0, 0), new THREE.Vector3(-3.5, -0.8, -1.5)],
    [new THREE.Vector3(0, 0, 0), new THREE.Vector3(2.5, -2, -3)],
    [new THREE.Vector3(3.5, 1.2, -2), new THREE.Vector3(-3.5, -0.8, -1.5)],
    [new THREE.Vector3(-3.5, -0.8, -1.5), new THREE.Vector3(-1.5, -2.5, -2)],
  ], []);

  return (
    <>
      {/* Central glass icosahedron */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <GlassMesh geometry="icosahedron" args={[2, 3]} opacity={0.2}>
          <pointLight color="#3b82f6" intensity={2} distance={6} />
        </GlassMesh>
      </Float>

      {/* Wireframe torus knot */}
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.6}>
        <FloatingMesh position={[3.5, 1.2, -2]} rotSpeed={[0.3, 0.2, 0]} floatSpeed={1.5}>
          <mesh>
            <torusKnotGeometry args={[0.55, 0.16, 64, 16]} />
            <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.4} emissive="#8b5cf6" emissiveIntensity={0.5} />
          </mesh>
        </FloatingMesh>
      </Float>

      {/* Metallic octahedron */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
        <FloatingMesh position={[-3.5, -0.8, -1.5]} rotSpeed={[0, 0.4, 0.1]} floatSpeed={1.2}>
          <mesh>
            <octahedronGeometry args={[0.85, 0]} />
            <meshStandardMaterial color="#06b6d4" roughness={0.02} metalness={0.98} envMapIntensity={2} />
          </mesh>
        </FloatingMesh>
      </Float>

      {/* Holographic dodecahedron */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <FloatingMesh position={[2.5, -2, -3]} rotSpeed={[0.2, 0.15, 0]} floatSpeed={0.8}>
          <HolographicMesh geometry="dodecahedron" args={[0.65, 0]} />
        </FloatingMesh>
      </Float>

      {/* Distorted sphere */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
        <FloatingMesh position={[-2, 2, -2.5]} rotSpeed={[0.1, 0.15, 0]} floatSpeed={1.1}>
          <mesh>
            <sphereGeometry args={[0.4, 16, 16]} />
            <MeshDistortMaterial color="#ec4899" speed={2} distort={0.3} transparent opacity={0.4} roughness={0.1} metalness={0.8} />
          </mesh>
        </FloatingMesh>
      </Float>

      {/* Gold torus */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.7}>
        <FloatingMesh position={[-1.5, -2.5, -2]} rotSpeed={[0.5, 0.3, 0]} floatSpeed={1.8}>
          <mesh>
            <torusGeometry args={[0.35, 0.08, 10, 24]} />
            <meshStandardMaterial color="#f59e0b" roughness={0.05} metalness={0.95} emissive="#f59e0b" emissiveIntensity={0.3} />
          </mesh>
        </FloatingMesh>
      </Float>

      {/* Energy lines */}
      <EnergyLine points={linePoints[0]} color="#3b82f6" />
      <EnergyLine points={linePoints[1]} color="#8b5cf6" />
      <EnergyLine points={linePoints[2]} color="#06b6d4" />
      <EnergyLine points={linePoints[3]} color="#3b82f6" />
      <EnergyLine points={linePoints[4]} color="#8b5cf6" />

      {/* Glow rings */}
      <GlowRing radius={3} color="#3b82f6" speed={0.3} />
      <GlowRing radius={4.5} color="#8b5cf6" speed={-0.2} />

      <Stars radius={40} depth={40} count={300} factor={2} saturation={0} fade speed={0.6} />
      <Environment preset="night" />
    </>
  );
}

// ─── Services: Neural network ───────────────────────────────────────────────
function ServicesScene() {
  const nodes: [number, number, number, string][] = [
    [0, 2, 0, '#3b82f6'], [2.8, 0.8, -1, '#8b5cf6'], [-2.8, 0.8, -1, '#06b6d4'],
    [1.8, -1.5, -0.5, '#ec4899'], [-1.8, -1.5, -0.5, '#f59e0b'], [0, 0, -2.5, '#10b981'],
    [3.5, -0.5, -2, '#6366f1'], [-3.5, -0.5, -2, '#a855f7'],
  ];

  const edges = useMemo(() => {
    const e: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
        if (d < 4) e.push([i, j]);
      }
    }
    return e;
  }, []);

  return (
    <>
      {nodes.map(([x, y, z, color], i) => (
        <Float key={i} speed={1 + i * 0.15} rotationIntensity={0.2} floatIntensity={0.25}>
          <mesh position={[x, y, z]}>
            <octahedronGeometry args={[0.28, 0]} />
            <meshStandardMaterial color={color} roughness={0.1} metalness={0.85} transparent opacity={0.7} emissive={color} emissiveIntensity={0.25} />
          </mesh>
        </Float>
      ))}
      {edges.map(([i, j], idx) => (
        <EnergyLine key={idx} points={[new THREE.Vector3(...nodes[i].slice(0, 3) as [number, number, number]), new THREE.Vector3(...nodes[j].slice(0, 3) as [number, number, number])]} color={nodes[i][3]} />
      ))}
      <Environment preset="night" />
    </>
  );
}

// ─── About: DNA Helix + brain wireframe ─────────────────────────────────────
function AboutScene() {
  const helixPoints = useMemo(() => {
    const strand1: THREE.Vector3[] = [];
    const strand2: THREE.Vector3[] = [];
    const steps = 30;
    for (let i = 0; i < steps; i++) {
      const t = (i / steps) * Math.PI * 4;
      const y = (i / steps) * 6 - 3;
      const r = 1.5;
      strand1.push(new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r));
      strand2.push(new THREE.Vector3(Math.cos(t + Math.PI) * r, y, Math.sin(t + Math.PI) * r));
    }
    return { strand1, strand2 };
  }, []);

  const crossLinks = useMemo(() => {
    const links: THREE.Vector3[][] = [];
    for (let i = 0; i < helixPoints.strand1.length; i += 3) {
      links.push([helixPoints.strand1[i], helixPoints.strand2[i]]);
    }
    return links;
  }, [helixPoints]);

  return (
    <>
      {/* Strand 1 */}
      <EnergyLine points={helixPoints.strand1} color="#3b82f6" />
      {/* Strand 2 */}
      <EnergyLine points={helixPoints.strand2} color="#8b5cf6" />
      {/* Cross links */}
      {crossLinks.map((pts, i) => (
        <EnergyLine key={i} points={pts} color="#06b6d4" />
      ))}
      {/* Nodes at key points */}
      {helixPoints.strand1.filter((_, i) => i % 4 === 0).map((p, i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.15} floatIntensity={0.1}>
          <mesh position={[p.x, p.y, p.z]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.6} transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
      <Environment preset="night" />
    </>
  );
}

// ─── Process: Ascending energy path ─────────────────────────────────────────
function ProcessScene() {
  const steps: [number, number, number, string][] = [
    [-2.5, 2.5, 0, '#3b82f6'], [-1.2, 1.2, -0.8, '#6366f1'], [0, 0, -1.5, '#8b5cf6'],
    [1.2, -1.2, -0.8, '#a855f7'], [2.5, -2.5, 0, '#06b6d4'],
  ];

  const linePoints = steps.map((s) => new THREE.Vector3(s[0], s[1], s[2]));

  return (
    <>
      <EnergyLine points={linePoints} color="#8b5cf6" />
      {steps.map(([x, y, z, color], i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh position={[x, y, z]}>
            <dodecahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial color={color} roughness={0.1} metalness={0.85} transparent opacity={0.7} emissive={color} emissiveIntensity={0.35} />
          </mesh>
        </Float>
      ))}
      <GlowRing radius={2} color="#8b5cf6" speed={0.4} />
      <Environment preset="night" />
    </>
  );
}

// ─── Pricing: Three tiered crystals ─────────────────────────────────────────
function PricingScene() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
        <FloatingMesh position={[-2.8, 0, 0]} rotSpeed={[0.15, 0.2, 0]}>
          <mesh>
            <octahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial color="#6366f1" roughness={0.02} metalness={0.95} transparent opacity={0.5} emissive="#6366f1" emissiveIntensity={0.2} />
          </mesh>
        </FloatingMesh>
      </Float>
      <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.25}>
        <FloatingMesh position={[0, 0.4, -1.2]} rotSpeed={[0.2, 0.15, 0]}>
          <mesh>
            <octahedronGeometry args={[0.85, 0]} />
            <meshStandardMaterial color="#3b82f6" roughness={0.02} metalness={0.95} emissive="#3b82f6" emissiveIntensity={0.3} />
          </mesh>
          <pointLight color="#3b82f6" intensity={1.5} distance={4} />
        </FloatingMesh>
      </Float>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
        <FloatingMesh position={[2.8, 0, 0]} rotSpeed={[0.1, 0.25, 0]}>
          <mesh>
            <octahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial color="#06b6d4" roughness={0.02} metalness={0.95} transparent opacity={0.5} emissive="#06b6d4" emissiveIntensity={0.2} />
          </mesh>
        </FloatingMesh>
      </Float>
      <GlowRing radius={1.8} color="#3b82f6" speed={0.25} />
      <Environment preset="night" />
    </>
  );
}

// ─── Contact: Glowing envelope ──────────────────────────────────────────────
function ContactScene() {
  const edges = useMemo(() => {
    const w = 2.2, h = 1.6, d = 0.4;
    const c = [
      [-w/2, -h/2, -d/2], [w/2, -h/2, -d/2], [w/2, h/2, -d/2], [-w/2, h/2, -d/2],
      [-w/2, -h/2, d/2], [w/2, -h/2, d/2], [w/2, h/2, d/2], [-w/2, h/2, d/2],
    ].map(p => new THREE.Vector3(p[0], p[1], p[2]));

    return [
      [c[0], c[1]], [c[1], c[2]], [c[2], c[3]], [c[3], c[0]],
      [c[4], c[5]], [c[5], c[6]], [c[6], c[7]], [c[7], c[4]],
      [c[0], c[4]], [c[1], c[5]], [c[2], c[6]], [c[3], c[7]],
      [c[3], c[5]], [c[2], c[4]],
    ];
  }, []);

  return (
    <>
      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.15}>
        {edges.map((pts, i) => (
          <EnergyLine key={i} points={pts} color="#3b82f6" />
        ))}
      </Float>
      <GlowRing radius={2.5} color="#3b82f6" speed={0.2} />
      <Environment preset="night" />
    </>
  );
}

// ─── Case Studies: Floating project cubes ───────────────────────────────────
function CaseStudiesScene() {
  return (
    <>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
        <FloatingMesh position={[-2.5, 0.5, 0]} rotSpeed={[0.12, 0.18, 0]}>
          <mesh>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.35} emissive="#3b82f6" emissiveIntensity={0.3} />
          </mesh>
        </FloatingMesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.35}>
        <FloatingMesh position={[0, -0.3, -1.2]} rotSpeed={[0.18, 0.12, 0]}>
          <GlassMesh geometry="box" args={[1.1, 1.1, 1.1]} opacity={0.2}>
            <pointLight color="#8b5cf6" intensity={1} distance={4} />
          </GlassMesh>
        </FloatingMesh>
      </Float>
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.3}>
        <FloatingMesh position={[2.5, 0.5, 0]} rotSpeed={[0.1, 0.22, 0]}>
          <mesh>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.35} emissive="#06b6d4" emissiveIntensity={0.3} />
          </mesh>
        </FloatingMesh>
      </Float>
      <Environment preset="night" />
    </>
  );
}

// ─── Industries: Hexagonal energy network ───────────────────────────────────
function IndustriesScene() {
  const nodes: [number, number, number, string][] = useMemo(() => {
    const r = 2.5, pts: [number, number, number, string][] = [];
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981'];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
      pts.push([Math.cos(a) * r, Math.sin(a) * r, 0, colors[i]]);
    }
    return pts;
  }, []);

  const edges = useMemo(() => {
    const pts: THREE.Vector3[][] = [];
    for (let i = 0; i < nodes.length; i++) {
      pts.push([
        new THREE.Vector3(nodes[i][0], nodes[i][1], nodes[i][2]),
        new THREE.Vector3(nodes[(i + 1) % nodes.length][0], nodes[(i + 1) % nodes.length][1], nodes[(i + 1) % nodes.length][2]),
      ]);
      // Connect to center
      pts.push([new THREE.Vector3(nodes[i][0], nodes[i][1], nodes[i][2]), new THREE.Vector3(0, 0, -1)]);
    }
    return pts;
  }, [nodes]);

  return (
    <>
      {edges.map((pts, i) => (
        <EnergyLine key={i} points={pts} color={nodes[i % nodes.length][3]} />
      ))}
      {nodes.map(([x, y, z, color], i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.15}>
          <mesh position={[x, y, z]}>
            <dodecahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial color={color} roughness={0.1} metalness={0.85} transparent opacity={0.65} emissive={color} emissiveIntensity={0.3} />
          </mesh>
        </Float>
      ))}
      <Float speed={0.7} rotationIntensity={0.1} floatIntensity={0.1}>
        <mesh position={[0, 0, -1]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} transparent opacity={0.5} emissive="#ffffff" emissiveIntensity={0.4} />
        </mesh>
      </Float>
      <Environment preset="night" />
    </>
  );
}

// ─── Blog: Floating document pages ──────────────────────────────────────────
function BlogScene() {
  return (
    <>
      {[[-2.2, 0.6, 0, '#3b82f6'], [0, -0.4, -1.2, '#8b5cf6'], [2.2, 0.4, 0, '#06b6d4']].map(([x, y, z, color], i) => (
        <Float key={i} speed={1 + i * 0.15} rotationIntensity={0.15} floatIntensity={0.2}>
          <FloatingMesh position={[x as number, y as number, z as number]} rotSpeed={[0.04, 0.08 + i * 0.03, 0]}>
            <mesh>
              <planeGeometry args={[0.6, 0.8]} />
              <meshStandardMaterial color={color as string} transparent opacity={0.12} side={THREE.DoubleSide} emissive={color as string} emissiveIntensity={0.15} />
            </mesh>
          </FloatingMesh>
        </Float>
      ))}
      <Environment preset="night" />
    </>
  );
}

// ─── Careers: Team constellation ────────────────────────────────────────────
function CareersScene() {
  const team: [number, number, number, string][] = [
    [0, 1.2, 0, '#3b82f6'], [-1.8, 0.2, -0.5, '#8b5cf6'], [1.8, 0.2, -0.5, '#06b6d4'],
    [-1, -1, 0, '#ec4899'], [1, -1, 0, '#f59e0b'],
  ];

  const edges = useMemo(() => {
    const pts: THREE.Vector3[][] = [];
    for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
        pts.push([
          new THREE.Vector3(team[i][0], team[i][1], team[i][2]),
          new THREE.Vector3(team[j][0], team[j][1], team[j][2]),
        ]);
      }
    }
    return pts;
  }, []);

  return (
    <>
      {edges.map((pts, i) => (
        <EnergyLine key={i} points={pts} color="#3b82f6" />
      ))}
      {team.map(([x, y, z, color], i) => (
        <Float key={i} speed={1 + i * 0.12} rotationIntensity={0.15} floatIntensity={0.2}>
          <mesh position={[x, y, z]}>
            <sphereGeometry args={[0.22, 12, 12]} />
            <meshStandardMaterial color={color} roughness={0.15} metalness={0.8} transparent opacity={0.55} emissive={color} emissiveIntensity={0.3} />
          </mesh>
        </Float>
      ))}
      <Environment preset="night" />
    </>
  );
}

// ─── FAQ: Orbiting question marks ───────────────────────────────────────────
function FAQScene() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.15}>
        <FloatingMesh position={[-1.8, 0, 0]} rotSpeed={[0.1, 0.12, 0]}>
          <mesh>
            <torusGeometry args={[0.4, 0.06, 8, 16, Math.PI * 1.5]} />
            <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.35} emissive="#8b5cf6" emissiveIntensity={0.3} />
          </mesh>
        </FloatingMesh>
      </Float>
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.2}>
        <FloatingMesh position={[1.8, 0.3, -0.5]} rotSpeed={[0.12, 0.1, 0]}>
          <mesh>
            <torusGeometry args={[0.35, 0.05, 8, 16, Math.PI * 1.5]} />
            <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.3} emissive="#3b82f6" emissiveIntensity={0.25} />
          </mesh>
        </FloatingMesh>
      </Float>
      <GlowRing radius={2.2} color="#8b5cf6" speed={0.3} />
      <Environment preset="night" />
    </>
  );
}

// ─── Dashboard: Pulsing data bars ───────────────────────────────────────────
function DashboardScene() {
  const bars: [number, number, string][] = [
    [-2, 1.8, '#3b82f6'], [-1, 2.8, '#8b5cf6'], [0, 2.2, '#06b6d4'],
    [1, 3.5, '#ec4899'], [2, 2.5, '#f59e0b'],
  ];

  return (
    <>
      {bars.map(([x, h, color], i) => (
        <Float key={i} speed={1 + i * 0.12} rotationIntensity={0.05} floatIntensity={0.08}>
          <mesh position={[x, h / 2 - 1.5, 0]}>
            <boxGeometry args={[0.32, h, 0.32]} />
            <meshStandardMaterial color={color} transparent opacity={0.2} emissive={color} emissiveIntensity={0.2} />
          </mesh>
        </Float>
      ))}
      <GlowRing radius={3} color="#3b82f6" speed={0.15} />
      <Environment preset="night" />
    </>
  );
}

// ─── Default: Minimal ambient ───────────────────────────────────────────────
function DefaultScene() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.15}>
        <FloatingMesh position={[3.5, 1.2, -4]} rotSpeed={[0.1, 0.12, 0]}>
          <mesh><octahedronGeometry args={[0.35, 0]} /><meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.2} emissive="#3b82f6" emissiveIntensity={0.15} /></mesh>
        </FloatingMesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.12}>
        <FloatingMesh position={[-3.5, -1, -4]} rotSpeed={[0.12, 0.1, 0]}>
          <mesh><dodecahedronGeometry args={[0.3, 0]} /><meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.18} emissive="#8b5cf6" emissiveIntensity={0.12} /></mesh>
        </FloatingMesh>
      </Float>
      <Environment preset="night" />
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// ROUTE → SCENE MAP
// ═══════════════════════════════════════════════════════════════════════════
const SCENES: Record<string, ReactNode> = {
  '/': <HeroScene />,
  '/services': <ServicesScene />,
  '/about': <AboutScene />,
  '/process': <ProcessScene />,
  '/pricing': <PricingScene />,
  '/contact': <ContactScene />,
  '/case-studies': <CaseStudiesScene />,
  '/industries': <IndustriesScene />,
  '/blog': <BlogScene />,
  '/careers': <CareersScene />,
  '/faq': <FAQScene />,
  '/dashboard': <DashboardScene />,
  '/admin': <DashboardScene />,
};

function getSceneForPath(pathname: string): ReactNode {
  if (SCENES[pathname]) return SCENES[pathname];
  if (pathname.startsWith('/services/')) return <ServicesScene />;
  if (pathname.startsWith('/case-studies/')) return <CaseStudiesScene />;
  if (pathname.startsWith('/blog/')) return <BlogScene />;
  if (pathname.startsWith('/dashboard/')) return <DashboardScene />;
  if (pathname.startsWith('/admin/')) return <DashboardScene />;
  return <DefaultScene />;
}

function SceneRouter() {
  const pathname = usePathname();
  return <>{getSceneForPath(pathname)}</>;
}

// ═══════════════════════════════════════════════════════════════════════════
// GLOBAL 3D — THE ONE AND ONLY CANVAS
// ═══════════════════════════════════════════════════════════════════════════
export default function Global3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.65 }}>
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 50 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance', stencil: false, preserveDrawingBuffer: false }}
        style={{ background: '#0a0a0f' }}
        dpr={[1, 1.5]}
        frameloop="always"
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 8, 25]} />
        <Suspense fallback={null}>
          <ScrollCamera />
          <PremiumLights />
          <FlowingParticles count={100} />
          <SceneRouter />
          <PostEffects />
        </Suspense>
      </Canvas>
    </div>
  );
}
