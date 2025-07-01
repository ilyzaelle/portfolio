import React from 'react'

export default function Skills() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Compétences</h1>
      <h2 className="text-xl font-semibold mt-4">Langages et outils</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Java (Spring Boot, JPA, WebClient, JWT)</li>
        <li>Principes SOLID</li>
        <li>Design patterns</li>
        <li>Réfactorisation</li>
        <li>C (applications bas niveau, SDL, jeux)</li>
        <li>PHP (backends simples, outils métiers)</li>
        <li>SQL (MySQL, MariaDB)</li>
        <li>HTML/CSS, React, TailwindCSS</li>
        <li>Shell/Powershell, scripts d’automatisation</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Soft skills</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Communication claire et structurée</li>
        <li>Prise de décision et sens de l’initiative</li>
        <li>Représentation mentale, gestion de l’espace mémoire</li>
        <li>Adaptabilité en environnement exigeant</li>
      </ul>
    </main>
  );
}
