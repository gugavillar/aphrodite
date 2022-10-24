import { ChangeEvent, useCallback } from 'react'

import { Button, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { ProductForm } from '../../@types/products'
import { Input } from '../../components/Input'
import {
  currencyWithoutDotsAndComma,
  fieldFormatCurrency
} from '../../formatters/currency'
import { productResolver } from '../../schemas/product'

interface FormProductProps {
  onSubmitHandler: (values: ProductForm) => Promise<void>
}

export const FormProduct = ({ onSubmitHandler }: FormProductProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, isValid, isSubmitting, errors }
  } = useForm<ProductForm>({
    resolver: productResolver,
    mode: 'onChange'
  })

  const onSubmit = useCallback(
    async (values: ProductForm) => {
      await onSubmitHandler(values)
      reset()
    },
    [onSubmitHandler, reset]
  )

  return (
    <Flex
      mt={8}
      as="form"
      direction="column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex
        gap={2}
        align="center"
        justify="center"
      >
        <Input
          {...register('name')}
          error={errors?.name?.message}
          type="text"
          label="Nome do produto"
          width={80}
        />
        <Input
          {...register('value', {
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setValue('value', fieldFormatCurrency(event?.target?.value)),
            setValueAs: (value) => currencyWithoutDotsAndComma(value)
          })}
          error={errors?.value?.message}
          type="text"
          label="Valor do produto"
          width={48}
        />
      </Flex>
      <Button
        colorScheme="green"
        width={56}
        mt={4}
        alignSelf="center"
        isDisabled={!isDirty || !isValid}
        type="submit"
        isLoading={isSubmitting}
      >
        Cadastrar
      </Button>
    </Flex>
  )
}
