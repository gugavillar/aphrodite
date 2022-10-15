import { Products as PageProducts } from '../pages/Products'

export const MENU = [
  {
    link: '/manager',
    label: 'Gerenciamento'
  },
  {
    link: '/rooms',
    label: 'Apartamentos'
  },
  {
    link: '/products',
    label: 'Produtos',
    element: <PageProducts />
  }
]
