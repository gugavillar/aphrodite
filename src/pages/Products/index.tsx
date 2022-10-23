import { useCallback, useEffect, useState } from 'react'

import { Product, ProductForm } from '../../@types/products'
import { PageContainer } from '../../components/Container/PageContainer'
import { InfoText } from '../../components/InfoText'
import { formatProduct, formatProducts } from '../../formatters/product'
import { useToastCustom } from '../../hooks/useToastCustom'
import {
  createProduct,
  getAllProducts,
  deleteProduct
} from '../../services/products'
import { FormProduct } from './FormProduct'
import { TableProduct } from './TableProduct'

export const Products = () => {
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [products, setProducts] = useState<Array<Product>>([])

  const toast = useToastCustom()

  const loadProducts = useCallback(async () => {
    setIsLoadingProducts(true)
    try {
      const response = await getAllProducts()
      const formattedProducts = formatProducts(response)
      setProducts(formattedProducts)
    } catch (error) {
      toast({
        title: 'Falha ao recuperar dados',
        description: 'Erro ao pegar os produtos',
        status: 'error'
      })
    } finally {
      setIsLoadingProducts(false)
    }
  }, [toast])

  const onSubmitHandler = useCallback(
    async (values: ProductForm) => {
      try {
        const response = await createProduct(values)
        const productAdd = formatProduct(response)
        toast({
          title: 'Produto cadastrado',
          description: `O produto ${values?.name} foi inserido.`,
          status: 'success'
        })
        setProducts((prevProducts) => [...prevProducts, { ...productAdd }])
      } catch (error) {
        toast({
          title: 'Falha na inserção',
          description: `O produto ${values?.name} não foi inserido.`,
          status: 'error'
        })
      }
    },
    [toast]
  )

  const onDeleteProduct = useCallback(
    async (product: Product) => {
      try {
        await deleteProduct(product?.productId)
        toast({
          title: 'Produto excluído',
          description: `O produto ${product?.name} foi removido`,
          status: 'success'
        })
        setProducts((prevProducts) =>
          prevProducts?.filter(
            (prevProduct) => prevProduct?.productId !== product?.productId
          )
        )
      } catch (error) {
        toast({
          title: 'Falha ao excluir',
          description: 'O produto não pode ser excluído',
          status: 'error'
        })
      }
    },
    [toast]
  )

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <PageContainer bg="white">
      <InfoText
        mt={6}
        title="Cadastramento de produtos"
        description="Preencha o formulário abaixo para cadastrar os produtos da sua empresa. Cada formulário é referente a 1 produto"
      />
      <FormProduct onSubmitHandler={onSubmitHandler} />
      <TableProduct
        isLoadingProducts={isLoadingProducts}
        products={products}
        onDeleteProduct={onDeleteProduct}
      />
    </PageContainer>
  )
}
