export class InvalidCredentialsError extends Error {
  constructor () {
    super('Credencias Inválidas')
    this.name = 'InvalidCredentialsError'
  }
}
