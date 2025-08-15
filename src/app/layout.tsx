import { orbitron, rajdhani } from "@/lib/fonts";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Fun Portal",
    template: "%s | Fun Portal",
  },
  description: "Online gaming platform",
  icons: {
    icon: "/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${orbitron.variable}`}>
      <body className={"dark [font-family:var(--font-rajdhani)] antialiased"}>
        {children}
      </body>
    </html>
  );
}
