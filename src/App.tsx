import { HashRouter, Route, Routes } from "react-router-dom";

import { useViewport } from "@/providers/ViewportProvider";

import PCHeader from "@/components/header/PCHeader/PCHeader";
import MobileHeader from "@/components/header/MobileHeader/MobileHeader";
import PhotoContainer from "@/components/photoContainer/PhotoContainer";
import Modal from "@/components/modal/Modal";
import ImagesFullScreenPreviewModal from "@/components/imagesFullScreenPreviewModal/ImagesFullScreenPreviewModal";

import About from "@/features/about/About/About";
import Resume from "@/features/resume/Resume/Resume";
import Projects from "@/features/projects/Projects/Projects";
import WorkExampleModal from "@/features/projects/WorkExampleModal/WorkExampleModal";

export default function App() {
  const { isMobile } = useViewport();

  return (
    <HashRouter>
      <div
        className="root"
        style={isMobile ? { flexDirection: "column" } : undefined}
      >
        <Modal />
        <WorkExampleModal />
        <ImagesFullScreenPreviewModal />

        {isMobile ? (
          <MobileHeader />
        ) : (
          <div className="PCHeaderAndPhotoContainer">
            <PCHeader />
            <PhotoContainer />
          </div>
        )}

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
