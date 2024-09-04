import React from 'react';

function NewsArticles() {
  return (
    <section className="news-articles">
      <h2>Actualités et Articles</h2>
      <div className="articles-grid">
        <div className="article-card">
          <h3>5 Conseils pour Apprendre une Nouvelle Langue</h3>
          <p>Découvrez les meilleures pratiques pour devenir bilingue.</p>
        </div>
        <div className="article-card">
          <h3>Les Avantages d'apprendre une Langue</h3>
          <p>Comment l'apprentissage d'une langue peut enrichir votre vie.</p>
        </div>
      </div>
    </section>
  );
}

export default NewsArticles;
