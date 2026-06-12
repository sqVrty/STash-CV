import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface ModalContent {
  header: string;
  content: ReactNode;
}

interface ModalContextValue {
  isOpen: boolean;
  header: string;
  content: ReactNode;
  openModal: (header: string, content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalContent | null>(null);

  const value = useMemo<ModalContextValue>(
    () => ({
      isOpen: modal !== null,
      header: modal?.header ?? "",
      content: modal?.content ?? null,
      openModal: (header, content) => setModal({ header, content }),
      closeModal: () => setModal(null),
    }),
    [modal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useModal(): ModalContextValue {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
