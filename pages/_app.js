import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {AnimatePresence} from "framer-motion"

// import "../config/firebase"


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    <AnimatePresence initial={true} exitBeforeEnter> 
      
      <Component {...pageProps} />
    
    </AnimatePresence>
    </Layout>
   ) 
}

export default MyApp
