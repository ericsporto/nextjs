import Link from "next/link"
import style from '../styles/about.module.css'

export default function About () {
    return (
        <>
        <div className={style.about}>
            <h1>About</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo incidunt accusamus. At saepe tenetur asperiores culpa aspernatur corporis odio cupiditate aliquam? Nostrum, doloribus eveniet neque veniam accusamus nulla provident?</p>

            <Link href="/"><a >Voltar</a></Link>

        </div>
        </>
    )
}