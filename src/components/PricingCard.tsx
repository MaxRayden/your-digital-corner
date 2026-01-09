import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  highlighted = false,
  badge,
}: PricingCardProps) => {
  return (
    <Card
      className={`relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg ${
        highlighted
          ? "border-primary shadow-md scale-[1.02]"
          : "border-border hover:border-primary/50"
      }`}
    >
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {badge}
          </span>
        </div>
      )}
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold text-foreground">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <WhatsAppButton
            message={`Olá! Tenho interesse no ${title}. Gostaria de mais informações.`}
            className="w-full"
          >
            Solicitar orçamento
          </WhatsAppButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
