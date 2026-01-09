import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  highlighted = false,
}: ServiceCardProps) => {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        highlighted
          ? "border-primary shadow-md"
          : "border-border hover:border-primary/50"
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      )}
      <CardHeader>
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
            highlighted
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
