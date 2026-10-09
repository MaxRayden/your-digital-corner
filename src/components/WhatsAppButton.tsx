import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  floating?: boolean;
}

const WhatsAppButton = ({
  message = config.whatsapp.defaultMessage,
  phone = config.whatsapp.phone,
  className = "",
  variant = "default",
  size = "default",
  children,
  floating = false,
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-110 transition-transform duration-200 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] ${className}`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  // Aplica cores do WhatsApp apenas quando variant é "default"
  const buttonClassName = variant === "default" 
    ? `bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground ${className}`
    : className;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={buttonClassName}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center break-words min-w-0">
        <MessageCircle className="h-4 w-4 mr-2 shrink-0" />
        <span className="break-words min-w-0">{children || "Falar no WhatsApp"}</span>
      </a>
    </Button>
  );
};

export default WhatsAppButton;
