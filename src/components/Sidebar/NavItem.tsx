import { Box } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'

interface NavItemProps {
  link: string
  children: string
}

export const NavItem = ({ link, children }: NavItemProps) => {
  const { pathname } = useLocation()

  const isActiveLink = pathname === link

  return (
    <NavLink to={link}>
      <Box
        p={4}
        {...(isActiveLink && {
          borderLeft: '6px solid',
          borderLeftColor: 'green.500',
          textDecoration: 'underline'
        })}
        borderBottom="2px solid"
        borderBottomColor="gray.700"
        color="gray.100"
      >
        {children}
      </Box>
    </NavLink>
  )
}
