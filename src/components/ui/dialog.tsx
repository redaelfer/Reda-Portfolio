import * as Primitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { useLanguage } from "../../lib/language";

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  wide = false,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  children: ReactNode;
  wide?: boolean;
}) {
  const { t } = useLanguage();
  const opener = useRef<HTMLElement | null>(null);
  return (
    <Primitive.Root open={open} onOpenChange={onOpenChange}>
      <Primitive.Portal>
        <Primitive.Overlay className="dialog-overlay" />
        <Primitive.Content
          className={`dialog-content ${wide ? "dialog-wide" : ""}`}
          onOpenAutoFocus={() => {
            opener.current = document.activeElement as HTMLElement;
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus();
          }}
        >
          <Primitive.Close
            className="dialog-close"
            aria-label={t("Close dialog", "Fermer la fenêtre")}
          >
            <X size={20} />
          </Primitive.Close>
          <Primitive.Title className="dialog-title">{title}</Primitive.Title>
          <Primitive.Description className="dialog-description">
            {description}
          </Primitive.Description>
          {children}
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  );
}
