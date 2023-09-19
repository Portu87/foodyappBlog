import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Header from '@/components/Header'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <Header/>
        <main className="container mx-auto max-w-2xl my-8">          
        {children}
        </main>
      </body>
    </html>
  )
}
