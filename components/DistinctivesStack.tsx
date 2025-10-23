'use client'; // <-- Componente interactivo
import { useState } from 'react';

// 1. DEFINIMOS LOS DATOS (Con el contexto que pediste)
// He sintetizado tu lista de distintivos y tu PEA.
const data = {
  microsoft: {
    title: 'Especialización Microsoft (Azure, C# y IA)',
    description:
      'Mi formación en Microsoft (AZ-900) va de la teoría a la práctica. He completado distintivos en el uso directo de Azure AI Studio para crear y evaluar aplicaciones de IA, gestionar la moderación de contenido (Azure AI Content Safety) y aplicar los principios de IA Responsable. Mi conocimiento de C# se basa en proyectos prácticos de estructuras de datos y lógica.',
    badges: [
      'Azure Fundamentals (AZ-900)',
      'Azure AI Studio',
      'Azure AI Content Safety',
      'IA Responsable',
      'Conceptos de IA',
      'Desarrollo en C#',
      'Cloud Services',
    ],
    color: 'blue',
  },
  github: {
    title: 'Especialización GitHub y DevOps',
    description:
      "Mi conocimiento de GitHub cubre el ciclo de vida completo del DevOps. Voy más allá del 'git push'. He completado distintivos en la administración de repositorios, incluyendo la configuración de seguridad, la gestión de trabajo con GitHub Projects y la automatización con GitHub Actions. Tengo experiencia específica usando Copilot para acelerar mi desarrollo en Python.",
    badges: [
      'GitHub Copilot (Python)',
      'GitHub Admin',
      'GitHub Security',
      'GitHub Projects',
      'GitHub Actions',
      'Git',
      'Markdown',
    ],
    color: 'gray',
  },
  networks: {
    title: 'Bases de Datos y Redes (Formación Core)',
    description:
      'Esta es la base de mi formación en SENATI. Tengo conocimiento formal de Oracle para el diseño y programación de bases de datos SQL y fundamentos de Java (POO). Además, poseo formación en redes (Cisco CCNA) y seguridad perimetral (Fortinet NSE4), complementado con administración de servidores Linux (Red Hat).',
    badges: [
      'Oracle (Java Foundations)',
      'Oracle (Database SQL)',
      'Red Hat (Linux Admin)',
      'Fortinet (NSE4)',
      'Cisco (CCNA Fundamentos)',
    ],
    color: 'red',
  },
  bigdata: {
    title: 'Big Data y Machine Learning (Especialización IA)',
    description:
      'Como parte de mi carrera en "Ingeniería de Software con IA", mi formación de 5to y 6to semestre se centró en el pipeline de Machine Learning. Esto incluye el análisis exploratorio (Análisis con R), el proceso estándar de industria (CRISP-DM), el manejo de grandes volúmenes de datos (Hadoop) y el desarrollo de modelos predictivos y Redes Neuronales.',
    badges: [
      'Big Data (Hadoop)',
      'Machine Learning',
      'Data Mining (CRISP-DM)',
      'Análisis con R',
      'Modelos Predictivos',
    ],
    color: 'purple',
  },
};

type TabKey = 'microsoft' | 'github' | 'networks' | 'bigdata';

// Función para obtener los colores de los badges (tailwind)
const getBadgeColors = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-900 border-blue-600 text-blue-100';
    case 'gray':
      return 'bg-gray-700 border-gray-500 text-gray-100';
    case 'red':
      return 'bg-red-900 border-red-600 text-red-100';
    case 'purple':
      return 'bg-purple-900 border-purple-600 text-purple-100';
    default:
      return 'bg-gray-700 border-gray-500 text-gray-100';
  }
};

// 2. EL COMPONENTE (La lógica de las pestañas)
export default function DistinctivesStack() {
  const [activeTab, setActiveTab] = useState<TabKey>('microsoft');

  const tabs: { key: TabKey; name: string }[] = [
    { key: 'microsoft', name: 'Microsoft' },
    { key: 'github', name: 'GitHub/DevOps' },
    { key: 'networks', name: 'DB/Redes' },
    { key: 'bigdata', name: 'Big Data/ML' },
  ];

  const activeData = data[activeTab];

  return (
    <div className="w-full">
      {/* Contenedor de los botones de pestañas */}
      <div className="flex flex-wrap border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-3 px-5 text-md md:text-lg font-medium transition-colors
              ${
                activeTab === tab.key
                  ? 'border-b-2 border-cyan-400 text-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }
            `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Contenedor del contenido */}
      <div className="py-8 bg-gray-800/30 px-6 rounded-b-lg">
        {/* Título de la pestaña activa */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          {activeData.title}
        </h3>
        
        {/* Descripción (Lo aprendido) */}
        <p className="text-gray-300 text-lg mb-6">
          {activeData.description}
        </p>
        
        {/* Badges/Conceptos clave */}
        <div className="flex flex-wrap gap-2">
          {activeData.badges.map((badge) => (
            <span
              key={badge}
              className={`text-sm font-medium px-3 py-1 rounded-full border ${getBadgeColors(
                activeData.color
              )}`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}