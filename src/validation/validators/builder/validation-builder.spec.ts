import faker from 'faker'
import { ValidationBuilder as sut } from './validation-builder'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'
import { CompareFieldsValidation } from '../compare-fields/compare-fields-validation'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const fieldName = faker.database.column()
    const validations = sut.field(fieldName).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(fieldName)])
  })

  test('Should return EmailValidation', () => {
    const fieldName = faker.database.column()
    const validations = sut.field(fieldName).email().build()
    expect(validations).toEqual([new EmailValidation(fieldName)])
  })

  test('Should return MinLengthValidation', () => {
    const fieldName = faker.database.column()
    const minLength = 5
    const validations = sut.field(fieldName).min(minLength).build()
    expect(validations).toEqual([new MinLengthValidation(fieldName, minLength)])
  })

  test('Should return CompareFieldValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = sut.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  test('Should return a list of validators', () => {
    const fieldName = faker.database.column()
    const minLength = 5
    const validations = sut.field(fieldName).required().email().min(minLength).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(fieldName),
      new EmailValidation(fieldName),
      new MinLengthValidation(fieldName, minLength)
    ])
  })
})
