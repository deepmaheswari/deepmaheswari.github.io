import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

function SpinningShape() {
  const meshRef = useRef<Mesh>(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2
    meshRef.current.rotation.x += pointer.current.y * delta * 0.05
    meshRef.current.rotation.y += pointer.current.x * delta * 0.05
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshStandardMaterial color="#22d3ee" wireframe emissive="#0e7490" emissiveIntensity={0.4} />
    </mesh>
  )
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch {
    return false
  }
}

export default function HeroScene() {
  const [webglSupported] = useState(() => hasWebGL())

  if (!webglSupported) {
    return <div className="hero-scene-fallback" />
  }

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
      <Suspense fallback={null}>
        <SpinningShape />
      </Suspense>
    </Canvas>
  )
}
