import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyash आयुर्वेदिक हॉस्पिटल",
  description: "डॉ. दत्तात्रय मुटकुळे—प्रामाणिक आयुर्वेदिक उपचार, वैयक्तिकृत निदान व नॅचरोपॅथी. क्लिनिक किंवा तुमच्या घरावर सुलभ उपचार.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
