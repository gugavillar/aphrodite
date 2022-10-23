export interface Product {
  productId: string
  name: string
  value: string
  amount: number
}

export interface ProductForm {
  name: string
  value: string
  amount: number
}

export interface ProductSelect {
  label: string
  value: string
  isDisabled: boolean
}

export interface ProductDatabase {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    name: string
    value: number
    amount: number
  }
}

export interface AllProducts {
  data: Array<ProductDatabase>
}
