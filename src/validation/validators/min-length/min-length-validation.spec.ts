import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'
import faker from 'faker'

const makeSut = (field: string, minLength: number): MinLengthValidation => new MinLengthValidation(field, minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const minLength = 5
    const sut = makeSut(field, minLength)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(minLength - 1) })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const minLength = 5
    const sut = makeSut(field, minLength)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(minLength) })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exist in schema', () => {
    const minLength = 5
    const sut = makeSut(faker.database.column(), minLength)
    const error = sut.validate({ [faker.database.column()]: faker.random.alphaNumeric(minLength) })
    expect(error).toBeFalsy()
  })
})
