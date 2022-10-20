import { Flex, Text } from '@chakra-ui/react'

interface ExhibitionItemProps {
  label: string
  description: string
}

export const ExhibitionItem = ({ label, description }: ExhibitionItemProps) => {
  return (
    <Flex
      direction="column"
      textAlign="center"
      width="inherit"
      borderBottom="1px solid"
      borderColor="gray.300"
      height={16}
    >
      <Text fontSize="xs">{label}</Text>
      <Text fontSize="3xl">{description}</Text>
    </Flex>
  )
}
