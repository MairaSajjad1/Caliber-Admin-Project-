import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NextTheme from "@/providers/next-theme";
import GlobalDrawer from "@/components/drawer/container";
import GlobalModal from "@/components/modal/container";

import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Caliber",
  description: "Caliber Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className} suppressHydrationWarning>
        <NextTheme attribute="class" defaultTheme="system" enableSystem>
          <GlobalDrawer />
          <GlobalModal />
          {children}
        </NextTheme>
      </body>
    </html>
  );
}
