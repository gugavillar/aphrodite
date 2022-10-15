import { ChangeEvent } from 'react'

import { Button, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Input } from '../../components/Input'
import {
  currencyWithoutDotsAndComma,
  fieldFormatCurrency
} from '../../formatters/currency'
import { productResolver } from '../../schemas/product'

interface ProductForm {
  name: string
  value: string
  amount: number
}

export const FormProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid }
  } = useForm<ProductForm>({
    resolver: productResolver,
    mode: 'onChange'
  })

  const onSubmitHandler = (values: ProductForm) => {
    console.log(values)
  }

  return (
    <Flex
      mt={8}
      as="form"
      direction="column"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <Flex
        gap={2}
        align="center"
        justify="center"
      >
        <Input
          {...register('name')}
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
          type="text"
          label="Valor do produto"
          width={48}
        />
        <Input
          {...register('amount')}
          type="number"
          min={1}
          max={9999}
          step={1}
          label="Quantidade de produto"
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
      >
        Cadastrar
      </Button>
    </Flex>
  )
}
