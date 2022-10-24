import { Dispatch, Fragment, SetStateAction } from 'react'

import {
  Flex,
  RadioGroup,
  VStack,
  Radio,
  Button,
  Box,
  Text
} from '@chakra-ui/react'

import { Expense } from '../../../@types/expenses'
import { currency } from '../../../formatters/currency'
import { calculateTotal } from '../../../formatters/globals'

interface FooterModalProps {
  paymentMethod: string
  setPaymentMethod: Dispatch<SetStateAction<string>>
  expense: Expense | undefined
}

export const FooterModal = ({
  paymentMethod,
  setPaymentMethod,
  expense
}: FooterModalProps) => {
  const isOpenRoom = !!expense?.entryTime && expense?.isOpen

  const spendValue = isOpenRoom
    ? calculateTotal(expense?.products, expense?.value)
    : 0

  const formattedSpendValue = currency(spendValue)

  return (
    <Fragment>
      <Flex
        align="center"
        justify="space-between"
        width="30rem"
      >
        <Box>
          <RadioGroup
            value={paymentMethod}
            onChange={setPaymentMethod}
            color="gray.500"
          >
            <VStack align="flex-start">
              <Radio
                value="credit"
                size="lg"
              >
                Cartão de crédito
              </Radio>
              <Radio
                value="debit"
                size="lg"
              >
                Cartão de débito
              </Radio>
              <Radio
                value="cash"
                size="lg"
              >
                Dinheiro
              </Radio>
              <Radio
                value="pix"
                size="lg"
              >
                Pix
              </Radio>
            </VStack>
          </RadioGroup>
        </Box>
        <Box>
          <Text
            fontSize="xl"
            color="gray.500"
          >
            Total Geral
          </Text>
          <Text
            fontSize="3xl"
            fontWeight="semibold"
            color="green.500"
          >
            {formattedSpendValue}
          </Text>
        </Box>
      </Flex>
      <Button
        width={60}
        colorScheme="green"
      >
        Confirmar pagamento
      </Button>
    </Fragment>
  )
}
