"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}


interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title ,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full ">
        <h2 className="cc-h2 text-center mx-auto mb-16">
          {title}
        </h2>
       

        <div className="flex flex-col gap-6 md:gap-10 lg:grid lg:grid-cols-2">
  {/* Image Section */}
  <div className="order-1 lg:order-2 relative overflow-hidden rounded-lg h-[200px] sm:h-[300px] md:h-[400px]">
    <AnimatePresence mode="wait">
      {features.map(
        (feature, index) =>
          index === currentFeature && (
            <motion.div
              key={index}
              className="absolute inset-0 rounded-lg overflow-hidden"
              initial={{ y: 100, opacity: 0, rotateX: -20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -100, opacity: 0, rotateX: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={feature.image}
                alt={feature.step}
                className="w-full h-full object-cover transition-transform transform"
                width={1000}
                height={500}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </motion.div>
          )
      )}
    </AnimatePresence>
  </div>

  {/* Text Section */}
  <div className="order-2 lg:order-1 space-y-8">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        className="flex items-center gap-6 md:gap-8"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={cn(
            "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
            index === currentFeature
              ? "bg-primary border-primary text-primary-foreground scale-110"
              : "bg-muted border-muted-foreground"
          )}
        >
          {index <= currentFeature ? (
            <span className="text-lg font-bold">✓</span>
          ) : (
            <span className="text-lg font-semibold">{index + 1}</span>
          )}
        </motion.div>

        <div className="flex-1">
          <h3 className="cc-h3">{feature.title || feature.step}</h3>
          <p className="subtitle">{feature.content}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </div>
  )
}
