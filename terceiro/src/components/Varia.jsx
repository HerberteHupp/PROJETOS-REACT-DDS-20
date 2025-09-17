import {useState} from 'react'

const Varia = () => {


    let itgo = "batman"
    let numero =24
    
    //variável com hook useState
    const[number] = useState(9)
    const[hero, setHero] = useState("Homem aranha")

  return (
    <div>

        {/* Uso de variáveis  */}
        <p>A palavra sorteada foi :{itgo}</p>

        <h1>{numero}</h1>
        <button onClick={() => {
            numero++
            console.log(numero)
        }}> 
        Aumentar contagem
        </button> 

        <h1>{number}</h1>
        <button onClick={() =>{
            setNumber(16)
        }}> 
        Aumentar contagem
        </button>

        {/* Uso de variáveis a partir de agora */}
        <h1>{number}</h1>
        <button onClick ={() =>{setNumber(number+2)}}>+</button>
        <button onClick ={() =>{setNumber(9)}}>+</button>
        <button onClick ={() =>{setNumber(number-2)}}>+</button>

        {/* CRIE UM TPITULO COM  NOME DE HERÓI, E UM BOTÃO QUE REVELE SUA IDENTIDADE SECRETA */}
        <h1>{hero}</h1>
        <button onClick ={() =>{setHero("Miles Morales")}}> Revelar identidade</button>
                   
    </div>
  )
}

export default Varia