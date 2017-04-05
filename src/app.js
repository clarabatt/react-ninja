'use strict'

import React, { Component } from 'react'
import Title from './components/title'
import Square from './components/square'
import Button from './components/button'
import LikeButton from './components/like-button'
import Timer from './components/timer'
import Form from './components/form'

import './css/style.css'

// --- PROPS E ATRIBUTOS HTML - alguns atributos como data e id você pode passar normalmento, mas alguns como class ele vai dizer que não conhece, pois é uma palavra reservada. Então utilizamos className. Na tag label tbm existe um atributo que é reservado chamado for, no react fica htmlFor.

// --- USANDO CREATE REACTCLASS
// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         {/* --- Passa a prop name para o title
//         <Title name='Clara' lastName='Battesini' />
//         {/* --- Para passar valores de props que não são strings, é necessário colocar dentro de {} 
//         <Title name='booleanos' lastName={true} />
//         <Title name='arrays' lastName={[1, 2, 3, 4]} />
//         <Title name='objetos' lastName={{ first: 'Batt', last: 'esini' }} /> 
//         <p id='umId'> Um ID</p>
//         <p className='umaClasse'> Uma Classe</p>
//       <label htmlFor='input'>Label</label> */}
//       </div>
//     )
//   }
// })

// --- USANDO CLASSES PARA RENDERIZAR
class App extends Component {
	/* --- STATE - para passar um estado é necessário criar um construtor e criar um objeto onde os estados vão ser definidos
		--- Componentes Stateful são componentes que manipulam estados, e stateless não manipulam estados, funções puras são stateless. */
	constructor () {
		// O super traz os métodos e as propriedades do Component
		console.log('constructor')
		super()
		this.state = {
			// text: 'Clara',
			// color: 'green',
			showTimer: true,
			time: 0
		}
	} 
	/* 
	componentWillMount(){
		console.log('componentWillMount app')
	}

	componentDidMount(){
		console.log('componentDidMount app')
	}
	*/
	render () {
		console.log('render app')
		return (
			<div> 
				{/* --- KEYS - Todas as vezes que você fizer uma iteração é necessário usar as keys para o react poder catalogar os elementos, por isso elas precisam ser únicas. Se coincidir de ter keys iguais o react interpreta que são o mesmo elemento e por isso só renderiza um elemento --- 
				{['blue', 'red', 'green', 'black'].map((item, index) => (
					<Square key={index} color={item} />
				))} */}
				
				{/* --- EVENTOS - Para adicionar eventos dentro do jsx pode-se utilizar a notação inline do JS, pq o react trata o código e o evento não fica inline 
				<span onClick={function (e) {
					alert('clicou')
				}}>
					<Square />
					<div onClick={(e) => { console.log('arrow function') }} />
				</span> */}

				{/* --- CHILDREN - Para ela funcionar você deve abrir e fechar a tag, tudo que estiver nesse espaço será renderizado.

				<Button><span>Texto</span> a ser renderizado pela propriedade children</Button>
				*/}

				{/* --- COMPOSIÇÕES
					<LikeButton />
				*/}

				{/* --- STATE	- A função setState serve para alterar o estado, passando um obj com o elemento que quer modificar. Toda vez que o setState é acionado a aplicação renderiza novamente, com apenas as coisas que foram mudadas
					<div onClick={() => this.setState({
						text: 'batt'
					})}>{this.state.text}</div>
				</div>

					--- PASSANDO ESTADOS - Trocando estados usando eventos
				<Square color={this.state.color} />
				{['red', 'green', 'blue'].map((color) => (
					<Button key={color} handleClick={() => this.setState({ color: color })}>
						{color}
					</Button>
				))}
				*/}
			
				{/* --- LIFECYCLE -> timer 
				{this.state.showTimer && <Timer time={this.state.time}  />}
				<Button handleClick={() => this.setState({ showTimer: !this.state.showTimer })}>Show / Hide Timer</Button>
				<Button handleClick={() => this.setState({ time: this.state.time + 10 })}>Change Props</Button>
				*/}

				{/* --- PROPTYPES
				<Button handleClick={() => alert('Foi passada uma função')}>Função</Button>
				<Button handleClick={'não função'}>Não função</Button>
				<Button />
				*/}
			
				{/* --- FORMULÁRIOS
				*/}
				<Form />
			</div>
		)
	}
}

export default App
