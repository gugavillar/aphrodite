import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const productScheme = yup.object({
  name: yup.string().required(),
  value: yup
    .number()
    .transform((value) => (isNaN(value) ? null : Number(value)))
    .required(),
  amount: yup
    .number()
    .transform((value) => (isNaN(value) ? null : Number(value)))
    .required()
})

export const productResolver = yupResolver(productScheme)
