import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  description: string;
}
