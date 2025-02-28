import type { Metadata } from "next";
import "./globals.css";
import Header, { HeaderDefaults } from "@/components/Header";
import Footer, { FooterDefaults } from "@/components/Footer";
import { MartianMono } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Tech Club Starter",
  description: "Tech Club Starter homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MartianMono.variable}>
        <div className="layout-1">
          <Header {...HeaderDefaults} />
          <main role="main">{children}</main>
          <Footer {...FooterDefaults} />
        </div>
      </body>
    </html>
  );
}
