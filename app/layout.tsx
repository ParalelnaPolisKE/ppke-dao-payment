import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3ModalProvider } from '@/context/Web3Modal'
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Become a member of Paralelná Polis Košice",
  description: "Membership payment into the DAO of Paralelná Polis Košice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <Web3ModalProvider>
          {children}
          <Toaster />
        </Web3ModalProvider>
      </body>
    </html>
  );
}
