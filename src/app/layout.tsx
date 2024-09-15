import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Cayo Legal - Software Developer | Web Developer | Mobile Developer",
  description:
    "Desarrollador Frontend y Mobile especializado en React. Experto en crear interfaces modernas y optimizadas, con conocimientos de backend para soluciones completas.",
  keywords: [
    "desarrollador de software",
    "desarrollador web",
    "desarrollador movil",
    "software development",
    "frontend developer",
    "mobile developer",
    "javascript",
    "typescript",
    "react",
    "react native",
    "nextjs",
    "cayo legal",
    "developer portfolio",
  ],
  authors: [{ name: "Cayo Legal", url: "https://cayolegal.vercel.app" }],
  creator: "Cayo Legal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
