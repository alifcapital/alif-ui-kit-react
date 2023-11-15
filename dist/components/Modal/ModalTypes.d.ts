export interface IModalProps {
    open: boolean;
    onOpenChange: () => void;
    children: React.ReactNode;
    disableBackdropClick?: boolean;
    disableEscapeKey?: boolean;
}
