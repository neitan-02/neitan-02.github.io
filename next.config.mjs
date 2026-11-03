/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";

const nextConfig = {
  output: "export", // Agregado para habilitar la exportación estática de GitHub Pages
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    unoptimized: true, // Obligatorio para exportaciones estáticas (desactiva el servidor de imágenes interno de Next.js)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    qualities: [50, 75],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // String plugin IDs are required for Turbopack (Next.js 16+)
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["@mapbox/rehype-prism"],
  },
});

export default withMDX(nextConfig);