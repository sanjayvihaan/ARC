import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Content Column */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-sm font-medium text-muted-foreground">About us</h2>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
              Building dreams,
              <br />
              brick by brick,
              <br />
              since the 1960s.
            </h1>
            <p className="text-lg text-muted-foreground">
              Since the 1960s, we&apos;ve been building in Bengaluru, starting with handmade bricks and tiles. Today, we construct everything from cosy homes to busy business centres using steel and glass. We&apos;re a dedicated and family-oriented team, using the latest tools while staying true to our roots.
            </p>
          </div>
          <Button variant="outline" className="w-fit group">
            Know More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Images Column */}
        <div className="relative hidden lg:flex">
          <div className="grid grid-cols-4 gap-4">
            {[
              "/Home1.jpg",
              "/Home5.jpg",
              "/Home3.jpg",
              "/Home4.jpg"
            ].map((src, index) => (
              <div
                key={index}
                className="relative h-[600px] overflow-hidden rounded-[40px] first:mt-12 last:mt-24"
              >
                <img
                  src={src}
                  alt={`Building showcase ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

