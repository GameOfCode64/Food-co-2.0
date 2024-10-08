import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/app/context/Authcontext";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food&CO",
  description: "Best Food Delivery App in the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <CartProvider>{children}</CartProvider>
        </AuthContext>
      </body>
    </html>
  );
}
