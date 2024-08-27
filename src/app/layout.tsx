import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cayo Legal - Software Developer",
  description: "Desarrollador Frontend y Mobile especializado en JavaScript y TypeScript con React. Experto en crear interfaces modernas y optimizadas, con sólidos conocimientos de backend para soluciones completas.",
  keywords: ["software development", "frontend developer", "mobile developer", "javascript", "typescript", "react", "react native", "nextjs"],
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
