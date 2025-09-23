import React from 'react'


//props = informações que são passadas para o componente
const Show =(props) => {
  return (
    <div>

        <h1>SHOW</h1>

        {/*Acessa dentro do objeto props, a chave name,para mostrar como informação*/}
        <h3> O nome do usuário é:
            {props.name}
        </h3>
    </div>
  )
}

export default Show