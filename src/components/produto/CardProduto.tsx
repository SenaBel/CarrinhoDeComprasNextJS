import useCarrinho from "@/data/hooks/useCarrinho"
import IProduto from "@/data/model/IProduto"
import Image  from "next/image"

interface ICardProdutoProps{
    produto: IProduto

}


export default function CardProduto(props: ICardProdutoProps){
    const {adicionar} = useCarrinho()
    const {descricao, nome, preco, imagem} = props.produto

    return(

        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
                <Image src={imagem} alt={nome} fill className="object-cover"/>
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl text-white font-bold">{nome}</h2>
                <p className="flex-1 text-sm text-zinc-400">{descricao}</p>

                <div className="flex justify-between items-center text-white">
                    <span className="text-lg  font-semibold mt-2">R$ {preco.toFixed(2)}</span>
                    <button onClick={() => adicionar(props.produto)} className="border rounded-full px-5 py-1 text-sm">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    )
}