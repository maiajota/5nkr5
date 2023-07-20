import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Open_Sans } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
})
const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-openSans',
})

export const metadata: Metadata = {
  title: '5NKR5',
  description:
    'Só na 5NKR5 você encontra sneakers com exclusividade e pelos melhores preços. Confira!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
