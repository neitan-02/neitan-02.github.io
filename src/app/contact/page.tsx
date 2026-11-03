import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Tu Nombre",
  description: "Desarrollador web. Contáctame para proyectos, dudas o colaboraciones.",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 text-neutral-700 mb-4 shadow-sm">
        <Mail className="w-6 h-6" />
      </div>
      <Heading className="font-black mb-2">Contáctame</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Escríbeme a{" "}
        <a
          href="mailto:al222210794"
          className="underline font-medium text-neutral-800 hover:text-black transition"
        >
          al222210794
        </a>{" "}
        o llena este formulario. Te responderé lo antes posible.
      </Paragraph>
      <Contact />
    </Container>
  );
}