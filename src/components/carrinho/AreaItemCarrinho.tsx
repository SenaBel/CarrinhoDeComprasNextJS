import IItemCarrinho from "@/data/model/IItemCarrinho"
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react"
import Image from "next/image"

interface IAreaItemCarrinhoProps{
    item: IItemCarrinho
    adicionar?: (item: IItemCarrinho) => void
    remover?: (item: IItemCarrinho) => void
}


export default function AreaItemCarrinho(props: IAreaItemCarrinhoProps){
    const {item} = props

    return(
        <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
            <div className="relative w-28 h-28">
                <Image
                    className="object-cover"
                     src={item.produto.imagem} 
                     alt={item.produto.nome} 
                     fill
                    />
                    </div>

                <div className="flex  flex-col justify-center flex-1">
                    <span className="text-xl text-white font-bold">{item.produto.nome}</span>
                    <span className="text-sm text-zinc-400">{item.produto.descricao}</span>

                    <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
                        <span className="">R$ {item.produto.preco.toFixed(2)}</span>
                        <IconX size={20} />
                        <span>{item.quantidade}</span>
                        <span>=</span>
                        <span className="text-yellow-500">R$ {(item.produto.preco * item.quantidade).toFixed(2)}</span>
                    </div>

                </div>
                    <div className="flex text-white gap-2 items-center px-5">
                        <button onClick={() => props.remover?.(props.item)} className="">
                            <IconMinus />
                        </button>
                        <span className="flex text-white px-4 py-2 rounded-md bg-zinc-800">{item.quantidade}</span>
                        <button onClick={() => props.adicionar?.(props.item)} className="">
                            <IconPlus />
                        </button>
                    </div>
                   
                
        </div>    
        )
}