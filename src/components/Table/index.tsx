import { ReactNode } from 'react'

import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th
} from '@chakra-ui/react'

interface TableProps {
  children: ReactNode
  headingTable: Array<{
    label: string
    type: 'number' | 'string'
  }>
}

export const Table = ({ children, headingTable }: TableProps) => {
  return (
    <TableContainer width="inherit">
      <ChakraTable>
        <Thead>
          <Tr>
            {headingTable?.map((heading) => (
              <Th
                key={heading?.label}
                {...(heading?.type === 'number' && { isNumeric: true })}
              >
                {heading?.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </ChakraTable>
    </TableContainer>
  )
}
