import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import {
  IconBolt,
  IconCertificate,
  IconBrandReact,
  IconDeviceMobileCode,
  IconBrandAngular,
  IconRosetteDiscountCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Proyectos y Certificaciones | Nathan Hernandez",
  description:
    "Proyectos, cursos y certificaciones de Nathan Hernandez, Ingeniero en Desarrollo de Software y Desarrollador Full Stack.",
};

const certifications = [
  {
    title: "React Pro: Lleva tus bases al siguiente nivel",
    platform: "Udemy",
    category: "Frontend Avanzado",
    icon: IconBrandReact,
    iconColor: "text-sky-500 bg-sky-50 border-sky-100",
    description:
      "Patrones de diseño de componentes, hooks avanzados, optimización de rendimiento y arquitectura escalable en React.",
    tags: ["React", "TypeScript", "Patrones de Diseño"],
  },
  {
    title: "React Native: Aplicaciones nativas para iOS y Android",
    platform: "Udemy",
    category: "Desarrollo Móvil",
    icon: IconDeviceMobileCode,
    iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
    description:
      "Creación y despliegue de aplicaciones móviles multiplataforma utilizando React Native, navegación, cámara y consumo de APIs.",
    tags: ["React Native", "iOS", "Android", "Mobile"],
  },
  {
    title: "React: De cero a experto (Hooks y MERN)",
    platform: "Udemy",
    category: "Full Stack / Frontend",
    icon: IconBrandReact,
    iconColor: "text-cyan-600 bg-cyan-50 border-cyan-100",
    description:
      "Dominio del ecosistema completo de React desde los fundamentos hasta Context API, Redux, pruebas unitarias y stack MERN.",
    tags: ["React", "Hooks", "Redux", "MERN"],
  },
  {
    title: "Angular: De cero a experto (Angular 10+)",
    platform: "Udemy",
    category: "Frontend Empresarial",
    icon: IconBrandAngular,
    iconColor: "text-red-600 bg-red-50 border-red-100",
    description:
      "Desarrollo de aplicaciones web SPA robustas con Angular, TypeScript, RxJS, directivas, servicios, rutas y lazy loading.",
    tags: ["Angular", "TypeScript", "RxJS", "SPA"],
  },
];

export default function Projects() {
  return (
    <Container>
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center p-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800">
            <IconCertificate className="h-6 w-6 stroke-[1.75]" />
          </div>
          <Heading as="h2" className="font-black text-2xl md:text-3xl mb-0">
            Cursos y Certificaciones
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-2 rounded-lg border ${cert.iconColor}`}
                      >
                        <IconComponent className="h-5 w-5 stroke-[1.75]" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                        <IconRosetteDiscountCheck className="h-3.5 w-3.5 text-neutral-600" />
                        {cert.platform}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-neutral-500">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-neutral-800 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-neutral-50 text-neutral-700 border border-neutral-200 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}