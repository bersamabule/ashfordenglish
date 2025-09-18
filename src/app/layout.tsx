import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  metadataBase: new URL("https://www.ashfordenglish.com"),
  title: {
    default: "Ashford English",
    template: "%s — Ashford English",
  },
  description:
    "Bespoke, intensive English coaching for high-stakes communication in PIK & PIK2. Private, discreet sessions. Book an assessment.",
  openGraph: {
    type: "website",
    siteName: "Ashford English",
    url: "https://www.ashfordenglish.com",
    title: "Ashford English",
    description:
      "Bespoke, intensive English coaching for high-stakes communication in PIK & PIK2. Private, discreet sessions. Book an assessment.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.ashfordenglish.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-gray-900 px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <header className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              Ashford English
            </Link>
            <nav aria-label="Primary" className="flex items-center gap-6">
              <Link href="/courses" className="hover:underline">
                Courses
              </Link>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                Book Assessment
              </Link>
            </nav>
          </div>
        </header>
        <main id="main" className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Ashford English</p>
            <p>PIK & PIK2 · Mon–Fri 08:00–18:00</p>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Ashford English Private Training",
              url: "https://www.ashfordenglish.com",
              email: "andrew@ashfordenglish.com",
              telephone: "+6281321267709",
              areaServed: ["PIK", "PIK2"],
              openingHours: "Mo-Fr 08:00-18:00",
              sameAs: [],
              image: ["/og-default.jpg"],
            }),
          }}
        />
      </body>
    </html>
  );
}
