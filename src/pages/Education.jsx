import React from 'react';

export default function Education() {
    const education = [
        {
            year: "2022 - 2025",
            title: "BUT Informatique (alternance)",
            school: "IUT Nice Côte d’Azur, Sophia-Antipolis",
            description:
                "Parcours Réalisation d’Applications : conception, développement, validation. Formation pratique orientée projet, en alternance.",
        },
        {
            year: "2019 - 2022",
            title: "Baccalauréat STI2D - Spécialité Systèmes d'Information et Numérique",
            school: "Lycée Jules Ferry, Cannes",
            description:
                "Formation technologique axée sur l’ingénierie, les systèmes embarqués, la programmation et les réseaux. Acquisition de bases solides en électronique et développement informatique.",
        },
        {
            year: "2016 - 2019",
            title: "Diplôme National du Brevet",
            school: "Collège Stanislas, Cannes",
            description:
                "Validation du socle commun de connaissances, de compétences et de culture en fin de collège, avec mention. Préparation au lycée et à l’orientation scientifique.",
        },
        {
            year: "2015 - 2016",
            title: "Sixième internationale anglophone",
            school: "Centre International de Valbonne (CIV)",
            description:
                "Classe internationale bilingue dispensée en anglais et en français. Développement d’une aisance linguistique avancée et d’une ouverture culturelle dès le début du secondaire.",
        }
    ];

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Formation</h1>
            <div className="space-y-6 border-l-4 border-blue-600 pl-6">
                {education.map((exp, index) => (
                    <div
                        key={index}
                        className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
                        <div className="bg-white rounded-md shadow-md p-4">
                            <h2 className="text-xl font-semibold text-blue-600">{exp.title}</h2>
                            <p className="text-sm text-gray-600">
                                {exp.school} <span>{exp.year}</span>
                            </p>
                            <p className="mt-2 text-gray-700">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
