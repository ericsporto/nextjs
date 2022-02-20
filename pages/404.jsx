import Link from "next/link"

import style from '../styles/NotFound.module.css'

export default function NotFound() {
    return (
        <div className={style.notfound}>
            <h1>404</h1>
            <p>Opa! Parece que essa página não existe!</p>
            <Link  href='/'><a>Go Back</a></Link>
        </div>
    )
}