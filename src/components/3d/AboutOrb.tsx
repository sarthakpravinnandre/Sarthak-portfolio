import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AboutOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3
      meshRef.current.rotation.y = t * 0.2
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1
    }
  })

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#00d4ff" />
      <pointLight position={[-2, -2, 2]} intensity={1.5} color="#7c3aed" />

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.9, 3]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color="#0d0d2a"
          emissive="#7c3aed"
          emissiveIntensity={0.15}
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[1.3, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}
