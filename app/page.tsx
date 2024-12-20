import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import {OurServices} from "@/components/OurServices"
import {CoreVal} from "@/components/CoreVal"
import {ContactForm} from "@/components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <OurServices />
      <CoreVal />
      <ContactForm /> 

    </>
  )
}