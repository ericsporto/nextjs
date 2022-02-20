import Link from "next/link"

export default function Products () {
    return (
        <>
            
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