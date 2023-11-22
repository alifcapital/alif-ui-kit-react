export interface IModalProps {
    open: boolean;
    onOpenChange: () => void;
    children: React.ReactNode;
    contentClassName?: string;
    disableBackdropClick?: boolean;
    disableEscapeKey?: boolean;
}
