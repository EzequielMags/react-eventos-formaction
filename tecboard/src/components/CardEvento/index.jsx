import "./CardEvento.css"

export default function CardEvento(props) {
    const temaDoEvento = props.temaDoEvento
    const dataDoEvento = props.evento.data
    console.log(dataDoEvento)
    return (
        <div className="card">
            <img src={props.evento.capa}/> 
            <div className="card-conteudo">
                <h2>
                    {temaDoEvento.toUpperCase()}
                </h2>
                <h3>
                    {props.evento.data}
                </h3>

                <h1>
                    {props.evento.titulo}
                </h1>
                <p>
                    {props.evento.descricao}
                </p>
            </div>
        </div>
    )
}