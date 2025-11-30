import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIASIS",
  description:
    "Sistema integral para la gestión de asistencia escolar con geolocalización, notificaciones automáticas y reportes en tiempo real para instituciones educativas.",
  icons: ["/images/icons/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white">{children}</body>
    </html>
  );
}
