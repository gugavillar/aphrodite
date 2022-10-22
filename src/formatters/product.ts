import { CreateProduct, GetAllProducts } from '../services/products'
import { currency } from './currency'

export const formatProducts = (products: GetAllProducts) =>
  products?.data?.map((product) => ({
    ...product?.data,
    value: currency(product?.data?.value),
    productId: product?.ref?.value?.id
  }))

export const formatProduct = (product: CreateProduct) => ({
  ...product?.data,
  value: currency(product?.data?.value),
  productId: product?.ref?.value?.id
})

export const formatSelectProducts = (products: GetAllProducts) =>
  products?.data?.map((product) => ({
    label: product?.data?.name,
    value: product?.data?.name,
    isDisabled: product?.data?.amount <= 0
  }))
