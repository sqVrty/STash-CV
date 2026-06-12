import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Project } from "@/types/project";

interface ProjectModalContextValue {
  project: Project | null;
  openProject: (project: Project) => void;
  closeProject: () => void;
}

const ProjectModalContext = createContext<ProjectModalContextValue | null>(
  null
);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);

  const openProject = useCallback((next: Project) => setProject(next), []);
  const closeProject = useCallback(() => setProject(null), []);

  const value = useMemo<ProjectModalContextValue>(
    () => ({
      project,
      openProject,
      closeProject,
    }),
    [project, openProject, closeProject]
  );

  return (
    <ProjectModalContext.Provider value={value}>
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal(): ProjectModalContextValue {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error(
      "useProjectModal must be used within a ProjectModalProvider"
    );
  }
  return context;
}
