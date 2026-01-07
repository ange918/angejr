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
  ctaLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  ctaLink?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-xl group/bento hover:shadow-2xl transition duration-500 shadow-input dark:shadow-none p-0 dark:bg-navy/80 dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-0 cursor-pointer overflow-hidden relative min-h-[400px] md:min-h-[450px]",
        className
      )}
    >
      <div className="relative w-full h-full flex flex-col group/image">
        {header}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover/bento:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <div className="flex justify-between items-end w-full translate-y-2 group-hover/bento:translate-y-0 transition-transform duration-500">
            <div className="flex flex-col flex-1">
              {icon && <div className="mb-4 transform group-hover/bento:scale-110 transition-transform duration-500">{icon}</div>}
              <div className="font-sans font-bold text-white text-2xl md:text-3xl mb-2 drop-shadow-2xl tracking-tight">
                {title}
              </div>
              <div className="font-sans font-medium text-cyan-400/90 text-sm md:text-base mb-2 uppercase tracking-[0.2em]">
                {description}
              </div>
            </div>
            <div className="flex flex-col gap-2 opacity-100 lg:opacity-0 group-hover/bento:opacity-100 transition-all duration-500 transform translate-y-4 group-hover/bento:translate-y-0">
              {ctaLink && ctaLink !== "#" && (
                <a 
                  href={ctaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 text-center"
                >
                  Visiter
                </a>
              )}
              <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-all duration-300 text-center">
                Détails
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
