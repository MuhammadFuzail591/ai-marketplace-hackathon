' use client'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata = {
  title: 'eBay Marketplace - Electronics, Cars, Fashion, Collectibles & More',
  description:
    'Buy and sell electronics, cars, fashion apparel, collectibles, sporting goods, digital cameras, baby items, coupons, and everything else on eBay.',
  keywords:
    'eBay, online marketplace, buy, sell, electronics, cars, fashion, collectibles',
  authors: [{ name: 'eBay Marketplace' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'eBay Marketplace - Electronics, Cars, Fashion, Collectibles & More',
    description:
      'Buy and sell electronics, cars, fashion apparel, collectibles, sporting goods, digital cameras, baby items, coupons, and everything else on eBay.',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eBay Marketplace',
    description:
      'Buy and sell electronics, cars, fashion apparel, collectibles, sporting goods, digital cameras, baby items, coupons, and everything else on eBay.'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
