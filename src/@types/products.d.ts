export interface Product {
  productId: string
  name: string
  value: string
}

export interface ProductForm {
  name: string
  value: string
}

export interface ProductSelect {
  label: string
  value: string
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
  }
}

export interface AllProducts {
  data: Array<ProductDatabase>
}
