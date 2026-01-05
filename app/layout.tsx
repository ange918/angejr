import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ange Akonde | BigSixteen - Full-Stack Developer",
  description: "Futuristic Portfolio of Ange Akonde (BigSixteen), Full-Stack Developer & Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200 bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
