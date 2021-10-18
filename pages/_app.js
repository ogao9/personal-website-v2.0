import Layout from '../components/Layout'
import TopNav from '../components/TopNav'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
		  <TopNav/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
