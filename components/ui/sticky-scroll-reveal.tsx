"use client"

import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  const { theme } = useTheme()

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    "bg-slate-900 dark:bg-slate-200",
    "bg-black dark:bg-white",
    "bg-neutral-900 dark:bg-neutral-200",
  ]

  const linearGradients = [
    "bg-gradient-to-br from-cyan-500 to-emerald-500",
    "bg-gradient-to-br from-pink-500 to-indigo-500",
    "bg-gradient-to-br from-orange-500 to-yellow-500",
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: theme === "dark" ? "#1f2937" : "#f3f4f6", // Tailwind's gray-800 for dark and gray-100 for light
      }}
      className="h-[30rem] overflow-y-auto flex justify-between relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mt-4">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-gray-900 dark:text-gray-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-gray-700 dark:text-gray-300 max-w-sm mt-2"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden",
          backgroundGradient,
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}

