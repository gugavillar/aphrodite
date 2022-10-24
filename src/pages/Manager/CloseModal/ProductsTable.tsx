import { Fragment } from 'react'

import { Button, Td, Text, Tr } from '@chakra-ui/react'

import { Expense } from '../../../@types/expenses'
import { LoadingContainer } from '../../../components/Container/LoadingContainer'
import { Table } from '../../../components/Table'
import { TABLE_HEADING_TYPE } from '../../../constants/globals'

const headingTable = [
  {
    label: 'Produto',
    type: TABLE_HEADING_TYPE?.string
  },
  {
    label: 'Preço',
    type: TABLE_HEADING_TYPE.string
  },
  {
    label: 'Quantidade',
    type: TABLE_HEADING_TYPE.string
  },
  {
    label: 'Total',
    type: TABLE_HEADING_TYPE.string
  },
  {
    label: 'Ação',
    type: TABLE_HEADING_TYPE.string
  }
]

interface ProductsTableProps {
  expense: Expense | undefined
}

export const ProductsTable = ({ expense }: ProductsTableProps) => {
  return (
    <LoadingContainer isLoadingData={false}>
      <Fragment>
        <Text
          bg="green.500"
          fontSize="2xl"
          color="white"
          textAlign="center"
          mt={6}
        >
          Tabela de consumo
        </Text>
        <Table headingTable={headingTable}>
          {expense?.products?.map((product, index) => (
            <Tr key={index}>
              <Td>{product?.name}</Td>
              <Td>{product?.value}</Td>
              <Td>{product?.quantity}</Td>
              <Td>{product?.quantity * product?.value}</Td>
              <Td>
                <Button
                  colorScheme="red"
                  width={32}
                  onClick={() => console.log(product)}
                >
                  Excluir
                </Button>
              </Td>
            </Tr>
          ))}
        </Table>
      </Fragment>
    </LoadingContainer>
  )
}
