import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSingUp } from './factories/pages/singup/singup-factory'

ReactDOM.render(
  <Router
    makeLogin={makeLogin}
    makeSingUp={makeSingUp}
  />,
  document.getElementById('main')
)
