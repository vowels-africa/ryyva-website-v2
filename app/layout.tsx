import "./globals.css";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ryyva | Complexity, woven into clarity",
  description:
    "A decentralised agentic workflow intelligence company. We synthesise fragmented systems into a single, coherent fabric of enterprise intelligence.",
  

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon-32x32.png",
  },
  
  keywords: [
    "AI",
    "Workflow Intelligence",
    "Agentic Workflows",
    "Enterprise AI",
    "Flint",
    "Lead Intelligence",
  ],
  openGraph: {
    title: "Ryyva | Intelligence Fabric",
    description:
      "Synthesising fragmented systems into coherent enterprise intelligence.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#004225" /> 
      </head>
      <body className={`${inter.className} bg-white antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}