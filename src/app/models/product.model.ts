export interface Iproduct {
  productId: number
  productSku: string
  productName: string
  productPrice: number
  productShortName: string
  productDescription: string
  createdDate: string
  deliveryTimeSpan: string
  categoryId: number
  productImageUrl: string
  categoryName: string
}

export interface Icategory {
  categoryId: number
  categoryName: string
  createdDate: string
  categoryImageUrl: string
}