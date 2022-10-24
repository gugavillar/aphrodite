import { Fragment } from 'react'

import { Expense } from '../../../@types/expenses'
import { InfoText } from '../../../components/InfoText'
import { ProductsTable } from './ProductsTable'

interface BodyModalProps {
  expense: Expense | undefined
}

export const BodyModal = ({ expense }: BodyModalProps) => {
  return (
    <Fragment>
      <InfoText
        mt={3}
        title="Fechamento de quarto"
        description="Abaixo você encontrará os dados tabelados do quarto selecionado. Confira todos os dados antes do fechamento do caixa, você poderá ainda adicionar ou remover produtos."
      />
      <ProductsTable expense={expense} />
    </Fragment>
  )
}
