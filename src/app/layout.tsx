import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: {
    default: 'Sui NFT Marketplace | Buy, Sell & Mint NFTs on Sui Blockchain',
    template: '%s | Sui NFT Marketplace',
  },
  description: 'Discover, collect, and trade unique NFTs on the Sui blockchain. Browse collections, mint new NFTs, and connect your Sui wallet to start trading in the fastest growing NFT marketplace.',
  keywords: ['NFT', 'Sui', 'blockchain', 'digital collectibles', 'Web3', 'crypto', 'Sui network', 'NFT marketplace', 'mint NFT', 'NFT trading'],
  authors: [{ name: 'Sui NFT Marketplace' }],
  creator: 'Sui NFT Marketplace',
  publisher: 'Sui NFT Marketplace',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
