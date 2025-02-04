"use client"

import type React from "react"
import { useEffect, useState } from "react"

const Circle = ({
  size,
  position,
  speed,
}: { size: number; position: { x: number; y: number }; speed: { x: number; y: number } }) => {
  const [pos, setPos] = useState(position)

  useEffect(() => {
    const animateCircle = () => {
      setPos((prevPos) => {
        const newX = prevPos.x + speed.x
        const newY = prevPos.y + speed.y

        if (newX < 0 || newX > window.innerWidth) speed.x *= -1
        if (newY < 0 || newY > window.innerHeight) speed.y *= -1

        return { x: newX, y: newY }
      })
      requestAnimationFrame(animateCircle)
    }

    const animation = requestAnimationFrame(animateCircle)
    return () => cancelAnimationFrame(animation)
  }, [speed])

  return (
    <div
      className="rounded-full absolute opacity-20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
      }}
    />
  )
}

export default function AnimatedBackground() {
  const [circles, setCircles] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const generateCircles = () => {
      const newCircles = []
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 100 + 50
        const position = {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }
        const speed = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        }
        newCircles.push(<Circle key={i} size={size} position={position} speed={speed} />)
      }
      setCircles(newCircles)
    }

    generateCircles()
    window.addEventListener("resize", generateCircles)
    return () => window.removeEventListener("resize", generateCircles)
  }, [])

  return <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900 to-purple-900">{circles}</div>
}

