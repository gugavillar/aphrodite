import { forwardRef, LegacyRef } from 'react'

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label: string
  error?: string
}

const InputField = forwardRef(
  (
    { label, width, error, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <FormControl
        width={width}
        isInvalid={!!error}
      >
        <FormLabel
          fontSize="sm"
          mb={1}
          color="blackAlpha.400"
          fontWeight="semibold"
        >
          {label}
        </FormLabel>
        <ChakraInput
          {...props}
          ref={ref}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    )
  }
)

InputField.displayName = 'Input'

export const Input = InputField
