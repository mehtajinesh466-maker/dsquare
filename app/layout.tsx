import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { DemoProvider } from "@/context/DemoContext"
import BookDemoModal from "@/components/BookDemoModal"
import "./globals.css"

export const metadata: Metadata = {
  title: "D'Square Chess Academy | Professional Chess Coaching for Kids",
  description: "Nurturing young minds through strategic chess training. Founded by International Rated Coach Vivek Singh. Expert-led 1:1 and group classes for ages 6-16.",
  keywords: ["Chess Academy Indirapuram", "Online Chess Classes", "Vivek Singh Chess", "D'Square Chess Academy", "FIDE Rated Coaches"],
  openGraph: {
    title: "D'Square Chess Academy",
    description: "Transform your child into a strategic thinker. Book a free demo class today.",
    url: "https://dsquarechessacademy.com",
    siteName: "D'Square Chess Academy",
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "D'Square Chess Academy",
          "url": "https://dsquarechessacademy.com",
          "logo": "https://dsquarechessacademy.com/logo.png",
          "founder": {
            "@type": "Person",
            "name": "Vivek Singh"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "915A, Niti Khand I, Indirapuram",
            "addressLocality": "Ghaziabad",
            "addressRegion": "UP",
            "postalCode": "201014",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9588617808",
            "contactType": "customer service",
            "email": "dsquarechessacademy@gmail.com"
          },
          "sameAs": [
            "https://www.facebook.com/dsquarechessacademy",
            "https://www.instagram.com/dsquarechessacademy?igsh=MXMwaDZieGhqaHpiNQ=="
          ]
        }
        `}
        </script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <DemoProvider>
          <Header />
          <Suspense fallback={null}>
            <main>{children}</main>
          </Suspense>
          <Footer />
          <Analytics />
          
          {/* Global Modal sits here, listening to the provider */}
          <BookDemoModal />
        </DemoProvider>
      </body>
    </html>
  )
}