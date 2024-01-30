import { PopoverContentProps, PopoverProps } from '@radix-ui/react-popover';
import { MouseEvent } from 'react';
export interface IPopoverProps extends PopoverContentProps, Pick<PopoverProps, 'open' | 'onOpenChange'> {
    isPortal?: boolean;
    ariaLabel: string;
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    onTriggerClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    triggerElement: JSX.Element;
    children: React.ReactNode;
    noStyle?: boolean;
    popoverClassName?: string;
    contentClassName?: string;
    triggerTabindex?: number;
    triggerAsChild?: boolean;
}
