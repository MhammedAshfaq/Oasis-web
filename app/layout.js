import "./globals.css";

export const metadata = {
  title: "Oasis Unani Hospital & Wellness Center",
  description:
    "Oasis Unani Hospital - Trusted Unani medicine, Hijama therapy, herbal treatments, and holistic wellness. Book your appointment today.",
  keywords: [
    "Unani hospital",
    "Hijama",
    "herbal medicine",
    "Unani treatment",
    "holistic wellness"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
