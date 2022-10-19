import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const productScheme = yup.object({
  name: yup.string().required('Campo obrigatório'),
  value: yup
    .number()
    .nullable()
    .transform((value) => (isNaN(value) ? null : Number(value)))
    .required('Campo obrigatório'),
  amount: yup
    .number()
    .min(1, 'Valor deve ser maior ou igual 1')
    .max(9999, 'Valor deve ser menor ou igual a 9999')
    .nullable()
    .transform((value) => (isNaN(value) ? null : Number(value)))
    .required('Campo obrigatório')
})

export const productResolver = yupResolver(productScheme)
