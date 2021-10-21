import {AppProps} from "next/app"
import { Header } from "../Components/Header"

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return(
//tudo que roda aqui é renderizado 
    <>
     <Header />
    <Component {...pageProps} />
    </>

  )
   
}

export default MyApp
