import React, { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners"; // Importieren des Loaders
import "./Captcha.css";

function Captcha({ onSuccess }) {
  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Zustand für den Ladebildschirm

  const gridItems = [
    { id: 1, isCorrect: true },
    { id: 2, isCorrect: true },
    { id: 3, isCorrect: true },
    { id: 4, isCorrect: true },
    { id: 5, isCorrect: true },
    { id: 6, isCorrect: true },
    { id: 7, isCorrect: true },
    { id: 8, isCorrect: true },
    { id: 9, isCorrect: true },
  ];

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSubmit = () => {
    const correctSelections = gridItems
      .filter((item) => item.isCorrect)
      .map((item) => item.id);

    if (
      correctSelections.length === selected.length &&
      correctSelections.every((id) => selected.includes(id))
    ) {
      alert("Richtig! (: Er ist einfach überall! :D");
      // Simuliere eine Ladezeit nach dem Alert
      setIsLoading(true); // Setze den Ladezustand auf true
      setTimeout(() => {
        setIsLoading(false); // Nach 3 Sekunden Ladebildschirm ausblenden
        onSuccess(); // Bestätige den Erfolg
      }, 3000); // Ladezeit von 3 Sekunden simulieren
    } else {
      alert("Also ich sehe den Markus öfter! ):");
      setSelected([]); // Leere die Auswahl zurück
    }
  };

  return (
    <div className="captcha">
      <h2>Wähle alle Felder mit Markus Söder aus</h2>
      <div className="grid">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`grid-item ${selected.includes(item.id) ? "selected" : ""}`}
            onClick={() => handleSelect(item.id)}
          >
            <img src={`${process.env.PUBLIC_URL}/images/item${item.id}.jpg`} alt={`Item ${item.id}`} />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Bestätigen</button>

      {/* Ladeanimation anzeigen, wenn isLoading true ist */}
      {isLoading && (
        <div className="loading-screen">
          <ClimbingBoxLoader color="#36d7b7" size={15} />
          <p>Die Seite wird geladen...</p>
        </div>
      )}
    </div>
  );
}

export default Captcha;
