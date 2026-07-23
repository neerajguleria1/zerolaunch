'use client';

import { shaderMaterial } from '@react-three/drei';
import { extend, type ThreeEvent } from '@react-three/fiber';
import { forwardRef, useRef, useMemo, useEffect, type ReactNode } from 'react';
import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════════════════
// HOLOGRAPHIC MATERIAL — rainbow iridescent effect
// ═══════════════════════════════════════════════════════════════════════════
const HolographicMaterial = shaderMaterial(
  { uTime: 0, uMouse: new THREE.Vector2(0, 0), uFresnelPower: 2.0 },
  // Vertex
  `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;

      // Subtle vertex displacement
      float wave = sin(position.x * 3.0 + uTime * 0.5) * cos(position.y * 3.0 + uTime * 0.3) * 0.02;
      vec3 displaced = position + normal * wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
    }
  `,
  // Fragment
  `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    uniform float uTime;
    uniform float uFresnelPower;

    void main() {
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), uFresnelPower);

      // Rainbow iridescence
      float angle = dot(vNormal, viewDir);
      vec3 rainbow = vec3(
        sin(angle * 6.28 + uTime * 0.3) * 0.5 + 0.5,
        sin(angle * 6.28 + uTime * 0.3 + 2.094) * 0.5 + 0.5,
        sin(angle * 6.28 + uTime * 0.3 + 4.189) * 0.5 + 0.5
      );

      vec3 baseColor = vec3(0.15, 0.3, 0.8);
      vec3 finalColor = mix(baseColor, rainbow, fresnel * 0.6 + 0.2);

      float alpha = 0.35 + fresnel * 0.45;
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

// ═══════════════════════════════════════════════════════════════════════════
// GLASS MATERIAL — refraction + chromatic edge
// ═══════════════════════════════════════════════════════════════════════════
const GlassMaterial = shaderMaterial(
  { uTime: 0, uOpacity: 0.3, uFresnelPower: 3.0 },
  `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    uniform float uTime;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

      // Subtle breathing animation
      float breath = sin(uTime * 0.8) * 0.01;
      vec3 displaced = position * (1.0 + breath);

      gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
    }
  `,
  `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    uniform float uTime;
    uniform float uOpacity;
    uniform float uFresnelPower;

    void main() {
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), uFresnelPower);

      // Chromatic aberration at edges
      vec3 baseColor = vec3(0.2, 0.4, 0.9);
      vec3 edgeColor = vec3(0.6, 0.3, 1.0);
      vec3 finalColor = mix(baseColor, edgeColor, fresnel);

      // Subtle environment reflection simulation
      float envReflection = pow(max(dot(reflect(-viewDir, vNormal), vec3(0.0, 1.0, 0.0)), 0.0), 8.0);
      finalColor += vec3(0.15, 0.2, 0.35) * envReflection;

      float alpha = uOpacity + fresnel * 0.5;
      gl_FragColor = vec4(finalColor, alpha);
    }
  `
);

// ═══════════════════════════════════════════════════════════════════════════
// ENERGY FIELD MATERIAL — flowing energy effect
// ═══════════════════════════════════════════════════════════════════════════
const EnergyFieldMaterial = shaderMaterial(
  { uTime: 0, uColor1: new THREE.Color('#3b82f6'), uColor2: new THREE.Color('#8b5cf6') },
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;

    void main() {
      vUv = uv;
      vPosition = position;

      vec3 pos = position;
      float wave = sin(pos.x * 4.0 + uTime * 1.2) * cos(pos.y * 4.0 + uTime * 0.8) * 0.1;
      pos.z += wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;

    void main() {
      // Flowing energy pattern
      float pattern = sin(vUv.x * 10.0 + uTime * 2.0) * sin(vUv.y * 10.0 + uTime * 1.5);
      float glow = smoothstep(0.3, 0.8, pattern);

      vec3 color = mix(uColor1, uColor2, glow);

      // Edge fade
      float edgeFade = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x)
                      * smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

      float alpha = glow * 0.4 * edgeFade;
      gl_FragColor = vec4(color, alpha);
    }
  `
);

extend({ HolographicMaterial, GlassMaterial, EnergyFieldMaterial });

// ═══════════════════════════════════════════════════════════════════════════
// SHADER COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

export function HolographicMesh({
  children,
  position = [0, 0, 0],
  scale = 1,
  geometry = 'icosahedron',
  args,
}: {
  children?: ReactNode;
  position?: [number, number, number];
  scale?: number;
  geometry?: 'icosahedron' | 'octahedron' | 'dodecahedron' | 'torusKnot' | 'torus';
  args?: number[];
}) {
  const ref = useRef<THREE.ShaderMaterial>(null);

  const geometryNode = useMemo(() => {
    switch (geometry) {
      case 'icosahedron': return <icosahedronGeometry args={(args || [1, 3]) as any} />;
      case 'octahedron': return <octahedronGeometry args={(args || [1, 0]) as any} />;
      case 'dodecahedron': return <dodecahedronGeometry args={(args || [1, 0]) as any} />;
      case 'torusKnot': return <torusKnotGeometry args={(args || [0.8, 0.25, 64, 16]) as any} />;
      case 'torus': return <torusGeometry args={(args || [0.8, 0.3, 16, 32]) as any} />;
    }
  }, [geometry, JSON.stringify(args)]);

  return (
    <group position={position} scale={scale}>
      <mesh>{geometryNode}<holographicMaterial ref={ref} transparent side={THREE.DoubleSide} /></mesh>
      {children}
    </group>
  );
}

export function GlassMesh({
  children,
  position = [0, 0, 0],
  scale = 1,
  geometry = 'icosahedron',
  args,
  opacity = 0.3,
}: {
  children?: ReactNode;
  position?: [number, number, number];
  scale?: number;
  geometry?: 'icosahedron' | 'octahedron' | 'dodecahedron' | 'torusKnot' | 'torus' | 'sphere' | 'box';
  args?: number[];
  opacity?: number;
}) {
  const ref = useRef<THREE.ShaderMaterial>(null);

  const geometryNode = useMemo(() => {
    switch (geometry) {
      case 'icosahedron': return <icosahedronGeometry args={(args || [1, 3]) as any} />;
      case 'octahedron': return <octahedronGeometry args={(args || [1, 0]) as any} />;
      case 'dodecahedron': return <dodecahedronGeometry args={(args || [1, 0]) as any} />;
      case 'torusKnot': return <torusKnotGeometry args={(args || [0.8, 0.25, 64, 16]) as any} />;
      case 'torus': return <torusGeometry args={(args || [0.8, 0.3, 16, 32]) as any} />;
      case 'sphere': return <sphereGeometry args={(args || [1, 32, 32]) as any} />;
      case 'box': return <boxGeometry args={(args || [1, 1, 1]) as any} />;
    }
  }, [geometry, JSON.stringify(args)]);

  return (
    <group position={position} scale={scale}>
      <mesh>{geometryNode}<glassMaterial ref={ref} transparent opacity={opacity} side={THREE.DoubleSide} /></mesh>
      {children}
    </group>
  );
}

export function EnergyField({
  position = [0, 0, 0],
  scale = 1,
  color1 = '#3b82f6',
  color2 = '#8b5cf6',
}: {
  position?: [number, number, number];
  scale?: number;
  color1?: string;
  color2?: string;
}) {
  const ref = useRef<THREE.ShaderMaterial>(null);

  return (
    <mesh position={position} scale={scale}>
      <planeGeometry args={[4, 3, 32, 32]} />
      <energyFieldMaterial
        ref={ref}
        transparent
        side={THREE.DoubleSide}
        uColor1={new THREE.Color(color1)}
        uColor2={new THREE.Color(color2)}
      />
    </mesh>
  );
}
