import React from "react";
import { useParams } from "react-router-dom";
import "./BlogPage.css";

const blogContent = {
  1: "<i>Warum ist die Ampel zerbrochen?</i><p>Die Ampelkoalition ist im November 2024 zerbrochen, was bedeutet, dass die Parteien, die zusammen die Regierung gebildet haben, sich getrennt haben. Die Koalition bestand aus drei Parteien: der SPD (Sozialdemokratische Partei Deutschlands), den Grünen und der FDP (Freie Demokratische Partei). Der Hauptstreitpunkt, warum die Koalition auseinanderbrach, war, wie man mit den **Staatsausgaben** und der **Wirtschaft** umgehen sollte. Der Finanzminister von der FDP, **Christian Lindner**, wollte nicht, dass der Staat zu viel Geld ausgibt, da er die **Schuldenbremse** einhalten wollte, die verhindert, dass der Staat zu viele Schulden macht. Die SPD und die Grünen dagegen wollten mehr Geld für Projekte ausgeben, zum Beispiel für den **Klimaschutz** oder soziale Projekte. Dieser Streit führte dazu, dass die FDP ihre Minister aus der Regierung zurückzog und sich von der Koalition trennte. Der Bundeskanzler, **Olaf Scholz** von der SPD, hatte keine Unterstützung mehr von der FDP und musste sich nun überlegen, wie es weitergeht. Der Bruch der Koalition führte zu einer politischen Krise, und viele Menschen sind gespannt, wie es weitergeht und ob es bald **Neuwahlen** gibt, bei denen die Bürger entscheiden können, welche Parteien in der Regierung sein sollen.</p></br><a href='https://www.tagesschau.de/inland/ampel-aus-100.html'>Tagesschau - Aus der Ampel</a></br><a href='https://www.dw.com/de/deutschland-regierung-ampelkoalition-olaf-scholz-christian-lindner-fdp-spd-gr%C3%BCne/a-70717075'>Die Deutsche Welle - Warum ist die Ampel zerbrochen?</a>",
  2: "",
  3: "Inhalt des Blogs 3: Gesellschaftliche Veränderungen und Trends.",
  4: "Inhalt des Blogs 4: Prognosen und mögliche Szenarien.",
};

function BlogPage() {
  const { id } = useParams();
  const content = blogContent[id] || "Dieser Blogeintrag existiert nicht.";
  const imageUrl = id === "1" ? `${process.env.PUBLIC_URL}/images/OlafAlleine.png` : null;

  return (
    <div className="blog-page">
      <h1>Die Aktuelle politische Situation 2024/25</h1>
      {imageUrl && <img src={imageUrl} alt="Olaf ganz Alleine" className="special-image" />}
      {imageUrl && <p className="image-url">https://www.sueddeutsche.de/politik/ampel-regierung-bruch-lindner-scholz-wissing-lux.HKNiP1bMH3mHy6yKgedzzg?reduced=true</p>}
      {imageUrl && <br/>}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
// https://www.sueddeutsche.de/politik/ampel-regierung-bruch-lindner-scholz-wissing-lux.HKNiP1bMH3mHy6yKgedzzg?reduced=true
export default BlogPage;
