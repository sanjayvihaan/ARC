import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-lg transition duration-200 p-4 flex flex-col space-y-4",
        "bg-white dark:bg-zinc-900", // Background: Light mode white, dark mode dark gray
        "border border-gray-200 dark:border-zinc-700", // Light mode border gray, dark mode darker border
        "shadow-sm dark:shadow-none", // Light mode subtle shadow, dark mode no shadow
        "hover:border-gray-300 dark:hover:border-slate-600", // Hover effects for light and dark mode
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-neutral-600 dark:text-neutral-400">{icon}</div>
        <div className="font-sans font-bold text-neutral-800 dark:text-zinc-100 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 dark:text-zinc-300 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
