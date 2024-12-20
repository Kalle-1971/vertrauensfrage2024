import React from "react";
import { useParams } from "react-router-dom";
import "./BlogPage.css";

const blogContent = {
  1: "<i>Warum ist die Ampel zerbrochen?</i>/nDie Ampelkoalition ist im November 2024 zerbrochen, was bedeutet, dass die Parteien, die zusammen die Regierung gebildet haben, sich getrennt haben. Die Koalition bestand aus drei Parteien: der SPD (Sozialdemokratische Partei Deutschlands), den Grünen und der FDP (Freie Demokratische Partei). Der Hauptstreitpunkt, warum die Koalition auseinanderbrach, war, wie man mit den **Staatsausgaben** und der **Wirtschaft** umgehen sollte. Der Finanzminister von der FDP, **Christian Lindner**, wollte nicht, dass der Staat zu viel Geld ausgibt, da er die **Schuldenbremse** einhalten wollte, die verhindert, dass der Staat zu viele Schulden macht. Die SPD und die Grünen dagegen wollten mehr Geld für Projekte ausgeben, zum Beispiel für den **Klimaschutz** oder soziale Projekte. Dieser Streit führte dazu, dass die FDP ihre Minister aus der Regierung zurückzog und sich von der Koalition trennte. Der Bundeskanzler, **Olaf Scholz** von der SPD, hatte keine Unterstützung mehr von der FDP und musste sich nun überlegen, wie es weitergeht. Der Bruch der Koalition führte zu einer politischen Krise, und viele Menschen sind gespannt, wie es weitergeht und ob es bald **Neuwahlen** gibt, bei denen die Bürger entscheiden können, welche Parteien in der Regierung sein sollen.",
  2: "Inhalt des Blogs 2: Auswirkungen auf die Wirtschaft.",
  3: "Inhalt des Blogs 3: Gesellschaftliche Veränderungen und Trends.",
  4: "Inhalt des Blogs 4: Prognosen und mögliche Szenarien.",
};

function BlogPage() {
  const { id } = useParams();
  const content = blogContent[id] || "Dieser Blogeintrag existiert nicht.";

  return (
    <div className="blog-page">
      <h1>Die Aktuelle politische Situation 2024/25</h1>
      <p>{content}</p>
    </div>
  );
}

export default BlogPage;
