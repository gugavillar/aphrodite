import { useCallback } from 'react'

import { Button, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { InfoText } from '../../components/InfoText'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { useToastCustom } from '../../hooks/useToastCustom'
import { roomResolver } from '../../schemas/room'
import { createRoom } from '../../services/rooms'
import { TableRoom } from './TableRoom'

const ROOM_TYPE = [
  { label: 'Normal', value: 'Normal' },
  { label: 'Luxo', value: 'Luxo' },
  { label: 'Master', value: 'Master' }
]

const ROOM_STATUS = [
  { label: 'Ativo', value: 'Ativo' },
  { label: 'Inativo', value: 'Inativo' }
]

type TypeRoom = 'Normal' | 'Luxo' | 'Master'

type StatusRoom = 'Ativo' | 'Inativo'

type RoomValues = {
  value: string
  excessHour: string
  stayOvernight: string
}

export interface RoomForm {
  number: number
  type: TypeRoom
  status: StatusRoom
  week: RoomValues
  weekend: RoomValues
}

export const FormRoom = () => {
  const toast = useToastCustom()

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, isSubmitting }
  } = useForm<RoomForm>({
    mode: 'onChange',
    resolver: roomResolver
  })

  const onSubmit = useCallback(
    async (values: RoomForm) => {
      try {
        await createRoom(values)
        toast({
          status: 'success',
          title: 'Apartamento cadastrado',
          description: `O apartamento de número ${values?.number} foi inserido`
        })
        reset()
      } catch (error) {
        toast({
          title: 'Falha na inserção',
          description: `O apartamento de número ${values?.number} não foi inserido`,
          status: 'error'
        })
      }
    },
    [reset, toast]
  )

  return (
    <Flex
      as="form"
      mt={8}
      direction="column"
      width="60vw"
      mx="auto"
      align="center"
      justify="center"
      pb={8}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Flex
        gap={2}
        align="center"
        justify="center"
      >
        <Input
          type="number"
          step={1}
          label="N˚ do apartamento"
          width={80}
          {...register('number')}
          error={errors?.number?.message}
        />
        <Select
          placeholder="Selecione o tipo do apartamento"
          label="Tipo do apartamento"
          selectOptions={ROOM_TYPE}
          width={80}
          {...register('type')}
          error={errors?.type?.message}
        />
        <Select
          placeholder="Selecione o status do apartamento"
          label="Status do apartamento"
          selectOptions={ROOM_STATUS}
          width={80}
          {...register('status')}
          error={errors?.status?.message}
        />
      </Flex>
      <InfoText
        mt={12}
        title="Valores"
        description="Preencha, na tabela abaixo, os valores referentes aos períodos do quarto cadastrado"
      />
      <TableRoom
        register={register}
        setValue={setValue}
      />
      <Button
        mt={8}
        colorScheme="green"
        width={56}
        type="submit"
        isLoading={isSubmitting}
        isDisabled={!isValid || !isDirty}
      >
        Cadastrar
      </Button>
    </Flex>
  )
}
