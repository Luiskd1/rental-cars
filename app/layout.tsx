import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin LuisCars",
  description: "Rental cars by luis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader color="#000" />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
