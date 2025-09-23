import React from 'react'
import Show from '../components/Show'

const MostrarCoisas = () =>{

  return (
    <div>
        <h1> MostrandoCoisas</h1>
        {/* Chamando o componente show,passando uma prioridade nome com uma valor */}

        <Show name={"Cristiano"}></Show>
        <Show name={"Dembele"}></Show>

        <ShowDois time="Manchester Sim" pais ="Inglaterra" posição="3"></ShowDois>
        <ShowDois time="Real Madrid" pais ="Espanha" posição="1"></ShowDois>
        <ShowDois time="Milan" pais ="Italia" posição="2"></ShowDois>

    </div>
  )
}

export default MostrarCoisas