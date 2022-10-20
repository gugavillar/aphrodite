import { ReactElement } from 'react'

import { Flex, FlexProps, Spinner } from '@chakra-ui/react'

interface LoadingContainerProps extends FlexProps {
  isLoadingData: boolean
  children: ReactElement
}

export const LoadingContainer = ({
  isLoadingData,
  children,
  ...props
}: LoadingContainerProps) => {
  return isLoadingData ? (
    <Flex
      width="full"
      align="center"
      justify="center"
      height={48}
      {...props}
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
