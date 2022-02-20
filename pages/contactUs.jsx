import style from '../styles/ContactUs.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function ContactUs () {
    return (
        <>
        <Head>
        <title>Contact Page Pae</title>
        <meta name="keywords" content="contact" />
        <meta name="description" content="that is the contact page" />
        

      </Head><Head>

        </Head>
        <div className={style.contact}>
            <h1>Contact Us</h1>

            <textarea name="" id="" cols="30" rows="10"></textarea>

            

            <Link href="/"><a >Voltar</a></Link>

        </div>
        </>
    )
}