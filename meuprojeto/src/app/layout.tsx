import type { Metadata } from "next";
import "./globals.css";
import {Header} from '@/components/header'

export const metadata: Metadata = {
  title: "Meu Site - Aprendendo Next JS",
  description: "Site completo para praticar nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
}
