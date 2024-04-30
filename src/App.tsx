import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setDeviceType } from "./redux/features/deviceInfoSlice";

import PCHeader from "./components/header/PCHeader/PCHeader";
import Home from "./pages/Home/Home";

export default function App() {
  const dispatch = useAppDispatch();
  const isMobileDevice = useAppSelector(
    (state) => state.deviceInfo.isMobileDevice
  );

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    dispatch(setDeviceType(isMobile));
  }, [dispatch]);

  return (
    <Router>
      <div className="root">
        <PCHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Footer */}
      </div>
    </Router>
  );
}
