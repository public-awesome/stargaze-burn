import '@/styles/globals.css'
import localFont from '@next/font/local'

const brandFont = localFont({ 
  src: '/BasementGrotesque.otf', 
  variable: '--font-basement', 
})


export default function App({ Component, pageProps }) {
  return (
    <main className={`${brandFont.variable} font-sans bg-main-img`}>
      <Component {...pageProps} />
    </main>
  )
}