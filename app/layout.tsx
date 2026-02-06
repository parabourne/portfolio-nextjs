import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Toğrul Abbasov | Full-Stack Developer",
  description: "Web, Mobile, Data Analitika və AI həllər",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className="scroll-smooth">
      <body className={`${geist.variable} font-sans bg-[#f8fafc] text-gray-800`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
