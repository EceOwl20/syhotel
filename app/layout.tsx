import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./generalComponents/Header";
import Footer from "./generalComponents/Footer";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SY Hotels",
  description: "SY Hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={montserrat.variable}>
         <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}