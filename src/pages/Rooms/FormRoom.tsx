import { Button, Flex } from '@chakra-ui/react'

import { InfoText } from '../../components/InfoText'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
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

export const FormRoom = () => {
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
    >
      <Flex
        gap={2}
        align="center"
        justify="center"
      >
        <Input
          type="number"
          label="N˚ do apartamento"
          width={80}
        />
        <Select
          placeholder="Selecione o tipo do apartamento"
          label="Tipo do apartamento"
          selectOptions={ROOM_TYPE}
          width={80}
        />
        <Select
          placeholder="Selecione o status do apartamento"
          label="Status do apartamento"
          selectOptions={ROOM_STATUS}
          width={80}
        />
      </Flex>
      <InfoText
        mt={12}
        title="Valores"
        description="Preencha, na tabela abaixo, os valores referentes aos períodos do quarto cadastrado"
      />
      <TableRoom />
      <Button
        mt={8}
        colorScheme="green"
        width={56}
        type="submit"
      >
        Cadastrar
      </Button>
    </Flex>
  )
}
