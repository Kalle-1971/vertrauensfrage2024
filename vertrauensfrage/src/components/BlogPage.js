import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./BlogPage.css";

const blogContent = {
  1: "<p style='font-size: larger; font-style: italic;' >Warum ist die Ampel zerbrochen?</p><p>Die Ampelkoalition ist im November 2024 zerbrochen, was bedeutet, dass die Parteien, die zusammen die Regierung gebildet haben, sich getrennt haben. Die Koalition bestand aus drei Parteien: der SPD (Sozialdemokratische Partei Deutschlands), den Grünen und der FDP (Freie Demokratische Partei). Der Hauptstreitpunkt, warum die Koalition auseinanderbrach, war, wie man mit den <b>Staatsausgaben</b> und der <b>Wirtschaft</b> umgehen sollte. Der Finanzminister von der FDP, <i>Christian Lindner</i>, wollte nicht, dass der Staat zu viel Geld ausgibt, da er die <b>Schuldenbremse</b> einhalten wollte, die verhindert, dass der Staat zu viele Schulden macht. Die SPD und die Grünen dagegen wollten mehr Geld für Projekte ausgeben, zum Beispiel für den <b>Klimaschutz</b> oder soziale Projekte. Dieser Streit führte dazu, dass die FDP ihre Minister aus der Regierung zurückzog und sich von der Koalition trennte. Der Bundeskanzler, <i>Olaf Scholz</i> von der SPD, hatte keine Unterstützung mehr von der FDP und musste sich nun überlegen, wie es weitergeht. Der Bruch der Koalition führte zu einer politischen Krise, und viele Menschen sind gespannt, wie es weitergeht und welche Parteien von den Neuwahlen profitieren. Für mehr klicke:</p>",
  2: "<p style='font-size: larger; font-style: italic;' >Wie geht es weiter? (Zeitplan)</p>"+
     "<p>Am Montag, dem 16. Dezember 2024, hat der Bundestag entschieden, Bundeskanzler Olaf Scholz das Vertrauen zu entziehen. Scholz hatte am 11. Dezember eine sogenannte Vertrauensfrage gestellt. Dabei fragt ein Kanzler das Parlament, ob es ihm weiterhin die Unterstützung gibt. Nur 207 von 717 Abgeordneten stimmten für Scholz, obwohl er mindestens 367 Stimmen gebraucht hätte. Damit steht fest: Der Bundestag traut ihm nicht mehr zu, die Regierung anzuführen. Jetzt ist es die Aufgabe von Bundespräsident Frank-Walter Steinmeier, zu entscheiden, ob er den Bundestag auflöst und den Weg für Neuwahlen freimacht. Dafür hat er laut Verfassung bis Anfang Januar Zeit. Bevor er sich entscheidet, möchte Steinmeier mit den verschiedenen Parteien sprechen, um herauszufinden, ob vielleicht eine neue Regierung gebildet werden kann, ohne dass es zu Neuwahlen kommt. Sollte das nicht klappen, wird der Bundestag aufgelöst, und spätestens 60 Tage danach muss neu gewählt werden. Der geplante Wahltermin ist der 23. Februar 2025.</p>"+
     "<p> Während diese politischen Entscheidungen getroffen werden, geht die Arbeit weiter. Am 20. Dezember kommt der Bundesrat zusammen. Das ist eine Versammlung, in der die Bundesländer mitentscheiden können, welche Gesetze in Deutschland gelten sollen. Dort könnten wichtige Themen beschlossen werden, zum Beispiel die Verlängerung des Deutschlandtickets, mit dem man günstig Bus und Bahn fahren kann, oder ein neues Gesetz zum Schutz des Bundesverfassungsgerichts. Auch Steuerentlastungen und eine Erhöhung des Kindergeldes, die von den Parteien der alten Ampel-Regierung vorgeschlagen wurden, könnten noch beschlossen werden, wenn der Bundestag vorher zustimmt. Sollte es bis Februar keine weiteren Gesetze mehr geben, könnte die nächste Sitzung des Bundesrates, die für den 14. Februar 2025 geplant ist, ausfallen. Die Parteien bereiten sich inzwischen auf die Neuwahlen vor. Jede Partei will zeigen, warum sie die beste Wahl für die Zukunft Deutschlands ist, und wählt dafür auch ihre Spitzenkandidaten. Am 11. Januar hält die SPD einen Parteitag ab, bei dem Olaf Scholz offiziell als Kanzlerkandidat nominiert und das Wahlprogramm beschlossen werden sollen. Gleichzeitig, am 11. und 12. Januar, wird die AfD ihren Parteitag in Riesa veranstalten. Dort will die Partei Alice Weidel als Kanzlerkandidatin aufstellen und ihr Wahlprogramm verabschieden. Am 12. Januar plant auch das Bündnis Sahra Wagenknecht (BSW) einen Parteitag in Bonn, um sein Programm für die Wahl zu beschließen. Eine Woche später, am 18. Januar, trifft sich die Linke, um über ihr Wahlprogramm abzustimmen. Die Grünen wollen dies am 26. Januar auf ihrem Parteitag tun. Ihr Kanzlerkandidat, Robert Habeck, wurde bereits im November mit einer deutlichen Mehrheit gewählt.</p>"+
     "<p> Auch die CDU und die CSU, zwei Parteien, die oft zusammenarbeiten, bereiten sich vor. Am 3. Februar hält die CDU ihren Parteitag ab, die CSU folgt am 8. Februar. Beide Parteien wollen ein gemeinsames Programm vorstellen, das die wichtigsten Ziele für die ersten 100 Tage nach der Wahl enthält. Am 9. Februar wird es ein spannendes TV-Duell zwischen Olaf Scholz und Friedrich Merz von der CDU geben. Solche Duelle sind wichtige Diskussionen im Fernsehen, bei denen die Kandidaten ihre Pläne vorstellen und sich gegenseitig Fragen stellen. Am gleichen Tag hält die FDP ihren Parteitag ab, bei dem Christian Lindner als Spitzenkandidat gewählt werden soll.</p><p> Am 11. Februar findet eine große Generaldebatte im Bundestag statt. Diese Debatte ist traditionell vor Wahlen eine wichtige Gelegenheit für die Kanzlerkandidaten, ihre Positionen zu erklären und mit den anderen zu diskutieren. Wenige Tage später, am 16. Februar, gibt es ein weiteres TV-Duell. Dieses Mal könnten auch Robert Habeck von den Grünen und Alice Weidel von der AfD teilnehmen. Der Sender RTL plant zudem, eine größere Diskussionsrunde mit mehreren Kandidaten zu organisieren.</p><p>In der Woche vor der Wahl, vom 17. bis 21. Februar, hat der Bundestag seine letzte Sitzungswoche. In dieser Zeit könnten noch wichtige Entscheidungen getroffen werden, bevor am Sonntag, dem 23. Februar 2025, die vorgezogene Bundestagswahl stattfindet. Danach beginnt die Suche nach einer neuen Regierung. Wenn keine Partei alleine regieren kann, müssen mehrere Parteien miteinander verhandeln, um eine Koalition, also ein Bündnis aus mehreren Parteien zu bilden. In diesen Gesprächen wird besprochen, wie sie gemeinsam regieren wollen. Spätestens am 25. März muss der neu gewählte Bundestag zu seiner ersten Sitzung zusammenkommen. Bei dieser Sitzung werden wichtige Ämter wie der Bundestagspräsident gewählt, und die Abgeordneten legen ihre Regeln für die Arbeit im Parlament fest.</p><p>Nach der ersten Sitzung wird auch der neue Bundeskanzler oder die neue Bundeskanzlerin vom Bundestag gewählt. Diese Person stellt dann ihr Team aus Ministern vor, die für die verschiedenen Bereiche wie Gesundheit, Bildung oder Umwelt zuständig sind. Die Vereidigung der neuen Regierung könnte frühestens im April 2025 stattfinden. Bis dahin bleibt die bisherige Regierung geschäftsführend im Amt, damit Deutschland handlungsfähig bleibt.</p>"+
     "<p>Welche Parteien bei einer Neuwahl ganz vorne dabei sind, könnt ihr hier herausfinden:</p>",
  3: "",
  4: "",
};

function BlogPage() {
    const navigate = useNavigate();
  
    const handleNavigation = (id) => {
      navigate(`/blog/${id}`);
    };
  
  const { id } = useParams();
  const content = blogContent[id] || "Dieser Blogeintrag existiert nicht.";
  const blog1 = id === "1" ? `${process.env.PUBLIC_URL}/images/OlafAlleine.png` : null;

  return (
    <div className="blog-page">
      <h1>Die Aktuelle politische Situation 2024/25</h1>
      {blog1 && <img src={blog1} alt="Olaf ganz Alleine" className="special-image" />}
      {blog1 && <p className="image-url">Bild: https://www.sueddeutsche.de/politik/ampel-regierung-bruch-lindner-scholz-wissing-lux.HKNiP1bMH3mHy6yKgedzzg?reduced=true</p>}
      {blog1 && <br/>}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {blog1 && <button onClick={() => handleNavigation(2)} className='text-to-left' >Wie geht es jetzt weiter?</button>}
      {blog1 && <br></br>}
      {blog1 && <br/>}
      {blog1 && <a className='text-to-left' href='https://www.tagesschau.de/inland/ampel-aus-100.html'>Tagesschau - Aus der Ampel</a>}
      {blog1 && <br/>}
      {blog1 && <a className='text-to-left' href='https://www.dw.com/de/deutschland-regierung-ampelkoalition-olaf-scholz-christian-lindner-fdp-spd-gr%C3%BCne/a-70717075'>Die Deutsche Welle - Warum ist die Ampel zerbrochen?</a>}
    </div>
  );
}

export default BlogPage;
