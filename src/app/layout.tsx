import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define Prop Types for Layout
interface LayoutProps {
  children: React.ReactNode;
}

// components/Layout.tsx
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* Navbar component */}
      <Navbar />
      {/* Main content area, where individual pages will be rendered */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Samuel Ikoli - A Full Stack Software Developer',
  description: 'Official portfolio page of Samuel Ikoli. A Bachelor of Electrcal and Electronics Engineering building a career in Software Engineering',
  openGraph: {
    title: 'Samuel Ikoli - A Full Stack Software Developer',
    description: 'Official portfolio page of Samuel Ikoli. A Bachelor of Electrcal and Electronics Engineering building a career in Software Engineering',
    url: 'https://www.samuelikoli.com.ng',
    images: [
      {
        url: 'https://samuelikoli.com.ng/MyLogo2.png'
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
