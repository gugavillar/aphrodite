import { PageContainer } from '../../components/Container/PageContainer'
import { InfoText } from '../../components/InfoText'
import { FormRoom } from './FormRoom'

export const Rooms = () => {
  return (
    <PageContainer bg="white">
      <InfoText
        mt={6}
        title="Cadastramento dos quartos"
        description="Preencha o formulário abaixo para cadastrar os quartos da sua empresa. Cada formulário é referente a 1 quarto."
      />
      <FormRoom />
    </PageContainer>
  )
}
