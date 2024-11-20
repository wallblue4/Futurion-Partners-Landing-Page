import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import * as THREE from 'three'

const products = [
  { 
    name: "Predictive Analytics", 
    description: "Foresee trends with quantum-level precision",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M2 2v20h20"/>
        <path d="M2 10h20"/>
        <path d="M10 2v20"/>
        <circle cx="18" cy="18" r="3"/>
        <path d="M18 15v-4"/>
        <path d="M15 18h-4"/>
      </svg>
    )
  },
  { 
    name: "Neuro-Linguistic AI", 
    description: "Human-like text understanding and generation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/>
        <path d="M3 21h18"/>
        <path d="M12 15v6"/>
        <path d="M9 21h6"/>
      </svg>
    )
  },
  { 
    name: "Quantum Automation", 
    description: "Optimize processes with quantum AI",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 3a9 9 0 0 1 9 9"/>
        <path d="M12 21a9 9 0 0 1-9-9"/>
        <path d="M3 12a9 9 0 0 1 9-9"/>
        <path d="M21 12a9 9 0 0 1-9 9"/>
      </svg>
    )
  },
  { 
    name: "Cognitive Supercomputing", 
    description: "Simulate complex human thought processes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    )
  },
]

const NeuralBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const particles = 5000

    for (let i = 0; i < particles; i++) {
      const x = Math.random() * 2000 - 1000
      const y = Math.random() * 2000 - 1000
      const z = Math.random() * 2000 - 1000
      vertices.push(x, y, z)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    // En NeuralBackground
const material = new THREE.PointsMaterial({ 
    color: 0x4a90e2, 
    size: 1.5,
    transparent: true,
    opacity: 0.6
  })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    camera.position.z = 1000

    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.x += 0.001
      points.rotation.y += 0.002
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0" />
}


export default function ElegantFuturisticProductSection() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }))
  }, [controls])

  return (
    <section  id= "dark-section-1" className="relative py-24 overflow-hidden bg-gray-900 text-white min-h-screen">
      <NeuralBackground />
      <div className="container relative z-10 mx-auto px-8 max-w-8xl">
  <h2 className="text-5xl font-serif text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 tracking-tight">
    Our Quantum AI Solutions
  </h2>
  
  {/* Ajusta el grid para tener 2 columnas en lugar de 4 */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    {products.map((product, index) => (
      <motion.div
        key={index}
        className="relative min-h-[400px] bg-gray-900/40 backdrop-filter backdrop-blur-lg square-xl border-[0.5px] border-white/10 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        custom={index}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
        }}
      >
        {/* Gradiente de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent" />
        
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="relative p-12 h-full flex flex-col">
          {/* Sección superior con icono y título */}
          <div className="flex items-start space-x-8 mb-8">
            <div className="relative p-4 bg-blue-900/20 rounded-lg">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-blue-400"
              >
                {product.icon}
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-3xl font-serif text-white mb-4 tracking-wide">
                {product.name}
              </h3>
              <div className="w-16 h-[1px] bg-blue-500/30" />
            </div>
          </div>

          {/* Descripción */}
          <p className="text-lg font-semiblond text-gray-300/90 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Footer con botón */}
          <div className="mt-auto">
            <motion.button
              className="group flex font-semiblond items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              whileHover="hover"
            >
              <span className="text-sm uppercase tracking-wider">Explore Solution</span>
              <motion.span
                variants={{
                  hover: {
                    x: 10,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut"
                    }
                  }
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  className="transform transition-transform"
                >
                  <path 
                    strokeLinecap="square" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.span>
            </motion.button>
          </div>

          {/* Elemento decorativo en esquina */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-tl-full" />
        </div>

        {/* Overlay sutil al hacer hover */}
        <motion.div
          className="absolute inset-0 bg-blue-500/0"
          whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.03)' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    ))}
  </div>
</div>
    </section>
  )
}