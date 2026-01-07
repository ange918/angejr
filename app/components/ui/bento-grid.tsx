import { cn } from "@/app/utils/cn";

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
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-navy/80 dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4 cursor-pointer",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex justify-between items-end">
        <div>
          {icon}
          <div className="font-sans font-bold text-white mb-2 mt-2">
            {title}
          </div>
        </div>
        <div className="opacity-100 lg:opacity-0 group-hover/bento:opacity-100 transition duration-200">
          <div className="px-3 py-1.5 rounded-full bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-wider">
            Visiter
          </div>
        </div>
      </div>
    </div>
  );
};
