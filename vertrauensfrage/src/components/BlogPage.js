import React from "react";
import { useParams } from "react-router-dom";
import "./BlogPage.css";

const blogContent = {
  1: "Inhalt des Blogs 1: Analyse der politischen Lage im Jahr 2024.",
  2: "Inhalt des Blogs 2: Auswirkungen auf die Wirtschaft.",
  3: "Inhalt des Blogs 3: Gesellschaftliche Veränderungen und Trends.",
  4: "Inhalt des Blogs 4: Prognosen und mögliche Szenarien.",
};

function BlogPage() {
  const { id } = useParams();
  const content = blogContent[id] || "Dieser Blogeintrag existiert nicht.";

  return (
    <div className="blog-page">
      <h1>Blog {id}</h1>
      <p>{content}</p>
    </div>
  );
}

export default BlogPage;
