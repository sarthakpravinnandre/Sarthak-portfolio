import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface NodeNetworkProps {
  mouse: { x: number; y: number }
  isMobile: boolean
}

export default function NodeNetwork({ mouse, isMobile }: NodeNetworkProps) {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)

  const nodeCount = isMobile ? 36 : 64
  const particleCount = isMobile ? 180 : 420

  // Generate random nodes in 3D space
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = []
    for (let i = 0; i < nodeCount; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 5.5,
          (Math.random() - 0.5) * 4.5,
          (Math.random() - 0.5) * 3.5
        )
      )
    }
    return pts
  }, [nodeCount])

  // Generate line connections between nearby nodes
  const linePositions = useMemo(() => {
    const positions: number[] = []
    const threshold = 1.9
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < threshold) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z)
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }
    return new Float32Array(positions)
  }, [nodes])

  // Particle positions
  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 11
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9
      pos[i * 3 + 2] = (Math.random() - 0.5) * 7
    }
    return pos
  }, [particleCount])

  // Node positions for points
  const nodePositions = useMemo(() => {
    const pos = new Float32Array(nodes.length * 3)
    nodes.forEach((n, i) => {
      pos[i * 3] = n.x
      pos[i * 3 + 1] = n.y
      pos[i * 3 + 2] = n.z
    })
    return pos
  }, [nodes])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime

    // Gentle rotation + responsive mouse parallax
    groupRef.current.rotation.y = t * 0.08 + mouse.x * 0.18
    groupRef.current.rotation.x = mouse.y * 0.1
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.12

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03
      particlesRef.current.rotation.x = t * 0.015
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.2
      ringRef1.current.rotation.y = t * 0.15
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.y = -t * 0.18
      ringRef2.current.rotation.z = t * 0.12
    }
  })

  return (
    <group ref={groupRef}>
      {/* Background ambient field particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#00d4ff"
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>

      {/* Interconnecting neural lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.18}
        />
      </lineSegments>

      {/* Connected nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#38bdf8"
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

      {/* Central geometric metallic/translucent AI Core */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#0055ff"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
          wireframe
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.45, 1]} />
        <meshPhysicalMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.7}
          transmission={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Intersecting orbital rings */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.35, 0.012, 16, 100]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.7}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[1.75, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.6}
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Floating data shards / tetrahedrons */}
      {[
        { pos: [1.6, 0.9, 0.3] as [number, number, number], color: '#38bdf8' },
        { pos: [-1.7, -0.6, 0.6] as [number, number, number], color: '#8b5cf6' },
        { pos: [0.4, 1.6, -0.9] as [number, number, number], color: '#06b6d4' },
        { pos: [-0.9, -1.5, 0.4] as [number, number, number], color: '#c084fc' },
      ].map((item, idx) => (
        <mesh key={idx} position={item.pos}>
          <tetrahedronGeometry args={[0.13, 0]} />
          <meshStandardMaterial
            color={item.color}
            emissive={item.color}
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Cinematic Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 3]} intensity={1.2} color="#00d4ff" />
      <pointLight position={[-3, -2, -1]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[0, 0, 2.5]} intensity={0.8} color="#ffffff" />
    </group>
  )
}
