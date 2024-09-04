import React from 'react';

function Features() {
  return (
    <section className="features">
      <h2>Pourquoi choisir LinguaWorld ?</h2>
      <div className="features-grid">
        <div className="feature">
          <i className="fas fa-graduation-cap"></i>
          <h3>Apprentissage personnalisé</h3>
          <p>Des leçons adaptées à votre niveau et à vos objectifs.</p>
        </div>
        <div className="feature">
          <i className="fas fa-comments"></i>
          <h3>Pratique interactive</h3>
          <p>Conversez avec des locuteurs natifs et d'autres apprenants.</p>
        </div>
        <div className="feature">
          <i className="fas fa-mobile-alt"></i>
          <h3>Apprenez partout</h3>
          <p>Accédez à vos cours sur tous vos appareils.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
