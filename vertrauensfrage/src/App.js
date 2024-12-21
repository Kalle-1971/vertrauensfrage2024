import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Captcha from "./components/Captcha";
import PlaceholderPage from "./components/PlaceholderPage";
import BlogPage from "./components/BlogPage";
import Impressum from "./components/Impressum";
import { ClimbingBoxLoader } from "react-spinners"; // ClimbingBoxLoader importieren
import "./App.css";

// ScrollToTop-Komponente: Scrollt immer nach oben, wenn die Route gewechselt wird
const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scrollt immer zum oberen Rand der Seite, wenn sich die Route ändert
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [loading, setLoading] = useState(true); // Zustand, um den Ladezustand zu überwachen
  const [isContentLoaded, setIsContentLoaded] = useState(false); // Zustand, um den Status zu überprüfen, ob die Inhalte vollständig geladen sind

  const handleCaptchaSuccess = () => {
    setCaptchaSolved(true);
  };

  useEffect(() => {
    const images = document.querySelectorAll("img");
    const imagePromises = Array.from(images).map((img) => {
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Handle Fehler
      });
    });

    // Warte, bis alle Bilder geladen sind
    Promise.all(imagePromises).then(() => {
      setIsContentLoaded(true); // Bilder fertig geladen
    });

    // Ladebildschirm bleibt mindestens 3 Sekunden sichtbar
    const minLoadTime = setTimeout(() => {
      if (!isContentLoaded) setLoading(false);
    }, 3000);

    // Aufräumen des Timers, falls die Komponente entfernt wird
    return () => clearTimeout(minLoadTime);
  }, [isContentLoaded]);

  useEffect(() => {
    // Sobald Bilder geladen und 3 Sekunden abgelaufen sind
    if (isContentLoaded && loading) {
      setLoading(false);
    }
  }, [isContentLoaded, loading]);

  return (
    <Router basename="/vertrauensfrage2024">
      <div className="App">
        {captchaSolved ? (
          <>
            <ScrollToTop />
            {loading ? (
              <div className="loading-screen">
                {/* ClimbingBoxLoader anzeigen */}
                <ClimbingBoxLoader color="#36d7b7" size={15} />
                <p>Inhalte werden geladen...</p>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<PlaceholderPage />} />
                <Route path="/blog/:id" element={<BlogPage />} />
                <Route path="/impressum/:id" element={<Impressum />} />
              </Routes>
            )}
          </>
        ) : (
          <Captcha onSuccess={handleCaptchaSuccess} />
        )}
      </div>
    </Router>
  );
}

export default App;
