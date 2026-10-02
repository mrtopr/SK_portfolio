import type { Metadata } from "next";
import { Fraunces, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getProfile } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const profile = getProfile();
  const title = `${profile.person.name} | ${profile.person.headline}`;
  const description = profile.person.summary;

  return {
    metadataBase: new URL(profile.person.links.website || "https://heysachin.me"),
    title: {
      default: title,
      template: `%s | ${profile.person.name}`,
    },
    description,
    authors: [{ name: profile.person.name, url: profile.person.links.website }],
    creator: profile.person.name,
    keywords: [
      "Sachin Kumar",
      "Software Engineer",
      "Full-Stack Developer",
      "IIIT Bhubaneswar",
      "SentinelLink",
      "PostgreSQL",
      "React",
      "Node.js",
      "Socket.IO",
      "Geospatial",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: profile.person.links.website,
      title,
      description,
      siteName: `${profile.person.name} Portfolio`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${profile.person.name} - Software Development Engineer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = getProfile();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.person.name,
    jobTitle: "Software Development Engineer",
    url: profile.person.links.website,
    email: `mailto:${profile.person.email}`,
    sameAs: [
      profile.person.links.github,
      profile.person.links.linkedin,
      profile.person.links.leetcode,
    ].filter(Boolean),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IIIT Bhubaneswar",
    },
    knowsAbout: [
      "Full-stack Development",
      "Real-time Systems",
      "Geospatial Indexing",
      "PostgreSQL",
      "Node.js",
      "Socket.IO",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col font-sans selection:bg-accent selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-bg focus:font-mono focus:text-sm focus:outline focus:outline-2 focus:outline-accent"
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
