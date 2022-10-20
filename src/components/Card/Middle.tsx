import { Fragment } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { currency } from '../../formatters/currency'
import { ExhibitionContainer } from './ExhibitionContainer'
import { ExhibitionItem } from './ExhibitionItem'

interface MiddleProps {
  status: 'Ativo' | 'Inativo'
  roomId: string
}

const STATUS_COLOR = {
  Ativo: 'green.500',
  Inativo: 'gray.500'
}

export const Middle = ({ status, roomId }: MiddleProps) => {
  const expense = currency(400)

  return (
    <Fragment>
      <ExhibitionContainer mt={2}>
        <ExhibitionItem label="Hora de entrada">
          <Text fontSize="2xl">05:00</Text>
        </ExhibitionItem>
        <ExhibitionItem label="Status do quarto">
          <Flex
            bg={STATUS_COLOR[status]}
            borderRadius="full"
            width={5}
            height={5}
            align="center"
            justify="center"
            mt={2}
          />
        </ExhibitionItem>
      </ExhibitionContainer>
      <ExhibitionContainer>
        <ExhibitionItem
          label="Tempo de estadia"
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          <Text fontSize="2xl">05:00</Text>
        </ExhibitionItem>
        <ExhibitionItem
          label="Consumo parcial"
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          <Text fontSize="2xl">{expense}</Text>
        </ExhibitionItem>
      </ExhibitionContainer>
    </Fragment>
  )
}
