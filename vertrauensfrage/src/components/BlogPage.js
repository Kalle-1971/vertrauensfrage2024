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
  3: "<p style='font-size: larger; font-style: italic;' >Prognosen zur Wahl 2025</p>"+
     "<p>Die Bundestagswahl 2025 steht vor der Tür, und schon jetzt gibt es spannende Umfragen, die zeigen, wie die Menschen in Deutschland wählen könnten. Wenn die Wahl schon am kommenden Sonntag stattfinden würde, läge die CDU/CSU deutlich vorne und könnte mit 31 Prozent der Stimmen rechnen. Dahinter folgen die AfD mit 19 Prozent, die SPD mit 15 Prozent und die Grünen mit 14 Prozent. Kleinere Parteien wie die FDP mit 3 Prozent und die Linke mit 4 Prozent hätten es schwer, in den Bundestag einzuziehen, weil sie die wichtige Fünf-Prozent-Hürde nicht erreichen. Das bedeutet, dass nicht jede Partei, die gewählt wird, auch tatsächlich im Parlament vertreten sein wird.</p>"+
     "<p>Da keine Partei alleine genug Stimmen hätte, um eine Regierung zu bilden, müssten mehrere Parteien zusammenarbeiten. Eine solche Zusammenarbeit nennt man Koalition. Es gibt verschiedene Koalitionen, die möglich wären, wie zum Beispiel die Große Koalition aus CDU/CSU und SPD. Auch ein Bündnis zwischen CDU/CSU und den Grünen, genannt Schwarz-Grün, wäre denkbar. Eine weitere Möglichkeit wäre die sogenannte Kenia-Koalition, bei der CDU/CSU, SPD und die Grünen zusammen regieren. Die alte Ampel-Koalition, bestehend aus SPD, Grünen und FDP, hätte laut den Umfragen allerdings keine Mehrheit mehr, was bedeutet, dass sie nicht weiter regieren könnte.</p>"+
     "<p>Neben den Parteien sind auch die Spitzenkandidatinnen und -kandidaten wichtig, denn einer von ihnen wird wahrscheinlich der oder die nächste Bundeskanzler*in. Momentan hat Friedrich Merz von der CDU/CSU die besten Chancen, Kanzler zu werden, da seine Partei vorne liegt und er in der Beliebtheit der Menschen stabil bleibt. Olaf Scholz von der SPD, der aktuelle Kanzler, hat hingegen an Beliebtheit verloren. Auch Robert Habeck von den Grünen, der in der Vergangenheit stark unterstützt wurde, wird aktuell schwächer bewertet. Die Menschen bewerten die Spitzenkandidaten auf einer Skala von +5 bis -5, wobei Friedrich Merz hier am besten abschneidet.</p>",
  4: "<p style='font-size: larger; font-style: italic;' >Gibt es Alternativen zur Vertrauensfrage?</p>"+
     "<p>In Deutschland kann der Bundestag nicht einfach selbst beschließen, sich aufzulösen und Neuwahlen anzusetzen. Es gibt jedoch bestimmte Wege, um eine vorzeitige Auflösung des Parlaments zu erreichen. Eine bekannte Methode ist die Vertrauensfrage: Der Bundeskanzler fragt das Parlament, ob es ihm weiterhin vertraut. Erhält er nicht die Mehrheit der Stimmen, kann der Bundespräsident den Bundestag auflösen, und es kommt zu Neuwahlen.</p>"+ 
     "<p>Eine Alternative zur Vertrauensfrage ist das konstruktive Misstrauensvotum. Dabei spricht das Parlament dem amtierenden Kanzler das Misstrauen aus, wählt aber gleichzeitig einen neuen Kanzler mit absoluter Mehrheit. Auf diese Weise wird die Regierung ohne Neuwahlen gewechselt.</p>"+
     "<p>In der Vergangenheit haben Kanzler die Vertrauensfrage manchmal taktisch eingesetzt, um Neuwahlen herbeizuführen, obwohl sie eigentlich noch genügend Unterstützung im Parlament hatten. Ein Beispiel dafür ist Bundeskanzler Gerhard Schröder im Jahr 2005. Er stellte die Vertrauensfrage, verlor sie absichtlich und ermöglichte so Neuwahlen.</p>"+
     "<p>Diese Vorgehensweise ist umstritten, weil sie das eigentliche Ziel der Vertrauensfrage - nämlich das tatsächliche Überprüfen des Vertrauens der Abgeordneten - zweckentfremdet. Kritiker sehen darin einen Missbrauch, da die Vertrauensfrage genutzt wird, um politische Ziele zu erreichen, anstatt die Stabilität der Regierung zu prüfen. Dies kann das Vertrauen der Bevölkerung in die politischen Prozesse beeinträchtigen und den Eindruck erwecken, dass Regeln manipuliert werden, um bestimmte Ergebnisse zu erzielen.<p>"+
     "<p>Insgesamt zeigt dieses Thema, wie wichtig transparente und faire Verfahren in der Politik sind, um das Vertrauen der Bürgerinnen und Bürger zu erhalten.</p>",
  5: "<p style='font-size: larger; font-style: italic;' >ARD Video - Scholz stellt Vertrauensfrage</p>",
  6: "<p style='font-size: larger; font-style: italic;' >Karikaturen</p>",
  7: "<p style='font-size: larger; font-style: italic;' >Memes</p>",
};

function BlogPage() {
    const navigate = useNavigate();
  
    const handleNavigation = (id) => {
      navigate(`/blog/${id}`);
    };

    const handleNavigationToMainMenu = () => {
      navigate(`/`);
    };
  
  const { id } = useParams();
  const content = blogContent[id] || "Dieser Blogeintrag existiert nicht.";
  const blog1 = id === "1" ? `${process.env.PUBLIC_URL}/images/OlafAlleine.png` : null;
  const blog2 = id === "2" ? `${process.env.PUBLIC_URL}/images/steinmeierScholz.png` : null;
  const blog3 = id === "3" ? `${process.env.PUBLIC_URL}/images/Blog3Bild1.png`: null;
  const blog3Image2 = id === "3" ? `${process.env.PUBLIC_URL}/images/Blog3Bild2.png`: null;
  const blog3Image3 = id === "3" ? `${process.env.PUBLIC_URL}/images/Blog3Bild3.png`: null;
  const blog4 = id === "4" ? `${process.env.PUBLIC_URL}/images/BundestagAuflösung.jpg`: null;
  const blog4Image2 = id === "4" ? `${process.env.PUBLIC_URL}/images/GrafikVertrauensfrageMisstrauensvotum.png`: null;
  const blog5 = id === "5";

  return (
    <div className="blog-page">
      <h1>Die Aktuelle politische Situation 2024/25</h1> {/* Seitenübergreifende Überschrift */}

      {/* Bild mit Quelle für Blog1 */}
      {blog1 && <img src={blog1} alt="Olaf ganz Alleine" className="special-image" />}
      {blog1 && <p className="image-url">Bild: https://www.sueddeutsche.de/politik/ampel-regierung-bruch-lindner-scholz-wissing-lux.HKNiP1bMH3mHy6yKgedzzg?reduced=true</p>}
      {blog1 && <br/>}

      {/* Bild mit Quelle für Blog2 */}
      {blog2 && <img src={blog2} alt="Steinmeier und Scholz" className="special-image" />}
      {blog2 && <p className="image-url">Bild: https://www.spiegel.de/politik/deutschland/vertrauensfrage-liveblog-kanzler-olaf-scholz-stellt-die-vertrauensfrage-im-bundestag-a-4e781807-75dd-45c9-ad5a-1fc108593dbb</p>}
      {blog2 && <br/>}
      
      {/* Bilder mit Quelle für Blog3 */}
      {blog3 && <img src={blog3} alt="Statistik1" className="special-image-blog3" />}
      {blog3Image2 && <img src={blog3Image2} alt="Statistik2" className="special-image-blog3" />}
      {blog3Image3 && <img src={blog3Image3} alt="Statistik3" className="special-image-blog3" />}
      {blog3 && <p className="image-url">Bilder: https://www.zdf.de/nachrichten/politik/deutschland/umfragen-bundestagswahl-2025-100.html</p>}
      {blog3 && <br/>}

      {/* Bilder mit Quelle für Blog4 */}
      {blog4 && <img src={blog4} alt="Bundestag Parlament" className="special-image" />}
      {blog4 && <p className="image-url">Bilder: https://www.bpb.de/themen/politisches-system/wahlen-in-deutschland/335638/vorzeitige-aufloesung-des-bundestages/</p>}
      {blog4 && <br/>}

      <div dangerouslySetInnerHTML={{ __html: content }} /> {/* Blogtext einfügen */}
      
      {/* Alle unteren Einträge für Blog1 (Warum ist die Ampel zerbrochen?)*/}
      {blog1 && <div className="text-to-left-container">
        {blog1 && <button onClick={() => handleNavigation(2)} >Wie geht es jetzt weiter?</button>}
        {blog1 && <button onClick={() => handleNavigationToMainMenu(1)} >Hauptmenü</button>}
      </div>}
      {blog1 && <br/>}
      {blog1 && <br/>}
      {blog1 && <a className='text-to-left' href='https://www.tagesschau.de/inland/ampel-aus-100.html'>Tagesschau - Aus der Ampel</a>}
      {blog1 && <br/>}
      {blog1 && <a className='text-to-left' href='https://www.dw.com/de/deutschland-regierung-ampelkoalition-olaf-scholz-christian-lindner-fdp-spd-gr%C3%BCne/a-70717075'>Die Deutsche Welle - Warum ist die Ampel zerbrochen?</a>}
      
      {/* Alle unteren Einträge für Blog2 (Wie geht es jetzt weiter?)*/}
      {blog2 && <div className="text-to-left-container">
        {blog2 && <button onClick={() => handleNavigation(3)} >Prognosen Wahl 2025</button>}
        {blog2 && <button onClick={() => handleNavigationToMainMenu(1)} >Hauptmenü</button>}
      </div>}
      {blog2 && <br/>}
      {blog2 && <br/>}
      {blog2 && <a className='text-to-left' href='https://www.bundestag.de/dokumente/textarchiv/2024/kw47-vertrauensfrage-1030198'>Bundestag.de - Vertrauensfrage</a>}
      {blog2 && <br/>}
      {blog2 && <a className='text-to-left' href='https://www.zeit.de/politik/deutschland/2024-11/bundestagswahl-2025-termine-ablauf-neuwahl-vorbereitung'>Zeit.de - Termine Ablauf Neuwahl Stand 20.12.2024</a>}
      
      {/* Alle unteren Einträge für Blog3 (Prognosen Wahl 2025)*/}  
      {blog3 && <div className="text-to-left-container">
        {blog3 && <button onClick={() => handleNavigation(4)} >Alternativen Vertrauensfrage</button>}
        {blog3 && <button onClick={() => handleNavigationToMainMenu(1)} >Hauptmenü</button>}
      </div>}
      {blog3 && <br/>}
      {blog3 && <br/>}
      {blog3 && <a className='text-to-left' href='https://www.zdf.de/nachrichten/politik/deutschland/umfragen-bundestagswahl-2025-100.html'>ZDF.de Umfragen Bundestagswahl 2025</a>}
      
      {/* Alle unteren Einträge für Blog3 (Prognosen Wahl 2025)*/}
      {blog4Image2 && <img src={blog4Image2} alt="Grafik" className="special-image" />}
      {blog4 && <div className="text-to-left-container">
        {blog4 && <button onClick={() => handleNavigation(5)} >Scholz stellt Vertrauensfrage - Video</button>}
        {blog4 && <button onClick={() => handleNavigationToMainMenu(1)} >Hauptmenü</button>}
      </div>}
      {blog4 && <br/>}
      {blog4 && <br/>}
      {blog4 && <a className='text-to-left' href='https://www.bpb.de/themen/politisches-system/wahlen-in-deutschland/335638/vorzeitige-aufloesung-des-bundestages/'>bpb.de Vorzeitige Auflösung Bundestag</a>}
      {blog4 && <br/>}
      {blog4 && <a className='text-to-left' href='https://www.bundestag.de/services/glossar/glossar/V/vertrauensfrage-245558'>bundestag.de - Glossar - Vertrauensfrage</a>}
      {blog5 && <iframe className="special-video" src="https://www.ardmediathek.de/embed/Y3JpZDovL2JyLmRlL2Jyb2FkY2FzdC9GMjAyM1dPMDEzMDUxQTAvc2VjdGlvbi9jZTY0MzAxYS0xNzA2LTQxYTEtOGFlNy04OWQwN2Q1OGVlYTI" width="640" height="360" allowfullscreen allow="clipboard-read; clipboard-write" frameBorder="0" scrolling="no" title="ARD Video - Scholz stellt Vertrauensfrage" tabIndex="-1" t></iframe>}
    </div>
  );
}

export default BlogPage;
