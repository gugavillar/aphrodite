const money = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const currency = (value: number) => {
  if (!value) return
  return money.format(value)
}
