import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceholderPage.css";

function PlaceholderPage() {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/blog/${id}`);
  };
  const handleNavigationImpressum = (id) => {
    navigate(`/impressum/${id}`);
  };

  return (
    <div className="placeholder">
      <h1 className="page-title">Die Aktuelle politische Situation 2024/25</h1>
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/OlafScholz.png`}
          alt="Zentrale Person"
          className="center-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/left.png`}
          alt="Linkes Bild"
          className="side-image left"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/right.png`}
          alt="Rechtes Bild"
          className="side-image right"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleNavigation(1)}>Warum ist die Ampel zerbrochen?</button>
        <button onClick={() => handleNavigation(2)}>Wie geht es jetzt weiter?</button>
        <button onClick={() => handleNavigation(3)}>Prognosen Wahl 2025</button>
        <button onClick={() => handleNavigation(4)}>Alternativen zur Vertrauensfrage</button>
        <button onClick={() => handleNavigationImpressum(1)}>Impressum</button>
      </div>
    </div>
  );
}
// npm run deploy zum Neustart der Github Seite
// Karikaturen, Impressum? Memes?
export default PlaceholderPage;
