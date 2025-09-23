import {useState} from 'react'

import CardCantor from "/components/CardCantor"

const MostrarCantores = () => {
     const cantores = useState ([
        { id:1, nome:"Gusttavo Lima", idade:32, estilo:"Sertanejo", premioMelhor:false, posicao:100},   
        { id:2, nome:"dJ Juninho POrtugal", idade:32, estilo:"Forró", premioMelhor:true, posicao:1},   
        { id:3, nome:"Mc fanfarrão", idade:32, estilo:"rap", premioMelhor:false, posicao:99},   


     ])       
  return (
    <div>

      <h1>Mostrar cantores</h1>
      {cantores.map((cantor)=>(
        <CardCantor key={cantor.id} nome={cantor.nome} idade={cantor.idade} estilo={cantor.estilo} premioMelhor={cantor.premioMelhor} posicao={cantor.posicao}/>

      ))}

      {/* UTILIZE A DESESTRUTURAÇÃO PARA FAZER AS INFORMAÇÕES DO CANTOR APARECER LÁ NO COMPONENTE CARDCANTOR, QUE NEM FIZ NO SHOW DOIS*/}


    </div>
  )
}

export default MostrarCantores