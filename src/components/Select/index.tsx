import { forwardRef, LegacyRef } from 'react'

import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

interface SelectOptions {
  label: string | number
  value: string | number
  isDisabled?: boolean
}

interface SelectProps extends ChakraSelectProps {
  label: string
  selectOptions: Array<SelectOptions>
  error?: string
}

const SelectField = forwardRef(
  (
    { label, width, error, selectOptions, ...props }: SelectProps,
    ref: LegacyRef<HTMLSelectElement>
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
          textAlign="center"
        >
          {label}
        </FormLabel>
        <ChakraSelect
          {...props}
          ref={ref}
        >
          {selectOptions?.map((option) => (
            <option
              key={option?.value}
              disabled={option?.isDisabled}
              value={option?.value}
            >
              {option?.label}
            </option>
          ))}
        </ChakraSelect>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    )
  }
)

SelectField.displayName = 'Select'

export const Select = SelectField
