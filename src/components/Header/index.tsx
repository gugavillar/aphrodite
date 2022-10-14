import { Flex } from '@chakra-ui/react'

import { Actions } from './Actions'
import { User } from './User'

export const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
    >
      <User name="Jéssica Pereira" />
      <Actions />
    </Flex>
  )
}
