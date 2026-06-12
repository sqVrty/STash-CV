import type { ReactNode } from "react";

import { ViewportProvider } from "./ViewportProvider";
import { ModalProvider } from "./ModalProvider";
import { ProjectModalProvider } from "./ProjectModalProvider";
import { GalleryProvider } from "./GalleryProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ViewportProvider>
      <ModalProvider>
        <ProjectModalProvider>
          <GalleryProvider>{children}</GalleryProvider>
        </ProjectModalProvider>
      </ModalProvider>
    </ViewportProvider>
  );
}
