import React from 'react';

function PopularCourses() {
  return (
    <section className="popular-courses">
      <h2>Cours Populaires</h2>
      <div className="courses-grid">
        <div className="course-card">
          <h3>Français Débutant</h3>
          <p>Parfait pour commencer à apprendre le français.</p>
        </div>
        <div className="course-card">
          <h3>Anglais Business</h3>
          <p>Améliorez votre anglais pour les affaires.</p>
        </div>
        <div className="course-card">
          <h3>Espagnol Intermédiaire</h3>
          <p>Renforcez vos compétences en espagnol.</p>
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;
