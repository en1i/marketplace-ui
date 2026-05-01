export type Seller = {
  name: string
  rating: number
  sales: number
}

export type Product = {
  title: string
  shop: string
  price: string
  badge?: string
}

export const sellers: Seller[] = [
  { name: 'CeramicStudio', rating: 4.9, sales: 312 },
  { name: 'VintageFinds', rating: 4.8, sales: 240 },
  { name: 'WoolWorks', rating: 5.0, sales: 187 },
  { name: 'GreenThumb', rating: 4.7, sales: 156 },
]

export const recentListings: Product[] = [
  {
    title: 'Handmade ceramic mug, rustic glaze',
    shop: 'CeramicStudio',
    price: '$24.00',
  },
  {
    title: 'Vintage leather satchel, 1970s',
    shop: 'VintageFinds',
    price: '$84.00',
    badge: 'New',
  },
  {
    title: 'Hand-knit wool scarf, oatmeal',
    shop: 'WoolWorks',
    price: '$48.00',
  },
  {
    title: 'Potted monstera, 6-inch',
    shop: 'GreenThumb',
    price: '$32.00',
  },
]

export const trending: Product[] = [
  {
    title: 'Linen apron, natural',
    shop: 'WoolWorks',
    price: '$36.00',
    badge: 'Bestseller',
  },
  {
    title: 'Brass candlestick pair',
    shop: 'VintageFinds',
    price: '$58.00',
  },
  {
    title: 'Hand-thrown stoneware bowl',
    shop: 'CeramicStudio',
    price: '$28.00',
  },
  {
    title: 'Terracotta planter set of 3',
    shop: 'GreenThumb',
    price: '$42.00',
  },
]
