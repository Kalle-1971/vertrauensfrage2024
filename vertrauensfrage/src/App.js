// App.js
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

  // Preload Bilder
  useEffect(() => {
    const preloadImages = [
      `${process.env.PUBLIC_URL}/images/OlafScholz.png`,
      `${process.env.PUBLIC_URL}/images/left.png`,
      `${process.env.PUBLIC_URL}/images/right.png`,
      `${process.env.PUBLIC_URL}/images/steinmeierScholz.png`,
      `${process.env.PUBLIC_URL}/images/OlafAlleine.png`,
      `${process.env.PUBLIC_URL}/images/GrafikVertrauensfrageMisstrauensvotum.png`,
      `${process.env.PUBLIC_URL}/images/Blog3Bild1.png`,
      `${process.env.PUBLIC_URL}/images/Blog3Bild2.png`,
      `${process.env.PUBLIC_URL}/images/Blog3Bild3.png`,
      `${process.env.PUBLIC_URL}/images/BundestagAuflösung.jpg`,
      `${process.env.PUBLIC_URL}/images/item1.jpg`,
      `${process.env.PUBLIC_URL}/images/item2.jpg`,
      `${process.env.PUBLIC_URL}/images/item3.jpg`,
      `${process.env.PUBLIC_URL}/images/item4.jpg`,
      `${process.env.PUBLIC_URL}/images/item5.jpg`,
      `${process.env.PUBLIC_URL}/images/item6.jpg`,
      `${process.env.PUBLIC_URL}/images/item7.jpg`,
      `${process.env.PUBLIC_URL}/images/item8.jpg`,
      `${process.env.PUBLIC_URL}/images/item9.jpg`,
    ];

    // Preload-Funktion für jedes Bild
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

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
    <Router basename="/vertrauensfrage2024"> {/* Router nur hier */}
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
