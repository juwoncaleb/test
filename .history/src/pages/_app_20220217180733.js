import { Provider } from 'react-redux'

import {Provider as AuthProvider} from "next-auth/client"
import { RecoilRoot } from "recoil";


import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
    
  )
}

export default MyApp

