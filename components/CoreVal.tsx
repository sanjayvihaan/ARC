//import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function CoreVal() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Core values</h2>
    <BentoGrid className="max-w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Committed",
    description: "At Arc Constructions, we walk the talk. We don't just build; we invest. By developing properties ourselves, we pour our heart and soul into delivering on time and within budget. It's a personal commitment, etched in every brick and beam.", 
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Inspired",
    description:       "We don't see empty lots, we see possibilities. We're not just builders, we're architects of transformation. We breathe new life into assets, shape communities, and unlock real value in places",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "People Centric",
    description: "We build more than homes; we build the foundation for thriving families. It's not just about walls, it's about fostering communities where comfort and spirit flourish.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Efficient",
    description:
      "Functionality isn't a burden, it's our artistic signature. We craft spaces with visual integrity, maximising every square foot without sacrificing aesthetics.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Transparent",
    description: "Honesty isn't a tagline, it's our way of life. From clear communication to open processes, we believe in building trust, brick by transparent brick. Client testimonials speak louder than words, budgets are demystified, and progress unfolds openly.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
