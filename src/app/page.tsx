"use client"; 

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import Typewriter from 'typewriter-effect';
import { Terminal } from "lucide-react"; 

export default function Home() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/images/1-fondo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      <div className="relative z-10 w-full py-10">
        <Container>
          <Heading className="font-black text-white text-5xl md:text-7xl mb-2 drop-shadow-xl">
            Nathan Hernandez
          </Heading>
          
          <div className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-blue-400 mb-8 h-12 drop-shadow-lg">
            <Terminal className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mt-1" strokeWidth={2.5} />
            <Typewriter
              options={{strings: ['Desarrollador Web', 'Arquitecto de Software', 'Ingeniero'],
                autoStart: true, loop: true, deleteSpeed: 50, delay: 80,}}/>
          </div>

          <Paragraph className="max-w-2xl mt-4 text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            Ingeniero en Desarrollo de Software <Highlight className="text-blue-300 font-bold bg-white/10 px-1.5 py-0.5 rounded">especializado en el diseño e implementación de sistemas empresariales a medida.</Highlight> Construyo aplicaciones web escalables centradas en el rendimiento, aplicando arquitecturas backend robustas y creando interfaces de usuario intuitivas para plataformas de gestión operativa.
          </Paragraph>       
        </Container>
      </div>
    </div>
  );
}