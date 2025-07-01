import React from 'react'

export default function About() {
  return (
    <main className="p-6 max-w-6xl mx-auto text-gray-800 dark:text-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src="/profile-placeholder.png" alt="Léo Rodriguez" className="w-40 h-40 rounded-full shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">À propos</h1>
          <p className="mb-3">
            Étudiant en BUT Informatique à l'IUT Nice Côte d’Azur, je cherche une alternance d'une durée de 12 mois.
          </p>
          <p className="mb-3">
            Je travaille en alternance au Carlton Cannes en tant qu'apprenti IT depuis octobre 2022 et mon contrat prend fin avant septembre.
          </p>
          <p className="mb-3">
            Je conçois des outils métiers, automatise des processus et développe des projets orientés architecture logicielle, API REST sécurisées, et automatisation.
          </p>
          <p>
            Curieux, rigoureux, parfaitement bilingue anglais, je développe également des projets personnels, en particulier autour avec Java et React.
          </p>
        </div>
      </div>
    </main>
  );
}
