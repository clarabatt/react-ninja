'use strict'

import React from 'react'

import './title.css'

// Props e HTML atributos
const Title = React.createClass({
  // O getDefaultProps funciona se o não for passada nenhuma prop, usando um valor default para esses casos.
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastName: 'Sem Sobrenome'
    }
  },
  render: function () {
    return (
      // recebe a prop name por this.props.nomeDaPropriedade
      // Outra forma de setar um valor default pra propriedade
      <h1>Olá {this.props.name + ' ' + this.props.lastName || 'Desconhecido'}</h1>
    )
  }
})

// Pure function + arrow function
const Title2 = () => {
  return (
    <h1>Pure Function</h1>
  )
}
// Se você tem apenas o retorno da função, não precisa usar o return e nem {}
const Title3 = () => <h1>Pure Function</h1>
// Passando props 1
const Title4 = (props) => <h1>Props {props.name}</h1>
// Passando props 2
const Title5 = ({name, lastname}) => <h1>Props {name + ' ' + lastname}</h1>
// Usando Crases
const Title6 = (props) => <h1>Crases {`${props.name} usando string ${props.lastname}`}</h1>

export default Title
