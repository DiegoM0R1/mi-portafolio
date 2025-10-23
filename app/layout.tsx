import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego Mori | Ingeniero de Software",
  description: "Portafolio de Diego Alejandro Zulueta Mori - Ingeniero de Software | Estratega Digital y Creativo. Especializado en soluciones PWA, IA y desarrollo web eficiente.",
  icons: {
    icon: '/public/images/logo.png', // o icon.png/icon.svg si usas otro formato
    // Puedes añadir diferentes tamaños si lo necesitas
    apple: '/apple-icon.png',
    shortcut: '/shortcut-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center">
              <Image
                src="/images/logo.png" // Ajusta esta ruta a la ubicación de tu logo
                alt="Diego Mori Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        </header>
        <main className="pt-16"> {/* Añadimos padding-top para compensar el header fijo */}
          {children}
        </main>
      </body>
    </html>
  );
}
