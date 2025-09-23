import{ useParams}from 'react-router-dom';

const InfoCard = () => {

 // Guarda o parametro id em uma variável
 const { id } = useParams();


  return (


    <div>
        
        <h1>INFOCARD DE NÚMERO:{id} </h1>


    </div>
  )
}

export default InfoCard