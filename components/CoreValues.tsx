"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Committed",
    description:
      "At Arc Constructions, we walk the talk. We don't just build; we invest. By developing properties ourselves, we pour our heart and soul into delivering on time and within budget. It's a personal commitment, etched in every brick and beam.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://imgs.search.brave.com/c3s-hIZsWCsbxHKnNr6lr7vLe1n0V9eRRtbtsfoY_Aw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/Mzg0Mzg2Mi9waG90/by9idXNpbmVzcy1t/ZWV0aW5nLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz00azlI/N2FnbXBuOTJCN2Jr/VXl3dmtLNUNrd205/WThmOFFyR3M0RFJE/V3BFPQ"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Inspired",
    description:
      "We don't see empty lots, we see possibilities. We're not just builders, we're architects of transformation. We breathe new life into assets, shape communities, and unlock real value in places",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://imgs.search.brave.com/hnOyNPT1PD6PXd6pVwX50k6upBr0dIojT97DPcBFNfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NzI5MzczOS9waG90/by9kZXNpZ25pbmct/dGhlLWZ1dHVyZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Qk51TFZxSnZKTWV0/Zk05T1ZqZ2hWV3dT/cm83RUxaMTR2MlhO/OTUzb2FGQT0"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "People Centric",
    description:
      "We build more than homes; we build the foundation for thriving families. It's not just about walls, it's about fostering communities where comfort and spirit flourish.",
    content: (
<div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://imgs.search.brave.com/G8CXCLYRXA3kpy59fK6EJ47_5liZwO3boagUMRHj5gk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVhbWJvbmRpbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA5L3Blb3Bs/ZS1jZW50cmljLXdv/cmtwbGFjZS0xLTEu/anBn"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Efficient",
    description:
      "Functionality isn't a burden, it's our artistic signature. We craft spaces with visual integrity, maximising every square foot without sacrificing aesthetics.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://imgs.search.brave.com/qjJJ6_r3gXFudaEzv0lvpB7AIEExzIzFTEBcI90qfVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/MjkzMjk5Ni9waG90/by9jb3N0LWFuZC1x/dWFsaXR5LWNvbnRy/b2wtYnVzaW5lc3Mt/c3RyYXRlZ3ktYW5k/LXByb2plY3QtbWFu/YWdlbWVudC1jb25j/ZXB0LWJ1c2luZXNz/bWFuLXdvcmtpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVRVVkRvNFE2dVVw/c0pDc3NQeFEwNWVn/WHRmRm9IVDBBRWQ3/OHlNV1RXODA9"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Transparent",
    description:
      "Honesty isn't a tagline, it's our way of life. From clear communication to open processes, we believe in building trust, brick by transparent brick. Client testimonials speak louder than words, budgets are demystified, and progress unfolds openly.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://imgs.search.brave.com/Eb4wAC6t5GX9aZdOQnN6RLBrBKbFOjc8g5tGj_GbZco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/aW1hZ2UudmFudGFn/ZWNpcmNsZS5jb20v/Y29udGVudC9pbWFn/ZXMvMjAyNC8wMS9J/bnRlcm5hbC1jb21t/dW5pY2F0aW9uLWJl/c3QtcHJhY3RpY2Vz/LnBuZw"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function CoreValues() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col justify-center items-center ">
                <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Core Values</h2>
            </div>
        <div className="p-10">
        <StickyScroll content={content} />
        </div>
    </section>
  );
}
