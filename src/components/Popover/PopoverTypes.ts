import { PopoverContentProps, PopoverProps } from '@radix-ui/react-popover';

export interface IPopoverProps
  extends PopoverContentProps,
    Pick<PopoverProps, 'open' | 'onOpenChange'> {
  ariaLabel: string;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerElement: JSX.Element;
  children: React.ReactNode;
  noStyle?: boolean;
  popoverClassName?: string;
  contentClassName?: string;
}
