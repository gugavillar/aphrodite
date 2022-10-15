import { PageContainer } from '../../components/Container/PageContainer'
import { InfoText } from '../../components/InfoText'
import { FormProduct } from './FormProduct'

export const Products = () => {
  return (
    <PageContainer>
      <InfoText
        mt={6}
        title="Cadastramento de produtos"
        description="Preencha o formulário abaixo para cadastrar os produtos da sua empresa. Cada formulário é referente a 1 produto"
      />
      <FormProduct />
    </PageContainer>
  )
}
