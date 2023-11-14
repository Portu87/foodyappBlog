import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";
import PageTransition from "@/components/PageTransition";
import CartProvider from "@/context/CartContext";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "foodyapp",
  description: "foodyapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${nunito.className} bg-white dark:bg-gray-800 `}>
        <NextTopLoader color="#ed1c24" />
        <main className="container mx-auto max-w-2xl mt-4 space-y-4">
         <CartProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
