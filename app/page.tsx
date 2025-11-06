import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import TechStack from "../components/TechStack";
import DistinctivesStack from "../components/DistinctivesStack";
import ScrollAnimation from "../components/ScrollAnimation";
import Spline from '@splinetool/react-spline/next';
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar /> 
      
      {/* ==================================
          SECCIÓN HERO (CON 3D INTERACTIVO)
          ================================== */}
     <div className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-gray-900">
  
  {/* ---------------------------------
      1. Columna Izquierda: Texto
         En desktop (lg:): Ocupa la mitad (lg:w-1/2) y alinea el texto a la izquierda.
     --------------------------------- */}
  <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center p-6 md:p-12 text-center lg:text-left">
    
    <h1 className="text-5xl md:text-7xl font-bold text-white">
      Diego Alejandro Zulueta Mori
    </h1>

    <h2 className="mt-4 text-2xl md:text-3xl font-light text-cyan-300">
      Ingeniero de Software | Estratega Digital y Creativo
    </h2>

    <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0">
      Convierto problemas de negocio complejos en soluciones PWA, IA y Web automatizadas y eficientes.
    </p>

    {/* Botones: Centrados en móvil, a la izquierda en desktop */}
    <div className="mt-10 flex justify-center lg:justify-start gap-4">
      <a
      rel="noopener noreferrer"
        href="https://www.linkedin.com/in/diego-alejandro-zulueta-mori-813b85288/"
        target="_blank"
        className="bg-cyan-500 text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-cyan-400 transition-colors"
      >
        Ver LinkedIn
      </a>
      <a
      rel="noopener noreferrer"
        href="https://github.com/DiegoM0R1"
        target="_blank"
        className="border border-gray-400 text-gray-100 font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
      >
        Ver GitHub
      </a>
    </div>
  </div>

  {/* ---------------------------------
      2. Columna Derecha: Modelo 3D
         En móvil: Ocupa una altura mínima de 400px.
         En desktop (lg:): Ocupa la otra mitad (lg:w-1/2) y toda la altura.

     --------------------------------- */}
      <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
      Interactivo: rota y haz zoom en el modelo 3D usando el mouse o el tacto.
      Usa tus dos dedos
    </p>
  <div className="relative w-full lg:w-1/2 h-full min-h-[400px] lg:min-h-0">
    <Spline
      scene="https://prod.spline.design/Z-WLptj39RFZnz-g/scene.splinecode"
      className="absolute top-0 left-0 w-full h-full"
    />
  </div>

</div>




      <div className="relative flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-900 text-white">

        {/* ==================================
            SECCIÓN DE PROYECTOS DESTACADOS
            ================================== */}
        <ScrollAnimation delay={0.1}>
          <section id="proyectos" className="w-full max-w-4xl mt-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Estudios de Caso
            </h2>
            <ProjectCard
              titulo="Optimizador de Negocios (PWA)"
              cliente="Tres Peces Servicios Agropecuarios S.A.C."
              problema="El 90% de registros de ventas eran manuales, generando un 70% de errores humanos y consumiendo horas de gestión."
              solucion="Desarrollé 2 PWAs (Progressive Web Apps) para digitalizar el flujo de ventas e inventario, con reportes CSV para el ERP."
              stack={["PWA", "Android", "Automatización", "Reportes CSV"]}
              resultado1_valor="-70%"
              resultado1_desc="Reducción de Errores Humanos"
              resultado2_valor="+90%"
              resultado2_desc="Registros Automatizados"
              linkGithub="https://github.com/DiegoM0R1"
            />
            <ProjectCard
              titulo="Sistema Full Stack de Gestión y Pagos"
              cliente="Decoraciones Mori E.I.R.L."
              problema="Proceso manual para agendar citas y confirmar pagos, generando 40% de tiempo perdido en coordinación."
              solucion="Sistema web con autenticación (Google OAuth) e integración de APIs (DNI, Google Maps) para optimizar el registro y pago."
              stack={["Django", "Python", "Google OAuth", "Google Maps API", "API DNI", "Render"]}
              resultado1_valor="-40%"
              resultado1_desc="Reducción Tiempo de Gestión"
              resultado2_valor="+50%"
              resultado2_desc="Eficiencia en Operaciones (Prueba)"
              linkGithub="https://github.com/DiegoM0R1"
            />
            <ProjectCard
              titulo="Migración de Infraestructura y Ahorro"
              cliente="Tesen & Asociados S.A.C."
              problema="Costos elevados de hosting en cPanel y un flujo de despliegue lento y manual."
              solucion="Migré las aplicaciones a Render, implementé control de versiones con GitHub y desarrollé una app interna de mensajería."
              stack={["Render", "cPanel", "DevOps", "GitHub", "Django", "MySQL"]}
              resultado1_valor="-30%"
              resultado1_desc="Reducción Costos de Hosting"
              resultado2_valor="x2"
              resultado2_desc="Velocidad de Despliegue"
              linkGithub="https://github.com/DiegoM0R1"
            />
          </section>
        </ScrollAnimation>

        {/* ==================================
            SECCIÓN: STACK TECNOLÓGICO (INTERACTIVA)
            ================================== */}
        <ScrollAnimation delay={0.2}>
          <section id="stack" className="w-full max-w-4xl mt-24 px-4 text-left">
            <h2 className="text-4xl font-bold text-center mb-12">
              Mi Stack Tecnológico
            </h2>
            <TechStack />
          </section>
        </ScrollAnimation>

        {/* ==================================
            SECCIÓN: LABORATORIO CREATIVO
            ================================== */}
       <ScrollAnimation delay={0.3}>
  <section id="creativo" className="w-full max-w-4xl mt-24 px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      El Laboratorio Creativo
    </h2>
    <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
      No solo construyo software. Diseño soluciones, creo marcas y exploro la intersección entre tecnología y arte.
    </p>

    {/* Contenedor Responsive:
        - En móvil (default): se apila (flex-col).
        - En desktop (md:): se pone lado a lado (md:flex-row).
    */}
    <div className="flex flex-col md:flex-row gap-8 items-center">
      
      {/* ---------------------------------
          1. Columna Izquierda: Tarjetas de Texto
         --------------------------------- */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg h-full">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">Branding y Emprendimiento</h3>
          <p className="text-gray-300">
            Fundador de <span className="font-bold">MoriDev</span>, mi marca personal para desarrollo y diseño. Creé mi propio logo, branding y estrategia de e-commerce.
          </p>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg h-full">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">Automatización e IA</h3>
          <p className="text-gray-300">
            Autodidacta en scripts de automatización con Python y prototipos de asistentes virtuales tipo Jarvis.
          </p>
        </div>
      </div>

      {/* ---------------------------------
          2. Columna Derecha: Nuevo Modelo 3D
         --------------------------------- */}
      <div className="w-full md:w-1/2 h-full min-h-[400px]">
        <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg h-full">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3 px-2">Arte Digital y 3D</h3>
          <div className="w-full h-[350px] rounded-md overflow-hidden">
            <Spline
              scene="https://prod.spline.design/tjYsK4862-ApkL4D/scene.splinecode"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</ScrollAnimation>
        
        {/* ==================================
            SECCIÓN: FORMACIÓN Y DISTINTIVOS
            ================================== */}
        <ScrollAnimation delay={0.4}>
          <section id="formacion" className="w-full max-w-4xl mt-24 px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Formación y Aprendizaje Continuo
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-lg mb-12 text-center">
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Profesional Técnico en Ingeniería de Software con IA</h3>
              <p className="text-lg text-gray-300">SENATI (2021 – 2025)</p>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                Formación dual (instituto + empresa) enfocada en desarrollo multiplataforma, IA, big data, y metodologías ágiles.
              </p>
            </div>
            <h3 className="text-2xl font-semibold text-center text-white mb-8 mt-12">
              Distintivos y Conocimientos Clave
            </h3>
            <DistinctivesStack />
          </section>
        </ScrollAnimation>

        {/* ==================================
            SECCIÓN: FOOTER (PIE DE PÁGINA)
            ================================== */}
        <ScrollAnimation delay={0.5}>
          <footer id="contacto" className="w-full max-w-4xl mt-24 py-12 px-4 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Hablemos</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-lg mx-auto">
                Estoy disponible para proyectos freelance y oportunidades full-time. Contáctame y construyamos algo increíble.
              </p>
              <a
                href="mailto:zuluetamori@gmail.com"
                className="inline-block bg-cyan-500 text-gray-900 font-medium py-3 px-8 rounded-lg text-lg hover:bg-cyan-400 transition-colors"
              >
                zuluetamori@gmail.com
              </a>
              <div className="flex justify-center gap-6 mt-10">
                <a href="https://linkedin.com/in/diegozulueta" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors" rel="noopener">LinkedIn</a>
                <a href="https://github.com/DiegoM0R1" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors" rel="noopener">GitHub</a>
              </div>
              <p className="text-gray-500 text-sm mt-12">
                Hecho desde Chachapoyas, Perú.
                <br />
                Diseñado con Next.js y Tailwind CSS. Desplegado en Vercel.
              </p>
            </div>
          </footer>
        </ScrollAnimation>

      </div> {/* Cierre del <div> que tiene el fondo oscuro */}

    </main>
  );
}