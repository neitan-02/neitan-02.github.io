import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nathan Hernandez - Desarrollador Full Stack",
  description:
    "Ingeniero en Desarrollo de Software especializado en el diseño e implementación de sistemas empresariales a medida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" translate="no" className="notranslate">
      <body
        className={twMerge(
          inter.className,
          "flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden bg-white overflow-x-hidden"
        )}
      >
        <Sidebar />
        <div className="flex-1 min-w-0 flex flex-col h-full overflow-y-auto bg-white">
          <div className="flex-1 flex flex-col w-full min-h-full">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}