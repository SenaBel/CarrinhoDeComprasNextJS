import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function CarrinhoVazio(){

    return(
        <div className="flex flex-col items-center gap-4 text-zinc-400">
            <IconShoppingCartOff size={150} stroke={0.5}/>

            <div>
                <h2 className="text-2xl font-bold">Seu carrinho esta vazio</h2>
                <p>Adicione produtos clicando no botão adicionar</p>
            </div>

            <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-sm">
                Ver Produtos
             </Link>
          

        </div>
    )
}