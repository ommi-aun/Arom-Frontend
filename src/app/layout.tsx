import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arom AI – Your Intelligent Assistant",
  description:
    "Arom AI is a powerful AI assistant that helps you think, create, and get more done. Experience the future of AI-powered productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
