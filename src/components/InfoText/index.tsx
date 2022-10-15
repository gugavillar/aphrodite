import { Box, BoxProps, Text } from '@chakra-ui/react'

interface InfoTextProps extends BoxProps {
  title: string
  description: string
}

export const InfoText = ({ title, description, ...props }: InfoTextProps) => {
  return (
    <Box
      maxWidth="50%"
      mx="auto"
      textAlign="center"
      {...props}
    >
      <Text
        as="h3"
        fontWeight="semibold"
        fontSize="2xl"
        color="blackAlpha.600"
      >
        {title}
      </Text>
      <Text color="blackAlpha.400">{description}</Text>
    </Box>
  )
}
