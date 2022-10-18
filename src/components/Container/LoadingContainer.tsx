import { ReactElement } from 'react'

import { Flex, Spinner } from '@chakra-ui/react'

interface LoadingContainerProps {
  isLoadingData: boolean
  children: ReactElement
}

export const LoadingContainer = ({
  isLoadingData,
  children
}: LoadingContainerProps) => {
  return isLoadingData ? (
    <Flex
      width="full"
      align="center"
      justify="center"
      height={48}
    >
      <Spinner
        thickness="3px"
        speed="0.50s"
        emptyColor="gray.200"
        color="green.500"
        size="lg"
      />
    </Flex>
  ) : (
    children
  )
}
