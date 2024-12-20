"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    id: 1,
    title: "Modern Industrial Complex",
    location: "Business Park Zone 23",
    image: "/Home1.jpg",
  },
  {
    id: 2,
    title: "Luxury Residential Development",
    location: "Coastal Area North",
    image: "/Home4.jpg",
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "Downtown District",
    image: "/Home5.jpg",
  },
  {
    id: 4,
    title: "Sustainable Eco-Village",
    location: "Green Valley",
    image: "/Home3.jpg",
  },
]

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Our Completed Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-8">At Arc Constructions, we take pride in our diverse portfolio of successfully completed projects. Each venture showcases our commitment to quality, innovation, and client satisfaction. Explore our past projects to witness the excellence we bring to every development.</p>
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full h-48 mb-4"
                      />
                      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.location}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

