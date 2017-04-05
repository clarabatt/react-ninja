'use strict'

import React, { Component } from 'react'

class Timer extends Component {
   constructor () {
      super()
      this.state = {
         time: 0
      }
      this.timer;
   }

   /* componentWillReceiveProps (nextProps) - O componente vai receber novas propriedades e você pode pegar elas por parâmetro.  */
   componentWillReceiveProps (nextProps){
      console.log('componentWillReceiveProps timer', this.props, nextProps)
   }

   /* componentDidMount - Quando ele acabou de ser montado, método usado para fazer a manipulação de DOM, como por exemplo uma biblioteca front end, ele não funciona do lado do servidor. Usado pra remover eventos criados manualmente. */
   componentDidMount (){
      this.timer = setInterval(() => this.setState({ 
         time: this.state.time + 1 
      }), 3000)
   }

   /* componentWillMount - O componente vai montar, você pode fazer algo antes disso acontecer. Esse método é executado no front e no back end, então ele não pode ser usado para fazer manipulação de DOM. 
   componentWillUnount - Quando ele será desmontado ou removido da tela.
   */
   componentWillUnmount (){
      clearInterval(this.timer)
   }

   /* shouldComponentUpdate (nextProps, nextState) => boll - usado para verificar se o componente pode ser atualizado, usado para fazer comparações com as propriedades ou estados anteriores. Esse método deve retornar sempre um booleano, quando false não renderiza o componente*/
   shouldComponentUpdate (nextProps, nextState){
      console.log('shouldComponentUpdate timer', this.state, nextState)
      return this.state.time !== nextState.time
   }

   /* componentWillUpdate (nextProps, nextState) - O componente vai ser atualizado, mas ainda não foi, com ele você pode fazer verificações mas não pode alterar valores */
   componentWillUpdate (nextProps, nextState){
      console.log('componentWillUpdate timer', this.state, nextState)
   }

   /* componentDidUpdate (prevProps, prevState) - O componente já foi atualizado, onde você consegue o pegar as informações anteriores */
   componentDidUpdate (prevProps, prevState){
      console.log('componentDidUpdate timer', prevProps, prevState)

   }

   render () {
      // console.log('render timer')
      return (
         <div>Timer: {this.state.time}</div>
      )
   }
}

export default Timer
