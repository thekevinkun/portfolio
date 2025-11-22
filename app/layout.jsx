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
  metadataBase: new URL("https://kevinmahendra.vercel.app"),
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

  // Manifest for PWA support
  manifest: "/manifest.json",

  // Open Graph metadata (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kevinmahendra.vercel.app",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#28282b" },
  ],
};

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) for Google Rich Results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kevin Mahendra",
    jobTitle: "Full Stack Developer",
    description:
      "Self-taught Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    url: "https://kevinmahendra.vercel.app",
    image: "https://kevinmahendra.vercel.app/images/profile-1.png",
    email: "kevinmahendra.idn@gmail.com",
    telephone: "+6812-3955-3510",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Samarinda",
      addressRegion: "East Kalimantan",
      addressCountry: "ID",
    },
    sameAs: [
      "https://www.linkedin.com/in/kevin-mahendra-b96153396/",
      "https://github.com/thekevinkun",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Full Stack Development",
      "Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Harvard University CS50",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
