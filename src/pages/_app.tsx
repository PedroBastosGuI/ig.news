import {AppProps} from "next/app"
import { Header } from "../Components/Header"
import {Provider as NextAuthProvaider} from 'next-auth/client'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return(
//tudo que roda aqui é renderizado 


//
    <NextAuthProvaider session={pageProps.session}>
     <Header />
    <Component {...pageProps} />
    </NextAuthProvaider>

  )
   
}

export default MyApp
