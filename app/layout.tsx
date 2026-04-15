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
    icon: "/favi.png",
    shortcut: "/favi.png",
    apple: "/favi.png", 
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