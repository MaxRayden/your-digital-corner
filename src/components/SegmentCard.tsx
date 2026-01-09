import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SegmentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}

const SegmentCard = ({
  icon: Icon,
  title,
  description,
  examples,
}: SegmentCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border hover:border-primary/50">
      <CardHeader>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-7 w-7" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {example}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SegmentCard;
