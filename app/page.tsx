import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-900 text-white">
      
      {/* Contenedor Principal */}
      <div className="text-center max-w-4xl">
        
        {/* Tu Nombre */}
        <h1 className="text-5xl md:text-7xl font-bold">
          Diego Alejandro Zulueta Mori
        </h1>

        {/* Tu Título (El innovador) */}
        <h2 className="mt-4 text-2xl md:text-3xl font-light text-cyan-300">
          Ingeniero de Software | Estratega Digital y Creativo
        </h2>

        {/* Tu Subtítulo (El impacto) */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Convierto problemas de negocio complejos en soluciones PWA, IA y Web automatizadas y eficientes.
        </p>

        {/* Botones de Contacto */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/diegozulueta"
            target="_blank"
            className="bg-cyan-500 text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-cyan-400 transition-colors"
          >
            Ver LinkedIn
          </a>
          <a
            href="https://github.com/DiegoM0R1"
            target="_blank"
            className="border border-gray-500 text-gray-300 font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Ver GitHub
          </a>
        </div>
      </div>

    </main>
  );
}