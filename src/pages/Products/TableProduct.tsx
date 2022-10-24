import { Flex, Td, Tr, Button } from '@chakra-ui/react'

import { Product } from '../../@types/products'
import { LoadingContainer } from '../../components/Container/LoadingContainer'
import { InfoText } from '../../components/InfoText'
import { Table } from '../../components/Table'
import { TABLE_HEADING_TYPE } from '../../constants/globals'

const headingTable = [
  {
    label: 'Nome do produto',
    type: TABLE_HEADING_TYPE?.string
  },
  {
    label: 'Valor',
    type: TABLE_HEADING_TYPE.string
  },
  {
    label: '',
    type: TABLE_HEADING_TYPE.number
  }
]

interface TableProductProps {
  isLoadingProducts: boolean
  products: Array<Product>
  onDeleteProduct: (product: Product) => Promise<void>
}

export const TableProduct = ({
  isLoadingProducts,
  products,
  onDeleteProduct
}: TableProductProps) => {
  return (
    <Flex
      direction="column"
      mt={12}
    >
      <InfoText
        title="Produtos cadastrados"
        description="Segue abaixo a lista completa de todos os produtos cadastrados. Você poderá excluir os produtos"
      />
      <LoadingContainer isLoadingData={isLoadingProducts}>
        <Flex
          align="center"
          justify="center"
          mt={6}
          width="60vw"
          mx="auto"
        >
          <Table headingTable={headingTable}>
            {products?.map((product) => (
              <Tr key={product?.productId}>
                <Td>{product?.name}</Td>
                <Td>{product?.value}</Td>
                <Td isNumeric>
                  <Button
                    colorScheme="red"
                    width={32}
                    onClick={() => onDeleteProduct(product)}
                  >
                    Excluir
                  </Button>
                </Td>
              </Tr>
            ))}
          </Table>
        </Flex>
      </LoadingContainer>
    </Flex>
  )
}
