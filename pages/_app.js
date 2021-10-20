import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
		  <TopNav/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
