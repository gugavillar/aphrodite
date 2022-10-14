import { Flex } from '@chakra-ui/react'

import { MENU } from '../../constants/menu'
import { NavItem } from './NavItem'

export const NavList = () => {
  return (
    <Flex
      as="nav"
      direction="column"
    >
      {MENU.map((menuItem) => (
        <NavItem
          key={menuItem?.label}
          link={menuItem?.link}
        >
          {menuItem?.label}
        </NavItem>
      ))}
    </Flex>
  )
}
