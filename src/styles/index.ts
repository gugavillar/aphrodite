import { extendTheme } from '@chakra-ui/react'

import { globalStyles } from './global'

export const theme = extendTheme({
  ...globalStyles
})
