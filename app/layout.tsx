import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/generalComponents/Header";
import Footer from "../components/generalComponents/Footer";

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
       <head>
        <link
          rel="stylesheet"
          href="/fonts/flaticon/flaticon_hotel.min.css"
        />
      </head>
      <body className={montserrat.variable}>
         <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}