import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { MouseGlow } from "@/components/ui/MouseGlow";
import { ThemeProvider } from "@/components/theme-provider";
import ConvexClientProvider from "./ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Eyad Odeh | Premium Frontend Engineer & SaaS Architect",
    template: "%s | Eyad Odeh Portfolio",
  },
  description: "Crafting beautiful high-performance platforms, minimalist SaaS products, and optimized user interfaces. Guided by minimalism, structural speed, and modern engineering aesthetics.",
  keywords: ["Next.js 15 Portfolio", "Tailwind CSS Developer", "Framer Motion Animations", "React Engineer", "SaaS Dashboard Specialist", "Freelance Web Developer"],
  authors: [{ name: "Eyad Odeh" }],
  creator: "Eyad Odeh",
  metadataBase: new URL("https://github.com/eyad96"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/eyad96",
    title: "Eyad Odeh | Premium Frontend Engineer Portfolio",
    description: "Futuristic developer portfolio showcasing premium SaaS interfaces, web animations, and clean code architecture.",
    siteName: "Eyad Odeh Developer Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eyad Odeh Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyad Odeh | Premium Frontend Engineer Portfolio",
    description: "Crafting elegant, highly performant web applications using Next.js 15, TypeScript, and Framer Motion.",
    images: ["/images/og-image.png"],
    creator: "@eyad_odeh",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-indigo-500/30 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <ConvexClientProvider>
            {/* Interactive Mouse Glow Spotlight */}
            <MouseGlow />

            {/* Navigation Layer */}
            <Navbar />

            {/* Global Page Wrapper */}
            <main className="flex-grow pt-24 flex flex-col w-full">
              <PageTransition>{children}</PageTransition>
            </main>

            {/* Footer Layer */}
            <Footer />
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
