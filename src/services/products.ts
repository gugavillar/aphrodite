import { ProductDatabase, AllProducts, ProductForm } from '../@types/products'
import { faunaAPI, faunaQ } from '../api/fauna'

export const createProduct = (product: ProductForm) =>
  faunaAPI.query<ProductDatabase>(
    faunaQ.Create(faunaQ.Collection('products'), {
      data: product
    })
  )

export const getAllProducts = () =>
  faunaAPI.query<AllProducts>(
    faunaQ.Map(
      faunaQ.Paginate(faunaQ.Documents(faunaQ.Collection('products'))),
      faunaQ.Lambda('productRef', faunaQ.Get(faunaQ.Var('productRef')))
    )
  )

export const deleteProduct = (productId: string) =>
  faunaAPI.query(
    faunaQ.Delete(faunaQ.Ref(faunaQ.Collection('products'), productId))
  )
