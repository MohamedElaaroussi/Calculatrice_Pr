// LanguagesGrid.js
import React from 'react';

const languages = [
  { name: 'Français', flag: 'france.png' },
  { name: 'Anglais', flag: 'uk.png' },
  { name: 'Espagnol', flag: 'spain.png' },
  { name: 'Allemand', flag: 'germany.png' },
  { name: 'Italien', flag: 'italy.png' },
  { name: 'Japonais', flag: 'japan.png' },
  { name: 'Chinois', flag: 'china.png' },
  { name: 'Russe', flag: 'russia.png' },
];

function LanguagesGrid() {
  return (
    <section className="languages-grid">
      {languages.map((lang, index) => (
        <div key={index} className="language-card" style={{ backgroundImage: `url(/images/flags/${lang.flag})` }}>
          <div className="overlay">
            <h3>{lang.name}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}

export default LanguagesGrid;
