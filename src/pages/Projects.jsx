import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Jeu 2048 en C avec SDL",
      description: "Version graphique du jeu 2048, développée en C avec la bibliothèque SDL. Interface temps réel, écoute des événements et système de sauvegarde.",
      tech: ["C", "SDL"],
    },
    {
      title: "Jeu UNO Web (Java + BDD)",
      description: "Jeu multijoueur UNO avec logique backend en Java, persistance des données en base MySQL et communication REST.",
      tech: ["Java", "MySQL"],
    },
    {
      title: "Intranet IT – Carlton Cannes",
      description: "Application interne de gestion des comptes et tickets IT. Front-end en HTML/CSS avec PHP API REST développée en Java via Spring Boot.",
      tech: ["PHP", "HTML", "CSS", "Java", "Spring Boot", "Spring Security", "Spring Data JPA"],
    }
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
