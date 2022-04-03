import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {AnimatePresence} from "framer-motion"
import { AuthContextProvider } from '../context/authContext'

// import "../config/firebase"


function MyApp({ Component, pageProps }) {
  return(
    <AuthContextProvider>
      <Layout>
    <AnimatePresence initial={true} exitBeforeEnter> 
      
      <Component {...pageProps} />
    
    </AnimatePresence>
    </Layout>
    </AuthContextProvider>
   ) 
}

export default MyApp
