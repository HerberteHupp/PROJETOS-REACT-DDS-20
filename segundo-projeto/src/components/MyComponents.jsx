// Importação do css externo, pra utilização
import "./MyComponents.css"

const MyComponents = () => {
  return (
    <div>
        <h1> Meu incrível componente</h1>
        <p> parágrafo muito top do componente</p>

        {/* css utilizando classe*/}
        <p className="azul">Este aqui nãi vai vazar</p>
         

         {/* css in line*/}
         <h2 style={{color:" blue",backgroundColor:"pink",fontSize:"100px"}}>
            TEXTO TOP. COM ESTILO TOP TAMBÉM.
         </h2>


    </div>
  )
}

export default MyComponents