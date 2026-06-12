import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const MOBILE_BREAKPOINT = 1000;
const MOBILE_USER_AGENT = /iPhone|iPad|iPod|Android/i;

interface Viewport {
  width: number;
  height: number;
  isMobile: boolean;
}

const ViewportContext = createContext<Viewport | null>(null);

export function ViewportProvider({ children }: { children: ReactNode }) {
  const [size, setSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = useMemo<Viewport>(
    () => ({
      ...size,
      isMobile:
        MOBILE_USER_AGENT.test(navigator.userAgent) ||
        size.width < MOBILE_BREAKPOINT,
    }),
    [size]
  );

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
}

export function useViewport(): Viewport {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }
  return context;
}
