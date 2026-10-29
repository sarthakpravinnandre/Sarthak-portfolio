import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Layers, RotateCcw, Box } from 'lucide-react'

function BuildingMesh({
  wireframe,
  exploded,
  mode,
}: {
  wireframe: boolean
  exploded: boolean
  mode: '2d' | '3d'
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25
    }
  })

  // Conceptual height animation between 2D footprint and 3D building
  const heightScale = mode === '2d' ? 0.05 : 1

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Foundation / 2D Floor Plan Grid */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[3.2, 0.08, 3.2]} />
        <meshStandardMaterial
          color="#1e1e38"
          roughness={0.7}
          metalness={0.3}
          wireframe={wireframe}
        />
      </mesh>

      {/* Ground Floor (Level 0) */}
      <mesh position={[0, 0.4 * heightScale, 0]}>
        <boxGeometry args={[2.8, 0.8 * heightScale, 2.6]} />
        <meshPhysicalMaterial
          color="#00d4ff"
          emissive="#002244"
          roughness={0.15}
          metalness={0.8}
          transmission={wireframe ? 0 : 0.4}
          transparent
          opacity={0.85}
          wireframe={wireframe}
        />
      </mesh>

      {/* Structural Columns */}
      {[-1.2, 1.2].map((x) =>
        [-1.1, 1.1].map((z) => (
          <mesh
            key={`${x}-${z}`}
            position={[x, (exploded ? 1.4 : 0.9) * heightScale, z]}
          >
            <cylinderGeometry args={[0.06, 0.06, 1.8 * heightScale, 16]} />
            <meshStandardMaterial
              color="#c084fc"
              emissive="#3b0764"
              roughness={0.3}
              metalness={0.9}
            />
          </mesh>
        ))
      )}

      {/* Level 1 (First Floor) */}
      <mesh
        position={[
          0.2,
          (exploded ? 1.6 : 1.2) * heightScale,
          -0.1,
        ]}
      >
        <boxGeometry args={[2.5, 0.7 * heightScale, 2.2]} />
        <meshPhysicalMaterial
          color="#7c3aed"
          emissive="#2e1065"
          roughness={0.2}
          metalness={0.85}
          transmission={wireframe ? 0 : 0.5}
          transparent
          opacity={0.85}
          wireframe={wireframe}
        />
      </mesh>

      {/* Level 2 (Cantilevered Studio Level) */}
      <mesh
        position={[
          -0.3,
          (exploded ? 2.6 : 1.85) * heightScale,
          0.3,
        ]}
      >
        <boxGeometry args={[2.2, 0.6 * heightScale, 2.0]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          emissive="#083344"
          roughness={0.1}
          metalness={0.9}
          transmission={wireframe ? 0 : 0.6}
          transparent
          opacity={0.9}
          wireframe={wireframe}
        />
      </mesh>

      {/* Rooftop Solar Pergola / Canopy */}
      <mesh
        position={[
          -0.3,
          (exploded ? 3.4 : 2.25) * heightScale,
          0.3,
        ]}
      >
        <boxGeometry args={[2.4, 0.04, 2.2]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0369a1"
          emissiveIntensity={0.6}
          wireframe={wireframe}
        />
      </mesh>

      {/* Ambient and local lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 3]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[-4, 3, -2]} intensity={1.2} color="#a855f7" />
    </group>
  )
}

export default function ArchitecturalViewer() {
  const [wireframe, setWireframe] = useState(false)
  const [exploded, setExploded] = useState(false)
  const [mode, setMode] = useState<'3d' | '2d'>('3d')

  return (
    <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-purple-500/30 bg-[#090915]">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [4, 3.5, 4.5], fov: 42 }}>
        <Suspense fallback={null}>
          <BuildingMesh wireframe={wireframe} exploded={exploded} mode={mode} />
          <OrbitControls enableZoom={true} enablePan={false} maxDistance={8} minDistance={3} />
        </Suspense>
      </Canvas>

      {/* Interactive Controls Bar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode(mode === '3d' ? '2d' : '3d')}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              mode === '2d'
                ? 'bg-cyan-500 text-black font-semibold'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            <RotateCcw size={12} />
            <span>{mode === '3d' ? 'Flatten to 2D Plan' : 'Extrude to 3D'}</span>
          </button>

          <button
            onClick={() => setExploded(!exploded)}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              exploded
                ? 'bg-purple-600 text-white font-semibold'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            <Layers size={12} />
            <span>Floor Separation</span>
          </button>

          <button
            onClick={() => setWireframe(!wireframe)}
            className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              wireframe
                ? 'bg-blue-500 text-white font-semibold'
                : 'bg-white/5 text-white/70 hover:bg-white/10'
            }`}
          >
            <Box size={12} />
            <span>CAD Mesh</span>
          </button>
        </div>

        <span className="hidden sm:inline text-[10px] text-white/40">
          Rotate: Drag · Zoom: Scroll
        </span>
      </div>
    </div>
  )
}
