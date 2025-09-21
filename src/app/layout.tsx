import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Indonesia Answer - Complete Tourism Guide',
    template: '%s | Indonesia Answer'
  },
  description: 'Your complete guide to Indonesian destinations, travel tips, visas, hotels, and cultural experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#40a1ad" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
