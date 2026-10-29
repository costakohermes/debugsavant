import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DebugSavant - AI-powered debugging assistant that explains errors in plain English',
  description: 'AI-powered debugging assistant that explains errors in plain English. An AI assistant that instantly explains errors, suggests fixes, and learns from your codebase',
  keywords: ['debugging', 'developer tools', 'software engineering', 'SaaS'],
  authors: [{ name: 'DebugSavant' }],
  creator: 'DebugSavant',
  publisher: 'DebugSavant',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://debugsavant.com',
    siteName: 'DebugSavant',
    title: 'DebugSavant - AI-powered debugging assistant that explains errors in plain English',
    description: 'AI-powered debugging assistant that explains errors in plain English',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DebugSavant - AI-powered debugging assistant that explains errors in plain English',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DebugSavant - AI-powered debugging assistant that explains errors in plain English',
    description: 'AI-powered debugging assistant that explains errors in plain English',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}