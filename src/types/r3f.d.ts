import type { ThreeElements } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    holographicMaterial: any;
    glassMaterial: any;
    energyFieldMaterial: any;
  }
}
