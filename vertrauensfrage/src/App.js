import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Captcha from "./components/Captcha";
import PlaceholderPage from "./components/PlaceholderPage";
import BlogPage from "./components/BlogPage";
import Impressum from "./components/Impressum";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrollt die Seite bei jedem Route-Wechsel nach oben
  }, [pathname]);

  return null;
};

function App() {
  const [captchaSolved, setCaptchaSolved] = useState(false);

  const handleCaptchaSuccess = () => {
    setCaptchaSolved(true);
  };

  return (
    <Router basename="/vertrauensfrage2024">
      <div className="App">
        {captchaSolved ? (
          <>
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<PlaceholderPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/impressum/:id" element={<Impressum />} />
          </Routes>
          </>
        ) : (
          <Captcha onSuccess={handleCaptchaSuccess} />
        )}
      </div>
    </Router>
  );
}

export default App;
