import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Briefcase } from "lucide-react";

export default function ResumePage() {
  return (
    <Container>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 text-neutral-700 mb-4 shadow-sm">
        <Briefcase className="w-6 h-6" />
      </div>
      <Heading className="font-black">Experiencia</Heading>
      <Paragraph className="max-w-xl mt-4">
        Soy desarrollador y disfruto{" "}
        <Highlight>crear soluciones prácticas</Highlight> y aplicaciones web
        bien cuidadas, enfocadas en funcionar bien y aportar valor real en cada
        proyecto.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}