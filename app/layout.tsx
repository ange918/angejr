import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

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
      <body 
        className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200 bg-navy text-white font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
