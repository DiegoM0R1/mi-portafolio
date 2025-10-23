import React from 'react';

// Definimos los "props" que recibirá nuestra tarjeta
// Esto es gracias a que usamos TypeScript
type ProjectProps = {
  titulo: string;
  cliente: string;
  problema: string;
  solucion: string;
  stack: string[]; // Un array de strings para las tecnologías
  resultado1_valor: string;
  resultado1_desc: string;
  resultado2_valor: string;
  resultado2_desc: string;
  linkGithub: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  titulo,
  cliente,
  problema,
  solucion,
  stack,
  resultado1_valor,
  resultado1_desc,
  resultado2_valor,
  resultado2_desc,
  linkGithub,
}) => {
  return (
    <article className="mb-12 rounded-lg border border-gray-700 bg-gray-800/50 p-6 md:p-8 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-cyan-500/10">
      
      {/* Encabezado del Proyecto */}
      <h3 className="text-2xl font-bold text-cyan-300">{titulo}</h3>
      <p className="text-md text-gray-400 mb-4">{cliente}</p>
      
      {/* Stack Tecnológico */}
      <div className="flex flex-wrap gap-2 mb-6">
        {stack.map((tech) => (
          <span key={tech} className="bg-gray-700 text-cyan-200 text-xs font-medium px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      {/* Problema y Solución */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-semibold text-lg text-white mb-2">El Reto</h4>
          <p className="text-gray-300">{problema}</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg text-white mb-2">Mi Solución</h4>
          <p className="text-gray-300">{solucion}</p>
        </div>
      </div>
      
      {/* Resultados (El Impacto) */}
      <div>
        <h4 className="font-semibold text-lg text-white mb-4">Impacto Cuantificable</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400">{resultado1_valor}</div>
            <div className="text-sm text-gray-400">{resultado1_desc}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">{resultado2_valor}</div>
            <div className="text-sm text-gray-400">{resultado2_desc}</div>
          </div>
        </div>
      </div>
      
      {/* Link a GitHub */}
      <div className="mt-8">
        <a
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 text-gray-300 font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Ver Código en GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;