import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Orine Stephenson — Full-Stack Developer",
  description:
    "Full-stack developer building things that matter. B.S. Computing, First Class Honours. Specialising in Java, Python, and modern web technologies.",
  keywords: ["full-stack developer", "software engineer", "Java", "Python", "Next.js", "portfolio"],
  authors: [{ name: "Orine Stephenson" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Orine Stephenson — Full-Stack Developer",
    description: "Full-stack developer building things that matter.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
