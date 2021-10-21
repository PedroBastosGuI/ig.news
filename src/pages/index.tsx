import Head from 'next/head'
import {GetStaticProps} from 'next';
import Image from 'next/image'
import { SubscribeButton } from '../Components/SubscribeButton'
import styles from './home.module.scss'
import { stripe } from '../services/stripe';

// isso sempre sera a pagia principal que sera renzada 1 vez

//product está sem nem um tipo definido 


// client-side
// server-side
//static side generation

interface HomeProps{
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}:HomeProps) {


  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>

<main className={styles.contentContainer}>
  <section className={styles.hero}>
    
    <span>👏 Hey, Sem Bem Vindo 🥳 </span>
    <h1>Novas notícias  sobre <span>React</span> no mundo. </h1>

    <p>
    Tenha acesso a todas as publicações<br/>
    <span>por {product.amount} mês</span>
    </p> 
    <SubscribeButton priceId={product.priceId}/>
  </section>

  <img src="/images/avatar.svg" alt="Girl coding"></img>
</main>



    </>
  )
}
//para aplicar o conceito de SSG para que o Next.js cria um HTML estatico 
export const getStaticProps: GetStaticProps = async() =>{
  // fazendo a requisição 
  // o nome da requisação tem que ser o mesmo da importação 
  const price = await stripe.prices.retrieve('price_1Jmif2C8X85KsVhAncsVxw0M', {
    expand:['product']
  })//retrive quando é um preçi

  const product = {
    priceId: price.id,
    //para formatar em dolar
    amount: new Intl.NumberFormat('en-US',{
      style:'currency',
      currency:'USD',
    }).format(price.unit_amount/100),
  }

  
  return{
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 horas
  }
}