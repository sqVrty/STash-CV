import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface GalleryState {
  isOpen: boolean;
  images: string[];
  activeIndex: number;
}

interface GalleryContextValue extends GalleryState {
  openGallery: (images: string[], activeIndex: number) => void;
  closeGallery: () => void;
  setActiveIndex: (activeIndex: number) => void;
  resetActiveIndex: () => void;
}

const INITIAL_STATE: GalleryState = {
  isOpen: false,
  images: [],
  activeIndex: 0,
};

const GalleryContext = createContext<GalleryContextValue | null>(null);

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GalleryState>(INITIAL_STATE);

  const openGallery = useCallback(
    (images: string[], activeIndex: number) =>
      setState({ isOpen: true, images, activeIndex }),
    []
  );
  // The active index is intentionally kept after closing so the source
  // carousel can sync to the last image the user viewed.
  const closeGallery = useCallback(
    () => setState((prev) => ({ ...prev, isOpen: false })),
    []
  );
  const setActiveIndex = useCallback(
    (activeIndex: number) => setState((prev) => ({ ...prev, activeIndex })),
    []
  );
  const resetActiveIndex = useCallback(
    () => setState((prev) => ({ ...prev, activeIndex: 0 })),
    []
  );

  const value = useMemo<GalleryContextValue>(
    () => ({
      ...state,
      openGallery,
      closeGallery,
      setActiveIndex,
      resetActiveIndex,
    }),
    [state, openGallery, closeGallery, setActiveIndex, resetActiveIndex]
  );

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
}

export function useGallery(): GalleryContextValue {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}
