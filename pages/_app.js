import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../stores/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  )
}

export default MyApp
