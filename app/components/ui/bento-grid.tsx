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
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-0 dark:bg-navy/80 dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-0 cursor-pointer overflow-hidden relative min-h-[300px] md:min-h-0",
        className
      )}
    >
      <div className="relative w-full h-full flex flex-col">
        {header}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 group-hover/bento:translate-x-0 transition duration-200">
          <div className="flex justify-between items-end w-full">
            <div className="flex flex-col">
              {icon && <div className="mb-2">{icon}</div>}
              <div className="font-sans font-bold text-white text-xl md:text-2xl mb-1 drop-shadow-lg">
                {title}
              </div>
              <div className="font-sans font-normal text-gray-200 text-xs md:text-sm drop-shadow-md">
                {description}
              </div>
            </div>
            <div className="opacity-100 lg:opacity-0 group-hover/bento:opacity-100 transition duration-200 transform translate-y-0 group-hover/bento:-translate-y-1">
              <div className="px-4 py-2 rounded-full bg-cyan-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                Visiter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
