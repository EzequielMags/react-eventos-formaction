import './App.css'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'
import { useState } from 'react'
// no react, componentes são FUNÇÕES

function App() {

  
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial`'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]


  const [eventos, setEventos] = useState(
    [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])


  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
    console.log("evento cadastrado", eventos)
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento
      }/>
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            {eventos.map((evento, index) => {
              return <CardEvento evento={evento} key={index}/>
            })}
          </section>
        )
      })}

      {/* <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  )
}

export default App
