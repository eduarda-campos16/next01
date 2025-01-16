import Link from "next/link"

export default function Navbar(){
    return(
        <div className="w-full h-[50px] bg-zinc-700 text-white">
            <ul className="h-full flex flex-row items-center justify-center gap-5">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/pages/produto">Produtos</Link>
                </li>
                <li>
                    <Link href="/">Livros</Link>
                </li>
            </ul>
        </div>
    )
}