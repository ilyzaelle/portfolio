import React from 'react';

export default function Experience() {
  const experiences = [
    {
      year: "2022 - 2025",
      title: "Apprenti IT",
      company: "Carlton Cannes",
      description:
          "Support technique, maintenance, automatisations (scripts PowerShell, C#) et développement full stack (Java, Spring) pour outils internes.",
    },
    {
      year: "2019",
      title: "Stage d'observation (3e)",
      company: "Olivier Informatique, Mandelieu-la-Napoule",
      description:
          "Découverte du diagnostic et du dépannage matériel informatique dans une petite entreprise locale.",
    },
    {
      year: "2018",
      title: "Stage d'observation (4e)",
      company: "STMicroelectronics, Sophia-Antipolis",
      description:
          "Immersion dans les équipes de programmation et microélectronique. Premiers pas dans un grand environnement industriel.",
    },
  ];

  return (
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Expérience professionnelle</h1>
        <div className="space-y-6 border-l-4 border-blue-600 pl-6">
          {experiences.map((exp, index) => (
              <div
                  key={index}
                  className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
                <div className="bg-white rounded-md shadow-md p-4">
                  <h2 className="text-xl font-semibold text-blue-600">{exp.title}</h2>
                  <p className="text-sm text-gray-600">
                    {exp.company} - <span>{exp.year}</span>
                  </p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              </div>
          ))}
        </div>
      </main>
  );
}
