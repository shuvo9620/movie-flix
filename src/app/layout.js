import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Movie Flix',
  description: 'A movie streaming website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
