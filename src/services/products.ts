import { faunaAPI, faunaQ } from '../api/fauna'
import { ProductForm } from '../pages/Products/FormProduct'

export interface CreateProduct {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    name: string
    value: number
    amount: number
  }
}

export const createProduct = (product: ProductForm) =>
  faunaAPI.query<CreateProduct>(
    faunaQ.Create(faunaQ.Collection('products'), {
      data: product
    })
  )

export interface GetAllProducts {
  data: Array<{
    ref: {
      value: {
        id: string
      }
    }
    data: {
      name: string
      value: number
      amount: number
    }
  }>
}

export const getAllProducts = () =>
  faunaAPI.query<GetAllProducts>(
    faunaQ.Map(
      faunaQ.Paginate(faunaQ.Documents(faunaQ.Collection('products'))),
      faunaQ.Lambda('productRef', faunaQ.Get(faunaQ.Var('productRef')))
    )
  )

export const deleteProduct = (productId: string) =>
  faunaAPI.query(
    faunaQ.Delete(faunaQ.Ref(faunaQ.Collection('products'), productId))
  )
