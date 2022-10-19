import { ChangeEvent } from 'react'

import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

import { Input } from '../../components/Input'
import {
  currencyWithoutDotsAndComma,
  fieldFormatCurrency
} from '../../formatters/currency'
import { RoomForm } from './FormRoom'

interface TableRoomProps {
  register: UseFormRegister<RoomForm>
  setValue: UseFormSetValue<RoomForm>
}

export const TableRoom = ({ register, setValue }: TableRoomProps) => {
  return (
    <Flex
      mt={6}
      align="center"
      justify="space-between"
    >
      <Box
        width="30rem"
        border="1px solid"
        borderColor="gray.300"
      >
        <Text
          color="white"
          bg="blue.500"
          p={2}
          textAlign="center"
          fontWeight="semibold"
        >
          Durante a semana (Seg. a Qui.)
        </Text>
        <VStack
          mt={8}
          spacing={8}
          pb={8}
        >
          <Input
            label="Valor do quarto"
            width={64}
            {...register('week.value', {
              onChange: (event: ChangeEvent<HTMLInputElement>) =>
                setValue(
                  'week.value',
                  fieldFormatCurrency(event?.target?.value)
                ),
              setValueAs: (value) => currencyWithoutDotsAndComma(value)
            })}
          />
          <Input
            label="Valor excedente / hora"
            width={64}
            {...register('week.excessHour', {
              onChange: (event: ChangeEvent<HTMLInputElement>) =>
                setValue(
                  'week.excessHour',
                  fieldFormatCurrency(event?.target?.value)
                ),
              setValueAs: (value) => currencyWithoutDotsAndComma(value)
            })}
          />
          <Input
            label="Valor da pernoite"
            width={64}
            {...register('week.stayOvernight', {
              onChange: (event: ChangeEvent<HTMLInputElement>) =>
                setValue(
                  'week.stayOvernight',
                  fieldFormatCurrency(event?.target?.value)
                ),
              setValueAs: (value) => currencyWithoutDotsAndComma(value)
            })}
          />
        </VStack>
      </Box>
      <Box
        width="30rem"
        border="1px solid"
        borderColor="gray.300"
      >
        <Text
          color="white"
          bg="green.500"
          p={2}
          textAlign="center"
          fontWeight="semibold"
        >
          Final de semana (Sex. a Dom.)
        </Text>
        <VStack
          mt={8}
          spacing={8}
          pb={8}
        >
          <Input
            label="Valor do quarto"
            width={64}
            {...register('weekend.value', {
              onChange: (event: ChangeEvent<HTMLInputElement>) =>
                setValue(
                  'weekend.value',
                  fieldFormatCurrency(event?.target?.value)
                ),
              setValueAs: (value) => currencyWithoutDotsAndComma(value)
            })}
          />
          <Input
            label="Valor excedente / hora"
            width={64}
            {...register('weekend.excessHour', {
              onChange: (event: ChangeEvent<HTMLInputElement>) =>
                setValue(
                  'weekend.excessHour',
                  fieldFormatCurrency(event?.target?.value)
                ),
              setValueAs: (value) => currencyWithoutDotsAndComma(value)
            })}
          />
          <Input
            label="Valor da pernoite"
            width={64}
            {...register('weekend.stayOvernight', {
              onChange: (event: ChangeEvent<HTMLInputElement>) =>
                setValue(
                  'weekend.stayOvernight',
                  fieldFormatCurrency(event?.target?.value)
                ),
              setValueAs: (value) => currencyWithoutDotsAndComma(value)
            })}
          />
        </VStack>
      </Box>
    </Flex>
  )
}
