'use strict'

import React, { Component } from 'react'

class Form extends Component {
   constructor(){
      super()
      this.state = {
         value: 'Valor Inicial'
      }
   }
   render () {
      return (
         <div>
            <form>
               {/* É impossível mudar o valor do input pq o react renderiza da forma como você gerou. Para mudar o valor do value é necessário usar o método onChange.*/}
               <input type='text' value={this.state.value} 
               onChange={(e) => {
                  console.log(e)
                  this.setState({
                     value: e.target.value
                  })
               }} />
            </form>
         </div>
      )
   }
}

export default Form
