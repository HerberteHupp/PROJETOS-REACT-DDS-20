import React from 'react'

const cardcantor = ({id, nome,idade,estilo,premioMelhor,posicao}) => {
  return (
    <div>
     <h3> O nome do cantor é:{nome}</h3>
     <h3> Seu gênero musical é:{estilo}</h3>
     <h3> Sua posição no ranking global é:{posicao}</h3>
     { premioMelhor && <h3> Ele já ganhou o prêmio de melhor cantor</h3>}

    </div>
  )
}

export default cardcantor