export interface IModalProps {
  open: boolean;
  // onOpenChange: (open: boolean) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
