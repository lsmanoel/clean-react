import React from 'react'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'
import { SingUp } from '@/presentation/pages'
import { makeSingUpValidation } from './singup-validation-factory'
import { makeRemoteAddAccount } from '../../usecases/add-account/remote-add-account-factory'
export const makeSingUp: React.FC = () => {
  return (
    <SingUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSingUpValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
