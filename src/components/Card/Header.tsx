import { Text } from '@chakra-ui/react'

import { ExhibitionContainer } from './ExhibitionContainer'
import { ExhibitionItem } from './ExhibitionItem'

interface HeaderProps {
  number: number
  type: 'Normal' | 'Luxo' | 'Master'
}

export const Header = ({ number, type }: HeaderProps) => {
  const formatNumber = number.toString().padStart(2, '0')

  return (
    <ExhibitionContainer>
      <ExhibitionItem
        label="N˚ do quarto"
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