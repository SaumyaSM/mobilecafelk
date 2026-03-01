// components/hero.tsx
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slides = [
  "/images/background.png",
  "/images/background2.jpg",
  "/images/background3.jpg",
  "/images/background4.jpg",
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const currentImage = slides[index % slides.length]

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative h-180 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            One stop for All Mobils 📱
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Buy | Sell | Fix
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/auth/signup/customer">
              <Button>
                Become a member
              </Button>
            </Link>
            <Link href="/accessories">
              <Button variant="outline" className="text-white border-white">
                Register my shop
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/40"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
