import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../Components/SubscribeButton'
import styles from './home.module.scss'

// isso sempre sera a pagia principal que sera renzada 1 vez


export default function Home() {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>

<main className={styles.contentContainer}>
  <section className={styles.hero}>
    
    <span>👏 Hey, Sem Bem Vindo 🥳 </span>
    <h1>Novas notícias  sobre <span>React</span> no mundo </h1>

    <p>
    Tenha acesso a todas as publicações<br/>
    <span>por R$9,90 mês</span>
    </p> 
    <SubscribeButton />
  </section>

  <img src="/images/avatar.svg" alt="Girl coding"></img>
</main>



    </>
  )
}
