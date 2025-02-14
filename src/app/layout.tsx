import type { Metadata } from "next";
import theme from "../theme/theme"
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Triped",
  description: "Your destination to find your destination",
  icons: {
    icon: "/favicon.ico",
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${theme.comfortaaFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
