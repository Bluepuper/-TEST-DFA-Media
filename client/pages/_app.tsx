import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavigationLayout from '../layouts/NavigationLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationLayout>
      <Component {...pageProps} />
    </NavigationLayout>
  )
}
export default MyApp
