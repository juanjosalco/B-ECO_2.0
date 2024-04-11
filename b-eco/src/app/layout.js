import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'B-ECO',
  description: 'Grupo estudiantil de sostenibilidad del Tecnológico de Monterrey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  )
}
