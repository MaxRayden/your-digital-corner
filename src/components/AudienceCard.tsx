import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AudienceCard = ({ icon: Icon, title, description }: AudienceCardProps) => {
  return (
    <Card className="group overflow-hidden border-border transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-1">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudienceCard;
