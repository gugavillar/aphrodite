import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const productScheme = yup.object({
  name: yup.string().required('Campo obrigatório'),
  value: yup
    .number()
    .nullable()
    .transform((value) => (isNaN(value) ? null : Number(value)))
    .required('Campo obrigatório')
})

export const productResolver = yupResolver(productScheme)
