import { createContext, useState } from "react"
import IItemCarrinho from "../model/IItemCarrinho";
import IProduto from "../model/IProduto";

interface IContextoCarrinhoProps{
    itens: IItemCarrinho[]
    qtdDeItens: number
    adicionar: (item: IProduto) => void
    remover: (item: IProduto) => void
}

const ContextoCarrinho = createContext<IContextoCarrinhoProps>({} as IContextoCarrinhoProps)


export function ProvedorCarrinho(props: any){
    const [itens, setItens] = useState<IItemCarrinho[]>([])

function adicionar(produto: IProduto){

    const item = itens.findIndex(item => item.produto.id === produto.id)

    if(item === -1){
        setItens([...itens, {produto, quantidade: 1}])
    } 
    else{
        const novosItens = [...itens]
        novosItens[item].quantidade++
        setItens(novosItens)
    } 
}

function remover(produto: IProduto){
    const novosItens = itens.map((i) => {
        if(i.produto.id === produto.id){
            i.quantidade--
    }
    return i
    })
    .filter((i) => i.quantidade > 0)
    setItens(novosItens)
}

    return(
        <ContextoCarrinho.Provider value={{
            itens,
            adicionar,
            remover,
            get qtdDeItens(){
                return itens.reduce((total, item) => total + item.quantidade, 0)
            }
            
            }}>
        {props.children}
        </ContextoCarrinho.Provider>

    ) 
}

export default ContextoCarrinho