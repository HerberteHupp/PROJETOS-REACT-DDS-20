
import {useState} from 'react'

const Listagem = () => {

 const[lista,setLista] = useState(["Pedro","Cris","Manoel","Altair","Moacyr"]) 

 const[jogadores] = useState([
     
{id:1, nome:"kaká", time:"Milan",number:8},
{id:2, nome:"Bruno Henrique", time:"Wolfsburg",number:23},
{id:3,nome:"Di Stefano", time:"Real Madrid",number:10},

 ]);

 const[numero,setNumero] = useState(1)




  return (
    <div>
         <button onClick={() => {
            setNumero(numero+1)
            setLista([...lista,numero])

         }}>
            Adicionar na lista
         </button>

        <h2> Listagem</h2>
        <ul>

           <li>João Lucas</li> 
           <li>Marcelo</li>

           {

            lista.map((valor,index) =>(
                <li key={index}>{valor}</li>

               
          
            ))
           }
         
        </ul>

         <h2>Lista de Jogadores</h2>
         {jogadores.map((Jogador) =>(
            <h3 key={Jogador.id}> O jogador {Jogador.nome} jogou no time {Jogador.time} com a camisa {Jogador.number}</h3>

         ))}



    </div>
  )
}

export default Listagem