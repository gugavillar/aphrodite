import { Box } from '@chakra-ui/react'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export const App = () => {
  return (
    <Box>
      <Header />
      <Sidebar />
    </Box>
  )
}
