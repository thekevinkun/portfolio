import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "Kevin Mahendra | Full Stack Developer",
  description:
    "Self-taught Full Stack Developer passionate about building real-world web applications. Specializing in Next.js, React, TypeScript, and modern web technologies.",
  keywords: [
    "Kevin Mahendra",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Portofolio",
    "Samarinda Developer",
    "Indonesia Developer",
  ],
  authors: [{ name: "Kevin Mahendra" }],
  creator: "Kevin Mahendra",
  publisher: "Kevin Mahendra",

  // Open Graph metadata (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kevinmahendra.com",
    siteName: "Kevin Mahendra Portfolio",
    title: "Kevin Mahendra | Full Stack Developer",
    description:
      "Self-taught Full Stack Developer passionate about building real-world web applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kevin Mahendra Portfolio",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Kevin Mahendra | Full Stack Developer",
    description:
      "Self-taught Full Stack Developer passionate about building real-world web applications.",
    images: ["/og-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add verification codes here later)
  verification: {
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
