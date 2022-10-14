import { Flex, Text } from '@chakra-ui/react'

interface UserProps {
  name: string
}

export const User = ({ name }: UserProps) => {
  return (
    <Flex
      gap={3}
      height={12}
      p={4}
      align="center"
      justify="center"
      bg="blackAlpha.200"
      width={56}
    >
      <Flex
        borderRadius="full"
        width={3}
        height={3}
        bg="green.500"
      />
      <Text>{name}</Text>
    </Flex>
  )
}
