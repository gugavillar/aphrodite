import { format } from 'date-fns'

export const formatTime = (date: number) => format(new Date(date), 'HH:mm')

interface ProductItem {
  quantity: number
  value: number
}

export const calculateTotal = (
  productsArray: Array<ProductItem>,
  initialValue: number
) =>
  productsArray?.reduce(
    (total, product) => (total += product?.quantity * product?.value),
    0
  ) + initialValue
