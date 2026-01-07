import type { Metadata } from "next";
import { Sora, Lexend } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
});
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Cloud Compute & PaaS Solutions in India | Cantech Cloud",
  description: "Run modern workloads on Cantech Cloud with reliable cloud compute and PaaS services. Flexible infrastructure, optimized performance, and cost control.",
  keywords: [
    "PaaS Solutions ",
    "Cloud Compute",
  ],
  authors: [{ name: "Cantech Cloud" }],
  applicationName: "Cantech Cloud",
  openGraph: {
    title: "Cloud Compute & PaaS Solutions in India | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/",
    description: "Run modern workloads on Cantech Cloud with reliable cloud compute and PaaS services. Flexible infrastructure, optimized performance, and cost control.",
    type: "website",
    images: [
      {
        url: "/assets/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Cantech Cloud",
      },
    ],
  },

  alternates: {
    canonical: "https://www.cantech.cloud/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${sora.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}