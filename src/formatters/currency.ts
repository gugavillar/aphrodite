const money = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const currency = (value: number) => {
  if (!value) return ''
  return money?.format(value)
}

export const fieldFormatCurrency = (value: string) => {
  if (!value) return ''

  const amountNumber = value?.replace(/\D/g, '')

  const amount = money?.format(Number(amountNumber) / 100)

  return amount?.replace(/(R\$\s)/g, '')
}

export const currencyWithoutDotsAndComma = (value: string) => {
  if (!value) return ''

  return value?.replace(/\./g, '')?.replace(/,/g, '.')
}
