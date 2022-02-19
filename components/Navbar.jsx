import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <ul>
                <Link href="/about"><a>About</a></Link>
                <hr />
                <Link href="/products"><a>Produtos</a></Link>
            </ul>
        </>
    )
}