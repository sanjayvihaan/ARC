"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";

export const projects = [
  {
    title: "Land Banking",
    description:
      "Land banking is the practice of aggregating parcels of land for future sale or development.",
  },

  {
    title: "Industrial Parks",
    description:
      "An industrial park, also known as industrial estate or trading estate, is an area zoned and planned for the purpose of industrial development.",
  },

  {
    title: "Business Parks",
    description:
      "Business parks in Bengaluru are popular among IT and ITES companies, as well as startups and entrepreneurs.",
  },
  {
    title: "Residential Spaces",
    description:
      "Residential spaces are private living areas, excluding common areas within a multicomplex building.",
  },


];

export const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (

    <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="">
            <div className="flex flex-col justify-center items-center ">
                <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Our Services</h2>
                <p className="text-lg text-muted-foreground text-center mb-8">Arc Constructions offers a helping hand to businesses and individuals alike, turning visions into thriving spaces.</p>
                <div className="flex justify-center gap-3">
                    <Button className="flex justify-center ">Resdential</Button>
                    <Button className="flex justify-center " variant={"outline"}>Construction</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-6">
                    {projects.map((project, idx) => (
                    <div
                       // Use a combination of idx and link (if available) to ensure uniqueness
                        key={project?.link || `project-${idx}`}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Animated hover background */}
                        <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                            className="absolute inset-0 h-full w-full bg-slate-800/[0.7] dark:bg-zinc-300/[0.6] block rounded-3xl"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.15 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.15, delay: 0.2 },
                            }}
                            />
                        )}
                        </AnimatePresence>

                        {/* Main card */}
                        <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-800/[0.2] border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-200 group-hover:border-gray-300 dark:group-hover:border-slate-600 relative z-50">
                        <div className="relative z-50">
                            <div className="p-4">
                            {/* Title */}
                            <h4 className="text-gray-800 dark:text-zinc-100 font-bold tracking-wide mt-4">
                                {project.title}
                            </h4>
                            {/* Description */}
                            <p className="mt-6 text-gray-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm">
                                {project.description}
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
            </div>

        
            <Button className="flex justify-center ">Know More

                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
            </Button>
        </div>
    </section>
    


  );
};
