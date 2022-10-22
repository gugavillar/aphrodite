import { useCallback, useEffect, useState } from 'react'

import { Flex } from '@chakra-ui/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { formatSelectProducts } from '../../../formatters/product'
import { useToastCustom } from '../../../hooks/useToastCustom'
import { getAllProducts } from '../../../services/products'

import { ModalForm } from '.'

interface SelectProduct {
  label: string
  value: string
  isDisabled: boolean
}

interface OrderContentModalProps {
  register: UseFormRegister<ModalForm>
  error: FieldErrors<ModalForm>
}

export const OrderContentModal = ({
  register,
  error
}: OrderContentModalProps) => {
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)
  const [products, setProducts] = useState<Array<SelectProduct>>([])

  const toast = useToastCustom()

  const loadProducts = useCallback(async () => {
    setIsLoadingProducts(true)
    try {
      const response = await getAllProducts()
      const formattedSelectProducts = formatSelectProducts(response)
      setProducts(formattedSelectProducts)
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

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <Flex gap={8}>
      <Select
        label="Produto"
        placeholder={
          isLoadingProducts ? 'Carregando...' : 'Selecione o produto'
        }
        selectOptions={products}
        {...register('name')}
        error={error?.name?.message}
      />
      <Input
        label="Quantidade"
        width={48}
        type="number"
        step={1}
        {...register('quantity')}
        error={error?.quantity?.message}
      />
    </Flex>
  )
}
