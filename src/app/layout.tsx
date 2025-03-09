
import type { Metadata } from "next";
import theme from "@/theme/theme"; // Ensure your theme file exports your fonts and colours
import "./globals.css";

// Import common UI components
import { Header } from "@/components/Header";
import { FloatingDock } from "@/components/floating-dock";
import { Footer } from "@/components/Footer";
import {
  IconMap2,
  IconBeach,
  IconLuggage,
  IconBuildingAirport,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Get Triped",
  description: "Your destination to find your destination",
  icons: {
    icon: "/favicon.ico",
  },
};

const yourItems = [
  {
    id: 1,
    icon: <IconMap2 className="h-6 w-6" />,
    title: "Destinations",
    href: "/destinations",
  },
  {
    id: 2,
    icon: <IconBeach className="h-6 w-6" />,
    title: "Resorts",
    href: "/resorts",
  },
  {
    id: 3,
    icon: <IconLuggage className="h-6 w-6" />,
    title: "Packing",
    href: "/packing",
  },
  {
    id: 4,
    icon: <IconBuildingAirport className="h-6 w-6" />,
    title: "Airports",
    href: "/airports",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${theme.comfortaaFont.variable} antialiased bg-light text-dark`}
      >
        <Header />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <FloatingDock
          items={yourItems}
          desktopClassName="fixed bottom-0 left-0 w-full flex justify-center z-50"
          mobileClassName="hidden"
        />
        <Footer />
      </body>
    </html>
  );
}
