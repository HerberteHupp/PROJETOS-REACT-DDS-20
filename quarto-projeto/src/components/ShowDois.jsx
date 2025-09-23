import React from 'react'

 const ShowDois = ({time,pais,posicao}) => {

  return (
    <div Style= {{backgroundColor:"red",color:"White" ,width:"500px"}}>
        <h1>SHOW DOIS</h1>

        <h2> O time atual é: {time} </h2>
        <h2> Fica no país é: {pais} </h2>
        <h2> E posição na tabela é: {posicao} </h2>



    </div>
  )
}
