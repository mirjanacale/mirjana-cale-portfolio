import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sg",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-in",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirjanacale.dev"),
  title: "MIRJANA_CALE | Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer architecting scalable digital ecosystems from front-end precision to robust back-end systems.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Next.js",
  ],
  authors: [{ name: "Mirjana Cale" }],
  openGraph: {
    title: "MIRJANA_CALE | Full-Stack Software Developer",
    description:
      "Architecting scalable digital ecosystems from front-end precision to robust back-end systems.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIRJANA_CALE | Full-Stack Software Developer",
    description:
      "Architecting scalable digital ecosystems from front-end precision to robust back-end systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
