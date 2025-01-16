"use client"

import { useState } from "react";

export default function Produto(){
    const [showForm, setShowForm] = useState("flex");
    
    function changeShowStates() {
        setShowForm("hidden");
    }    

    return(
        <div className="gap-8 flex flex-col bg-zinc-700 px-2 py-2 rounded">
            <div className="gap-3 flex flex-col">
                <h1 className="text-white text-2xl text-center">Cadastro de Produtos</h1>

                <form className="gap-2 flex flex-col items-center justify-center">
                    <input className="bg-zinc-500 px-2 py-1 rounded" type="text" placeholder="Nome" />
                    <input className="bg-zinc-500 px-2 py-1 rounded" type="text" placeholder="Descrição" />
                    
                    <div className="flex gap-1">
                        <input className="bg-zinc-500 w-[120px] px-2 py-1 rounded" type="text" placeholder="Preço" />
                        <button className="bg-blue-700 text-white px-2 py-1 rounded-md" onClick={() => changeShowStates()}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}