import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({
  number,
  icon: Icon,
  title,
  description,
  isLast = false,
}: ProcessStepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border hidden lg:block" />
      )}
      
      {/* Icon container */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-200">
        <Icon className="h-7 w-7" />
      </div>
      
      {/* Number badge */}
      <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold z-20">
        {number}
      </div>
      
      {/* Content */}
      <h4 className="mt-4 font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;
