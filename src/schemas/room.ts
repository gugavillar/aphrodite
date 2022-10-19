import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const roomScheme = yup.object({
  number: yup
    .number()
    .min(1, 'Valor deve ser maior ou igual a 1')
    .max(9999, 'Valor deve ser menor ou igual a 9999')
    .nullable()
    .transform((value) => (isNaN(value) ? null : Number(value)))
    .required('Campo obrigatório'),
  type: yup
    .string()
    .oneOf(['Normal', 'Luxo', 'Master'])
    .required('Campo obrigatório'),
  status: yup
    .string()
    .oneOf(['Ativo', 'Inativo'])
    .required('Campo obrigatório'),
  week: yup.object({
    value: yup
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : Number(value)))
      .required('Campo obrigatório'),
    excessHour: yup
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : Number(value)))
      .required('Campo obrigatório'),
    stayOvernight: yup
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : Number(value)))
      .required('Campo obrigatório')
  }),
  weekend: yup.object({
    value: yup
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : Number(value)))
      .required('Campo obrigatório'),
    excessHour: yup
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : Number(value)))
      .required('Campo obrigatório'),
    stayOvernight: yup
      .number()
      .nullable()
      .transform((value) => (isNaN(value) ? null : Number(value)))
      .required('Campo obrigatório')
  })
})

export const roomResolver = yupResolver(roomScheme)
