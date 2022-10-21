import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const expenseScheme = yup.object({
  product: yup.string().required('Campo obrigatório'),
  quantity: yup
    .number()
    .nullable()
    .transform((value) => (isNaN(value) ? null : Number(value)))
    .required('Campo obrigatório')
})

export const expenseResolver = yupResolver(expenseScheme)
