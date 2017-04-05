'use strict'

import React from 'react'

// --- CHILDREN - renderiza tudo que tem dentro do componente, pode ser usado para fazer composições. Pode-se também passar funções genéricas que vão ser específicadas no código onde será chamada.
const Button = ({children, handleClick}) => (
   <button className='main-button' onClick={handleClick}>{children}</button>
)

// determina qual o tipo das propriedades usadas
Button.propTypes = {
   // handleClick deve ser uma função e deve ser obrigatória
   handleClick: React.PropTypes.func.isRequired
}

export default Button
