import '../styles/globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${jakarta.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
