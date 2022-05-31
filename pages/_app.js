import '../scss/Main.scss'
import '../styles/globals.css'
import {SSRProvider} from '@react-aria/ssr'; 
//import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="app-body">
        <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </SSRProvider>
    </div>
  </>
  )
}

export default MyApp
