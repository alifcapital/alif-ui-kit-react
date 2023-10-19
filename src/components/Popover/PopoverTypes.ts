import { PopoverContentProps, PopoverProps } from '@radix-ui/react-popover';

export interface IPopoverProps
  extends PopoverContentProps,
    Pick<PopoverProps, 'open' | 'onOpenChange'> {
  open: boolean;
  triggerElement: JSX.Element;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  noStyle?: boolean;
  popoverClassName?: string;
  contentClassName?: string;
}
