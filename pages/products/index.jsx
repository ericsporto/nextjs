import Link from "next/link"
import Navbar from "../../components/Navbar"
export default function Products () {
    return (
        <>
            <Navbar />
            <ul>
                <li>Tênis</li>
                <li>Desodorante</li>
                <li>Sabonete</li>
                <li>Cabo</li>
            </ul>
            <Link href="/"><a>Voltar</a></Link>
        </>

        
    )
}