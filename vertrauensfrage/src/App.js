import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Captcha from "./components/Captcha";
import PlaceholderPage from "./components/PlaceholderPage";
import BlogPage from "./components/BlogPage";
import "./App.css";

function App() {
  const [captchaSolved, setCaptchaSolved] = useState(false);

  const handleCaptchaSuccess = () => {
    setCaptchaSolved(true);
  };

  return (
    <Router basename="/vertrauensfrage2024">
      <div className="App">
        {captchaSolved ? (
          <Routes>
            <Route path="/" element={<PlaceholderPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        ) : (
          <Captcha onSuccess={handleCaptchaSuccess} />
        )}
      </div>
    </Router>
  );
}

export default App;
