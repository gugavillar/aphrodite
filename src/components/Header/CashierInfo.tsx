import { Divider, Flex, Text, Box, Center } from '@chakra-ui/react'

import { currency } from '../../formatters/currency'

interface CashierInfoProps {
  incoming: number
  withdraw: number
}

export const CashierInfo = ({ incoming, withdraw }: CashierInfoProps) => {
  const formattedIncoming = currency(incoming)
  const formattedWithdraw = currency(withdraw)
  return (
    <Flex
      width={48}
      align="center"
      justify="space-between"
    >
      <Box textAlign="center">
        <Text
          fontSize="xs"
          color="gray.500"
          lineHeight={1}
        >
          Caixa
        </Text>
        <Text
          fontSize="lg"
          color="green.500"
          fontWeight="semibold"
        >
          {formattedIncoming}
        </Text>
      </Box>
      <Center height={10}>
        <Divider
          orientation="vertical"
          borderColor="gray.400"
        />
      </Center>
      <Box textAlign="center">
        <Text
          fontSize="xs"
          color="gray.500"
          lineHeight={1}
        >
          Sangria
        </Text>
        <Text
          fontSize="lg"
          color="red.500"
          fontWeight="semibold"
        >
          {formattedWithdraw}
        </Text>
      </Box>
    </Flex>
  )
}
