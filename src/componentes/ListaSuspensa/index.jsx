import './lista-suspesa.estilos.css'

export function ListaSuspensa (props) {
    const temas = props.temas
    return (
        <select className='lista-suspensa-form' defaultValue="" name={props.name} id={props.id} required>
            <option value="" disabled>
                Selecione uma opção
                </option>
            {temas.map((tema) => {
                return <option key={tema.id} value={tema.id}>{tema.nome}</option>
            })}
        </select>
    )
}