'use client';
import Link from 'next/link';
import Image from 'next/image'; 


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Nombre */}
          <div className="flex-shrink-0">
            <Link href="#" className="flex items-center text-xl font-bold text-white hover:text-cyan-400 transition-colors">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </Link>
          </div>

          {/* Links de Navegación (Ocultos en móvil) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#proyectos" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Proyectos
            </Link>
            <Link href="#stack" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Habilidades
            </Link>
            <Link href="#creativo" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Laboratorio
            </Link>
            <Link href="#formacion" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Formación
            </Link>

            {/* Botón de Contacto */}
            <Link href="#contacto" className="text-gray-900 bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Contacto
            </Link>
          </div>

          {/* Aquí se podría poner un botón de menú hamburguesa para móviles,
              pero por ahora lo mantenemos simple. */}

        </div>
      </div>
    </nav>
  );
}