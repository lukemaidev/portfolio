import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luke Mai\'s Portfolio',
  description: 'Luke Mai\'s portfolio website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" crossOrigin='anonymous'/>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
