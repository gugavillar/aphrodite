import { Manager as PageManager } from '../pages/Manager'
import { Products as PageProducts } from '../pages/Products'
import { Rooms as PageRooms } from '../pages/Rooms'

export const MENU = [
  {
    link: '/manager',
    label: 'Gerenciamento',
    element: <PageManager />
  },
  {
    link: '/rooms',
    label: 'Apartamentos',
    element: <PageRooms />
  },
  {
    link: '/products',
    label: 'Produtos',
    element: <PageProducts />
  }
]
