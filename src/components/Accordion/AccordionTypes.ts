export interface IAccordionProps {
  header: React.ReactNode;
  content: React.ReactNode;
  ariaLabel: string;
  isOpen?: boolean;
  onChange?: (state: boolean) => void;
  className?: string;
  contentMarginTop?: number;
}
