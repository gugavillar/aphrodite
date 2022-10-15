import { forwardRef, LegacyRef, ReactNode } from 'react'

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Box,
  Text,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label: string
  icon?: ReactNode
}

const InputField = forwardRef(
  (
    { label, width, icon, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <Box
        textAlign="center"
        width={width}
      >
        <Text
          fontSize="sm"
          mb={1}
          color="blackAlpha.400"
          fontWeight="semibold"
        >
          {label}
        </Text>
        <InputGroup>
          {icon && (
            <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          )}
          <ChakraInput
            {...props}
            ref={ref}
          />
        </InputGroup>
      </Box>
    )
  }
)

InputField.displayName = 'Input'

export const Input = InputField
