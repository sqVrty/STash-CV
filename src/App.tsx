import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setDeviceType } from "./redux/features/deviceInfoSlice";
import { setWindowSize } from "./redux/features/windowSizeInfoSlice";

import PCHeader from "./components/header/PCHeader/PCHeader";
import PhotoContainer from "./components/photoContainer/PhotoContainer";
import MobileHeader from "./components/header/MobileHeader/MobileHeader";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";

export default function App() {
  const dispatch = useAppDispatch();
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );
  const windowSize = useAppSelector((state) => state.windowSizeInfo.windowSize);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      windowSize.width < 1000;

    dispatch(setDeviceType(isMobile));
    dispatch(
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    );
  }, [dispatch, windowSize]);

  return (
    <Router>
      <div
        className="root"
        style={isMobileDevice ? { flexDirection: "column" } : {}}
      >
        {isMobileDevice ? (
          <MobileHeader />
        ) : (
          <>
            <PCHeader />
            <PhotoContainer />
          </>
        )}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        {/* Footer */}
      </div>
    </Router>
  );
}
