import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Avis des Utilisateurs</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"LinguaWorld m'a aidé à maîtriser l'espagnol en quelques mois. Les leçons sont incroyablement efficaces !"</p>
          <span>- Marie, 28 ans</span>
        </div>
        <div className="testimonial-card">
          <p>"Grâce à LinguaWorld, je peux maintenant discuter en japonais avec mes collègues."</p>
          <span>- Paul, 34 ans</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
