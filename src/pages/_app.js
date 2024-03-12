import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <html lang="pt-br">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </html>
  )
}

export default MyApp
