import { Flex, Button } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={3}
      mt={2}
    >
      <Button
        width={28}
        variant="ghost"
        fontSize="2xl"
        fontWeight="normal"
      >
        Pedido
      </Button>
      <Button
        width={28}
        variant="ghost"
        fontSize="2xl"
        fontWeight="normal"
      >
        Fechar
      </Button>
    </Flex>
  )
}
