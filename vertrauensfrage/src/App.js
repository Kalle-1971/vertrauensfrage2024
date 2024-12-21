import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Captcha from "./components/Captcha";
import PlaceholderPage from "./components/PlaceholderPage";
import BlogPage from "./components/BlogPage";
import Impressum from "./components/Impressum";
import { ClimbingBoxLoader } from "react-spinners"; // ClimbingBoxLoader importieren
import "./App.css";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrollt nach oben bei jedem Routenwechsel
  }, [location]);

  return null;
};

function App() {
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [loading, setLoading] = useState(true); // Zustand für Ladebildschirm
  const [isContentLoaded, setIsContentLoaded] = useState(false); // Zustand, der prüft, ob die Inhalte geladen sind

  const handleCaptchaSuccess = () => {
    setCaptchaSolved(true);
  };

  useEffect(() => {
    // Verzögere den Wechsel von `loading` auf `false`, um eine minimale Ladezeit von 3 Sekunden zu garantieren
    const minLoadTime = setTimeout(() => {
      setLoading(false); // Ladebildschirm wird entfernt nach minimaler Zeit
    }, 3000); // Wartezeit: 3 Sekunden

    // Simuliere das Laden von Inhalten (z. B. Bilder)
    const images = document.querySelectorAll("img");
    const imagePromises = Array.from(images).map((img) => {
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Handle Fehler
      });
    });

    // Warte, bis alle Bilder geladen sind
    Promise.all(imagePromises).then(() => {
      setIsContentLoaded(true); // Alle Bilder sind geladen
    });

    return () => clearTimeout(minLoadTime); // Timer aufräumen
  }, []); // Der Effekt wird nur einmal beim Initialisieren ausgeführt

  useEffect(() => {
    // Sobald Bilder geladen und 3 Sekunden abgelaufen sind, setze `loading` auf false
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
                <ClimbingBoxLoader color="#ff5733" size={15} />
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
