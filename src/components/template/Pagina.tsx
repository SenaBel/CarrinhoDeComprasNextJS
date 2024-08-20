import Cabecalho from "./Cabecalho"

interface IPaginaProps{
    children: React.ReactNode
    className?: string
}
export default function Pagina(props: IPaginaProps){


    return(
        <div className="flex flex-col min-h-screen bg-black">
            <Cabecalho />
            <main
                className={`
                    flex-1 w-[1200px] mx-auto 
                     ${props.className ?? ''} py-10
                    `
                }>
            {props.children}
            </main>
        </div>
    )
}