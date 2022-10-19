import { Box, Flex, Text, VStack } from '@chakra-ui/react'

import { Input } from '../../components/Input'

export const TableRoom = () => {
  return (
    <Flex
      mt={6}
      align="center"
      justify="space-between"
    >
      <Box
        width="30rem"
        border="1px solid"
        borderColor="gray.300"
      >
        <Text
          color="white"
          bg="blue.500"
          p={2}
          textAlign="center"
          fontWeight="semibold"
        >
          Durante a semana (Seg. a Qui.)
        </Text>
        <VStack
          mt={8}
          spacing={8}
          pb={8}
        >
          <Input
            label="Valor do quarto"
            width={64}
          />
          <Input
            label="Valor excedente / hora"
            width={64}
          />
          <Input
            label="Valor da pernoite"
            width={64}
          />
        </VStack>
      </Box>
      <Box
        width="30rem"
        border="1px solid"
        borderColor="gray.300"
      >
        <Text
          color="white"
          bg="green.500"
          p={2}
          textAlign="center"
          fontWeight="semibold"
        >
          Final de semana (Sex. a Dom.)
        </Text>
        <VStack
          mt={8}
          spacing={8}
          pb={8}
        >
          <Input
            label="Valor do quarto"
            width={64}
          />
          <Input
            label="Valor excedente / hora"
            width={64}
          />
          <Input
            label="Valor da pernoite"
            width={64}
          />
        </VStack>
      </Box>
    </Flex>
  )
}
