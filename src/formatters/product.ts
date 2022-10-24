import { ProductDatabase, AllProducts } from '../@types/products'
import { currency } from './currency'

export const formatProducts = (products: AllProducts) =>
  products?.data?.map((product) => ({
    ...product?.data,
    value: currency(product?.data?.value),
    productId: product?.ref?.value?.id
  }))

export const formatProduct = (product: ProductDatabase) => ({
  ...product?.data,
  value: currency(product?.data?.value),
  productId: product?.ref?.value?.id
})

export const formatSelectProducts = (products: AllProducts) =>
  products?.data?.map((product) => ({
    label: product?.data?.name,
    value: product?.data?.name
  }))
