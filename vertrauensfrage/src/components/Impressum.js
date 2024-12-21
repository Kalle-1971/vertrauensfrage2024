import React from "react";
import "./Impressum.css";

const Impressum = () => {
  return (
    <div className="impressum">
      <h1>Impressum</h1>
      <p><strong>Dr.-Carl-Hermann-Gymnasium</strong></p>
      <p>Berliner Straße 8b<br />39218 Schönebeck (Elbe)</p>
      <p><strong>Erstellt für den Sozialkunde Unterricht:</strong><br></br>Kurslehrerin: K.Prinzke<br></br>Gruppe: Tim Kallausch, Dean Gericke, Luca Oeding</p>
      <p><strong>Vertreten durch:</strong><br />Schulleiter Dr. Ulrich Plaga</p>

      <p><strong>Kontakt:</strong><br />
        Telefon: +49 3471 684 611 010<br />
        Fax: +49 3471 684 563 110<br />
        E-Mail: <a href="mailto:kontakt@gym-hermann.bildung-lsa.de">kontakt@gym-hermann.bildung-lsa.de</a>
      </p>

      <p><strong>Schulträger:</strong><br />
        Salzlandkreis<br />
        Amt für Schulverwaltung und kulturelle Bildung<br />
        Breite Straße 22<br />
        06449 Aschersleben
      </p>

      <p><strong>Zuständige Aufsichtsbehörde:</strong><br />
        Landesschulamt Sachsen-Anhalt<br />
        Dienststelle Magdeburg<br />
        Ernst-Reuter-Allee 10<br />
        39104 Magdeburg
      </p>

      <p><strong>Haftung für Inhalte:</strong><br />
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
    </div>
  );
};

export default Impressum;
