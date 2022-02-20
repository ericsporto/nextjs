import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/products"><a>Produtos</a></Link>
                </li>
                <li>
                    <Link href="/todos"><a>Things for To do</a></Link>
                </li>
                <li>
                    <Link href="/contactUs"><a>Contact Us</a></Link>
                </li>
            </ul>
        </>
    )
}