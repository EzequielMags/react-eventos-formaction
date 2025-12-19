import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento (props) {
    const temas = props.temas


    function aoFormSubmetido(formData) {

      const evento = {
        capa: formData.get("capaEvento"),
        tema: temas.find((tema) => {
          return tema.id == formData.get("tema")
        }),
        data: new Date(formData.get("dataEvento")),
        titulo: formData.get("nomeEvento")
      }

      props.aoSubmeter(evento)
    }

    return (
      <form className="form-evento" action={aoFormSubmetido}>
        <TituloFormulario>
          Preencha para criar um evento:
        </TituloFormulario>
        <div className="campos">
          <CampoDeFormulario>
            <Label htmlFor="nomeEvento">
              Qual o nome do evento?
            </Label>
            <CampoDeEntrada
              type="text"
              id='nomeEvento'
              placeholder='Summer dev hits'
              name='nomeEvento'
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="capaEvento">
              Qual a URL da imagem de capa do evento?
            </Label>
            <CampoDeEntrada
              type="text"
              id='capaEvento'
              placeholder='http://....'
              name='capaEvento'
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="dataEvento">
              Data do evento
            </Label>
            <CampoDeEntrada
              type="date"
              id='dataEvento'
              name='dataEvento'
            />
          </CampoDeFormulario>
          <CampoDeFormulario>
            <Label htmlFor="tema">
              Tema do Evento
            </Label>
            <ListaSuspensa id="tema" name="tema" temas={props.temas}/>
          </CampoDeFormulario>
        </div>
        <div className='acoes'>
          <Botao>
            Criar evento
          </Botao>
        </div>
      </form>
    )
}
