'use client'; // <-- Esto es importante. Indica que es un componente interactivo.
import { useState } from 'react';

// 1. DEFINIMOS LOS DATOS (Tecnologías y su contexto)
// Aquí usamos la info de tu CV y PEA
const techData = {
  backend: {
    name: 'Backend y Lenguajes',
    items: [
      { name: 'Python', desc: 'Mi lenguaje más fuerte. Usado para scripts, automatización (tipo Jarvis) y backend con Django.' },
      { name: 'Java', desc: 'Dominio intermedio de POO (Herencia, Polimorfismo). Formación en Oracle Java Foundations.' },
      { name: 'Django', desc: 'Framework principal para proyectos Full Stack como el sistema de mensajería en Tesen y gestión de servicios.' },
      { name: 'C#', desc: 'Proyectos y distintivos de Microsoft, enfocado en desarrollo de lógica de negocio y estructuras de datos.' },
      { name: 'PHP', desc: 'Creación de sistemas web funcionales (gestión hotelera, cines, e-commerce) en mis primeras prácticas.' },
      { name: 'Ruby on Rails', desc: 'Introducción al framework para la creación de CRUDs escalables y mantenibles.' },
    ],
  },
  frontend: {
    name: 'Frontend y Móvil',
    items: [
      { name: 'HTML5/CSS3/JS', desc: 'Base de todos mis proyectos web, desde sitios estáticos (MoriDev) hasta sistemas complejos.' },
      { name: 'PWA', desc: 'Desarrollé 2 PWAs instalables en Android para "Tres Peces", logrando automatizar el 90% de registros.' },
      { name: 'Bootstrap', desc: 'Usado para prototipado rápido de interfaces responsive en múltiples proyectos.' },
      { name: 'Android Studio', desc: 'Formación en configuración de layouts, patrones de navegación y conexión a datos (PEA V Semestre).' },
    ],
  },
  devops: {
    name: 'DevOps y Bases de Datos',
    items: [
      { name: 'Render', desc: 'Migré aplicaciones desde cPanel, logrando una reducción del 30% en costos de hosting en "Estudio Tesen".' },
      { name: 'GitHub', desc: 'Control de versiones en todos mis proyectos. Experiencia en GitHub Copilot, Admin y Security (Distintivos).' },
      { name: 'MySQL', desc: 'Base de datos principal para mis proyectos en PHP y Django, incluyendo diseño y optimización de consultas.' },
      { name: 'PostgreSQL', desc: 'Base de datos usada para el despliegue en Render del proyecto de "Decoraciones Mori".' },
      { name: 'Oracle SQL', desc: 'Formación específica de SENATI (Database Foundation) en modelado y programación de scripts SQL.' },
      { name: 'cPanel', desc: 'Mantenimiento y ajustes de estabilidad en aplicaciones desplegadas, gestionando dominios e IPs.' },
    ],
  },
  ia: {
    name: 'IA, APIs y Big Data',
    items: [
      { name: 'APIs (Google/DNI)', desc: 'Integré Google OAuth, Google Maps y APIs de DNI en "Decoraciones Mori" para optimizar registros.' },
      { name: 'Azure Fundamentals', desc: 'Formación AZ-900 y distintivos en Azure AI Studio, IA Responsable y Content Safety.' },
      { name: 'Redes Neuronales', desc: 'Conocimiento en implementación de paquetes (Neuralnet, H20) y desarrollo de modelos de IA (PEA VI Semestre).' },
      { name: 'Machine Learning', desc: 'Procesamiento, análisis y desarrollo de modelos predictivos (PEA V Semestre).' },
      { name: 'Big Data', desc: 'Análisis de datos con R y conceptos de Hadoop (PEA V Semestre).' },
    ],
  },
};

// Definimos los tipos para las pestañas
type TabKey = 'backend' | 'frontend' | 'devops' | 'ia';


// 2. EL COMPONENTE (La lógica de las pestañas)
export default function TechStack() {
  const [activeTab, setActiveTab] = useState<TabKey>('backend');

  const tabs: { key: TabKey; name: string }[] = [
    { key: 'backend', name: 'Backend' },
    { key: 'frontend', name: 'Frontend' },
    { key: 'devops', name: 'DevOps/DB' },
    { key: 'ia', name: 'IA/APIs' },
  ];

  return (
    <div className="w-full">
      {/* Contenedor de los botones de pestañas */}
      <div className="flex flex-wrap border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-3 px-5 text-lg font-medium transition-colors
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
      <div className="py-8">
        {/* Usamos el estado 'activeTab' para mostrar dinámicamente el contenido */}
        <h3 className="text-2xl font-semibold text-white mb-6">
          {techData[activeTab].name}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {techData[activeTab].items.map((item) => (
            <div key={item.name}>
              <h4 className="text-lg font-bold text-cyan-300">{item.name}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}