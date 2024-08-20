import IItemCarrinho from "@/data/model/IItemCarrinho"

interface ICardFinalizandoCompraProps {
    itens: IItemCarrinho[]
}

export default function CardFinalizandoCompra(props: ICardFinalizandoCompraProps) {
    const { itens } = props;

    const calcularSubtotal = (): string => {
        const subtotal = itens
            ?.map(i => i.produto.preco * i.quantidade)
            .reduce((a, b) => a + b, 0);
        
        return subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const calcularFrete = (): string => {
        const subtotal = itens
            ?.map(i => i.produto.preco * i.quantidade)
            .reduce((a, b) => a + b, 0);
        
        const frete = subtotal >= 4500 ? 0 : 50;

        return frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const calcularTotal = (): string => {
        const subtotal = itens
            ?.map(i => i.produto.preco * i.quantidade)
            .reduce((a, b) => a + b, 0);
        
        const frete = subtotal >= 4500 ? 0 : 50;

        const total = subtotal + frete;

        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <div className="flex flex-col bg-zinc-900 rounded-md gap-5 mt-10 p-5">
            <div className="flex justify-between">
                <span className="text-white font-bold">Subtotal</span>
                <span className="text-yellow-400 text-lg font-bold">
                    {calcularSubtotal()}
                </span>
            </div>

            <div className="flex justify-between">
                <span className="text-white font-bold">Frete</span>
                <span className="text-white font-bold">
                    {calcularFrete()}
                </span>
            </div>

            <div className="flex justify-between">
                <span className="text-white font-bold">Total</span>
                <span className="text-white font-bold">
                    {calcularTotal()}
                </span>
            </div>

            <div className="flex justify-end">
                <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-sm">
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
}
