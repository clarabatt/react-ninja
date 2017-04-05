'use strict'

import React from 'react'
import Button from '../button'

// --- COMPOSIÇÕES - como o Button usa uma children, podemos usar isso pra fazer composições no react, fazendo um chamar o outro. Podendo passar até mesmo funções genéricas a serem especificadas.

const LikeButton = () => (
   <Button handleClick={() => alert('like button')}>Curtir</Button>
)

export default LikeButton
