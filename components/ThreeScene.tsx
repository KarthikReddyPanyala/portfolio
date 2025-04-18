'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create brain hemispheres with more distinct shape
    const leftHemisphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI),
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9
      })
    )
    leftHemisphere.position.x = -0.8
    leftHemisphere.position.y = 0.2
    leftHemisphere.rotation.z = -0.2
    scene.add(leftHemisphere)

    const rightHemisphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI),
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9
      })
    )
    rightHemisphere.position.x = 0.8
    rightHemisphere.position.y = 0.2
    rightHemisphere.rotation.z = 0.2
    scene.add(rightHemisphere)

    // Add corpus callosum with better shape
    const corpusCallosum = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 1.6, 32),
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9
      })
    )
    corpusCallosum.rotation.z = Math.PI / 2
    corpusCallosum.position.y = 0.2
    scene.add(corpusCallosum)

    // Add cerebellum
    const cerebellum = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI),
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9
      })
    )
    cerebellum.position.y = -0.8
    cerebellum.scale.set(1.5, 0.6, 1)
    scene.add(cerebellum)

    // Add brain stem
    const brainStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.1, 0.8, 32),
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9
      })
    )
    brainStem.position.y = -1.2
    scene.add(brainStem)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Position camera
    camera.position.z = 5
    camera.position.y = 1

    // Mouse controls
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
    }

    const onMouseUp = () => {
      isDragging = false
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      }

      leftHemisphere.rotation.y += deltaMove.x * 0.01
      rightHemisphere.rotation.y += deltaMove.x * 0.01
      corpusCallosum.rotation.y += deltaMove.x * 0.01
      cerebellum.rotation.y += deltaMove.x * 0.01
      brainStem.rotation.y += deltaMove.x * 0.01

      previousMousePosition = { x: e.clientX, y: e.clientY }
    }

    containerRef.current.addEventListener('mousedown', onMouseDown)
    containerRef.current.addEventListener('mouseup', onMouseUp)
    containerRef.current.addEventListener('mousemove', onMouseMove)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Subtle breathing animation
      const time = Date.now() * 0.001
      const scale = 1 + Math.sin(time) * 0.02
      leftHemisphere.scale.set(scale, scale, scale)
      rightHemisphere.scale.set(scale, scale, scale)
      corpusCallosum.scale.set(scale, scale, scale)
      cerebellum.scale.set(scale, scale, scale)
      brainStem.scale.set(scale, scale, scale)

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeEventListener('mousedown', onMouseDown)
      containerRef.current?.removeEventListener('mouseup', onMouseUp)
      containerRef.current?.removeEventListener('mousemove', onMouseMove)
      containerRef.current?.removeChild(renderer.domElement)
      scene.remove(leftHemisphere)
      scene.remove(rightHemisphere)
      scene.remove(corpusCallosum)
      scene.remove(cerebellum)
      scene.remove(brainStem)
      leftHemisphere.geometry.dispose()
      rightHemisphere.geometry.dispose()
      corpusCallosum.geometry.dispose()
      cerebellum.geometry.dispose()
      brainStem.geometry.dispose()
      leftHemisphere.material.dispose()
      rightHemisphere.material.dispose()
      corpusCallosum.material.dispose()
      cerebellum.material.dispose()
      brainStem.material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-[500px] mb-16 w-full cursor-grab active:cursor-grabbing bg-black"
      style={{ position: 'relative' }}
    />
  )
} 