import { faunaAPI, faunaQ } from '../api/fauna'
import { ProductForm } from '../pages/Products/FormProduct'

export const createProduct = (product: ProductForm) =>
  faunaAPI.query(
    faunaQ.Create(faunaQ.Collection('products'), {
      data: product
    })
  )
