import { Text } from '@chakra-ui/react'

import { TypeRoom } from '../../@types/rooms'
import { ExhibitionContainer } from '../../components/Card/ExhibitionContainer'
import { ExhibitionItem } from '../../components/Card/ExhibitionItem'

interface HeaderProps {
  number: number
  type: TypeRoom
}

export const Header = ({ number, type }: HeaderProps) => {
  const formatNumber = number.toString().padStart(2, '0')

  return (
    <ExhibitionContainer>
      <ExhibitionItem
        label="N˚ do apartamento"
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Text fontSize="2xl">{formatNumber}</Text>
      </ExhibitionItem>
      <ExhibitionItem
        label="Tipo do quarto"
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Text fontSize="2xl">{type}</Text>
      </ExhibitionItem>
    </ExhibitionContainer>
  )
}
