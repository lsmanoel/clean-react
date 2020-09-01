import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'
import faker from 'faker'

const makeSut = (minLength: number): MinLengthValidation => new MinLengthValidation(faker.database.column(), minLength)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const minLength = 5
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(minLength - 1))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const minLength = 5
    const sut = makeSut(minLength)
    const error = sut.validate(faker.random.alphaNumeric(minLength))
    expect(error).toBeFalsy()
  })
})
