import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecases/remote-authentication-factory'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
