import { Button, Flex } from '@chakra-ui/react'

import { CashierInfo } from './CashierInfo'

export const Actions = () => {
  return (
    <Flex
      flex={1}
      height={12}
      p={4}
      align="center"
      justify="flex-end"
      gap={8}
      bg="blackAlpha.50"
    >
      <CashierInfo
        incoming={120}
        withdraw={90}
      />
      <Button
        size="md"
        colorScheme="orange"
        width={28}
        height={8}
      >
        Sair
      </Button>
    </Flex>
  )
}
