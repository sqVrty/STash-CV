import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <div className="root">
        {/* Header */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Footer */}
      </div>
    </Router>
  );
}
