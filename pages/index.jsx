import Image from "next/image";
import Head from "next/head";
import style from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>First Page</title>
        <meta name="keywords" content="first" />
        <meta name="description" content="that is the first page" />
        

      </Head>
      
      <h1 className={style.title}>Next Js Project</h1>
      <Image 
      src="/images/beach.jpg" 
      width="400px" 
      height="400px" 
      alt="imagem de uma praia" />
    </div>
  )
}
