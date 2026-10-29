import { Suspense, useState, useRef, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import NodeNetwork from './NodeNetwork'

interface HeroCanvasProps {
  isMobile: boolean
}

export default function HeroCanvas({ isMobile }: HeroCanvasProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const animFrameRef = useRef<number>(0)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    animFrameRef.current = requestAnimationFrame(() => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      })
    })
  }, [])

  return (
    <div
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
          <NodeNetwork mouse={mouse} isMobile={isMobile} />
          {!isMobile && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate={false}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}
